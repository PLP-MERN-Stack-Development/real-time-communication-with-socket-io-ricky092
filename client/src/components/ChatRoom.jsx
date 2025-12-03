import { useState, useEffect, useRef } from 'react';
import { socket } from '../socket/socket';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import UserList from './UserList';
import RoomList from './RoomList';
import './ChatRoom.css';

function ChatRoom({ username, token, onLogout }) {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [typingUsers, setTypingUsers] = useState([]);
  const [currentRoom, setCurrentRoom] = useState('general');
  const [rooms, setRooms] = useState([{ id: 'general', name: 'General' }]);
  const [isConnected, setIsConnected] = useState(false);
  const [showUserList, setShowUserList] = useState(true);
  const [unreadCount, setUnreadCount] = useState(0);
  const [selectedUser, setSelectedUser] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const audioRef = useRef(null);

  useEffect(() => {
    // Request notification permission
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }

    // Connect to socket
    socket.connect();
    socket.emit('user_join', { username, token, room: currentRoom });

    // Connection events
    socket.on('connect', () => setIsConnected(true));
    socket.on('disconnect', () => setIsConnected(false));

    // Message events
    socket.on('receive_message', (message) => {
      setMessages((prev) => [...prev, message]);
      
      if (message.senderId !== socket.id) {
        setUnreadCount((prev) => prev + 1);
        playNotificationSound();
        showNotification(message.sender, message.message);
      }
    });

    socket.on('room_history', (history) => {
      setMessages(history);
    });

    socket.on('private_message', (message) => {
      setMessages((prev) => [...prev, message]);
      
      if (message.fromId !== socket.id) {
        setUnreadCount((prev) => prev + 1);
        playNotificationSound();
        showNotification(`${message.from} (Private)`, message.message);
      }
    });

    // User events
    socket.on('user_list', (userList) => {
      setUsers(userList.filter(u => u));
    });

    socket.on('user_joined', (user) => {
      addSystemMessage(`${user.username} joined the room`);
    });

    socket.on('user_left', (user) => {
      addSystemMessage(`${user.username} left the room`);
    });

    // Typing events
    socket.on('typing_users', (users) => {
      setTypingUsers(users);
    });

    // Room events
    socket.on('room_created', (room) => {
      setRooms((prev) => [...prev, room]);
    });

    // Notification events
    socket.on('new_message_notification', (notification) => {
      addNotification(notification);
    });

    // Reaction events
    socket.on('message_reaction', ({ messageId, reactions }) => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === messageId ? { ...msg, reactions } : msg
        )
      );
    });

    // Read receipt events
    socket.on('message_read', ({ messageId, readBy }) => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === messageId ? { ...msg, readBy } : msg
        )
      );
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('receive_message');
      socket.off('room_history');
      socket.off('private_message');
      socket.off('user_list');
      socket.off('user_joined');
      socket.off('user_left');
      socket.off('typing_users');
      socket.off('room_created');
      socket.off('new_message_notification');
      socket.off('message_reaction');
      socket.off('message_read');
    };
  }, [username, token, currentRoom]);

  const addSystemMessage = (text) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        system: true,
        message: text,
        timestamp: new Date().toISOString(),
      },
    ]);
  };

  const addNotification = (notification) => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { ...notification, id }]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 5000);
  };

  const playNotificationSound = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  };

  const showNotification = (title, body) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(title, {
        body: body.substring(0, 100),
        icon: '/ricky-icon.png',
        badge: '/ricky-badge.png',
      });
    }
  };

  const handleSendMessage = (message) => {
    if (selectedUser) {
      socket.emit('private_message', { to: selectedUser.id, message });
    } else {
      socket.emit('send_message', { message, room: currentRoom });
    }
    setUnreadCount(0);
  };

  const handleTyping = (isTyping) => {
    socket.emit('typing', { isTyping, room: currentRoom });
  };

  const handleJoinRoom = (roomId) => {
    setCurrentRoom(roomId);
    setMessages([]);
    setSelectedUser(null);
    socket.emit('join_room', roomId);
  };

  const handleCreateRoom = (roomName) => {
    socket.emit('create_room', roomName);
  };

  const handleReaction = (messageId, reaction) => {
    socket.emit('add_reaction', { messageId, reaction, room: currentRoom });
  };

  const handleMarkRead = (messageId) => {
    socket.emit('mark_read', { messageId, room: currentRoom });
  };

  const handlePrivateMessage = (user) => {
    setSelectedUser(user);
    setMessages([]);
  };

  const handleFileShare = (file) => {
    socket.emit('share_file', {
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      room: currentRoom,
    });
  };

  return (
    <div className="chat-room">
      <audio ref={audioRef} src="/notification.mp3" preload="auto" />
      
      <div className="chat-header">
        <div className="header-left">
          <h1>🚀 Ricky</h1>
          <span className={`status ${isConnected ? 'connected' : 'disconnected'}`}>
            {isConnected ? '● Connected' : '○ Disconnected'}
          </span>
        </div>
        <div className="header-right">
          <span className="username">👤 {username}</span>
          {unreadCount > 0 && <span className="unread-badge">{unreadCount}</span>}
          <button onClick={() => setShowUserList(!showUserList)} className="btn-icon">
            {showUserList ? '👥' : '👤'}
          </button>
          <button onClick={onLogout} className="btn-logout">
            Logout
          </button>
        </div>
      </div>

      <div className="chat-container">
        <RoomList
          rooms={rooms}
          currentRoom={currentRoom}
          onJoinRoom={handleJoinRoom}
          onCreateRoom={handleCreateRoom}
        />

        <div className="chat-main">
          <div className="chat-title">
            {selectedUser ? (
              <>
                <span>💬 Private chat with {selectedUser.username}</span>
                <button onClick={() => setSelectedUser(null)} className="btn-close">
                  ✕
                </button>
              </>
            ) : (
              <span>#{currentRoom}</span>
            )}
          </div>

          <MessageList
            messages={messages}
            currentUserId={socket.id}
            onReaction={handleReaction}
            onMarkRead={handleMarkRead}
          />

          {typingUsers.length > 0 && (
            <div className="typing-indicator">
              {typingUsers.join(', ')} {typingUsers.length === 1 ? 'is' : 'are'} typing...
            </div>
          )}

          <MessageInput
            onSendMessage={handleSendMessage}
            onTyping={handleTyping}
            onFileShare={handleFileShare}
          />
        </div>

        {showUserList && (
          <UserList
            users={users}
            currentUserId={socket.id}
            onPrivateMessage={handlePrivateMessage}
          />
        )}
      </div>

      {notifications.length > 0 && (
        <div className="notifications">
          {notifications.map((notif) => (
            <div key={notif.id} className="notification">
              <strong>{notif.sender}</strong>
              <p>{notif.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ChatRoom;
