import { useEffect, useRef } from 'react';
import './MessageList.css';

function MessageList({ messages, currentUserId, onReaction, onMarkRead }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  const handleReaction = (messageId, emoji) => {
    onReaction(messageId, emoji);
  };

  const handleMessageClick = (messageId) => {
    onMarkRead(messageId);
  };

  return (
    <div className="message-list">
      {messages.map((msg) => {
        if (msg.system) {
          return (
            <div key={msg.id} className="system-message">
              {msg.message}
            </div>
          );
        }

        const isOwn = msg.senderId === currentUserId;
        const isPrivate = msg.isPrivate;

        return (
          <div
            key={msg.id}
            className={`message ${isOwn ? 'own' : 'other'} ${isPrivate ? 'private' : ''}`}
            onClick={() => handleMessageClick(msg.id)}
          >
            <div className="message-header">
              <span className="message-sender">{msg.sender}</span>
              <span className="message-time">{formatTime(msg.timestamp)}</span>
            </div>
            
            <div className="message-content">
              {msg.isFile ? (
                <div className="file-message">
                  📎 {msg.fileData.fileName}
                  <span className="file-size">
                    ({(msg.fileData.fileSize / 1024).toFixed(2)} KB)
                  </span>
                </div>
              ) : (
                msg.message
              )}
            </div>

            {msg.reactions && Object.keys(msg.reactions).length > 0 && (
              <div className="message-reactions">
                {Object.entries(msg.reactions).map(([emoji, users]) => (
                  <span key={emoji} className="reaction">
                    {emoji} {users.length}
                  </span>
                ))}
              </div>
            )}

            <div className="message-actions">
              <button onClick={() => handleReaction(msg.id, '👍')} title="Like">
                👍
              </button>
              <button onClick={() => handleReaction(msg.id, '❤️')} title="Love">
                ❤️
              </button>
              <button onClick={() => handleReaction(msg.id, '😂')} title="Laugh">
                😂
              </button>
              <button onClick={() => handleReaction(msg.id, '🎉')} title="Celebrate">
                🎉
              </button>
            </div>

            {msg.readBy && msg.readBy.length > 1 && (
              <div className="read-receipt">
                ✓✓ Read by {msg.readBy.length - 1} {msg.readBy.length === 2 ? 'person' : 'people'}
              </div>
            )}
          </div>
        );
      })}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default MessageList;
