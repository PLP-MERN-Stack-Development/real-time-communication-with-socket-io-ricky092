// server.js - Ricky Chat Application Server

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory storage
const users = new Map();
const rooms = new Map();
const messages = new Map();
const privateMessages = new Map();
const typingUsers = new Map();
const messageReactions = new Map();
const readReceipts = new Map();
const registeredUsers = new Map();

// Initialize default room
rooms.set('general', { id: 'general', name: 'General', users: new Set() });
messages.set('general', []);

// Authentication middleware
const authenticateToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET || 'secret');
  } catch {
    return null;
  }
};

// API Routes
app.post('/api/auth/register', async (req, res) => {
  const { username, password } = req.body;
  
  if (registeredUsers.has(username)) {
    return res.status(400).json({ error: 'Username already exists' });
  }
  
  const hashedPassword = await bcrypt.hash(password, 10);
  const userId = uuidv4();
  
  registeredUsers.set(username, { userId, username, password: hashedPassword });
  
  const token = jwt.sign({ userId, username }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
  
  res.json({ token, username, userId });
});

app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;
  
  const user = registeredUsers.get(username);
  
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  const token = jwt.sign({ userId: user.userId, username }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
  
  res.json({ token, username, userId: user.userId });
});

app.get('/api/messages/:roomId', (req, res) => {
  const { roomId } = req.params;
  const { page = 1, limit = 50 } = req.query;
  
  const roomMessages = messages.get(roomId) || [];
  const start = (page - 1) * limit;
  const end = start + parseInt(limit);
  
  res.json({
    messages: roomMessages.slice(start, end),
    total: roomMessages.length,
    page: parseInt(page),
    hasMore: end < roomMessages.length
  });
});

app.get('/api/rooms', (req, res) => {
  const roomList = Array.from(rooms.values()).map(room => ({
    id: room.id,
    name: room.name,
    userCount: room.users.size
  }));
  res.json(roomList);
});

app.get('/', (req, res) => {
  res.send('Ricky Chat Server is running! 🚀');
});

// Socket.io connection handler
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);
  
  let currentUser = null;
  let currentRoom = 'general';

  // User authentication and join
  socket.on('user_join', ({ username, token, room = 'general' }) => {
    const userData = token ? authenticateToken(token) : { username, userId: socket.id };
    
    if (!userData) {
      socket.emit('auth_error', 'Invalid token');
      return;
    }
    
    currentUser = {
      id: socket.id,
      userId: userData.userId,
      username: userData.username,
      room,
      online: true,
      joinedAt: new Date().toISOString()
    };
    
    users.set(socket.id, currentUser);
    socket.join(room);
    currentRoom = room;
    
    if (!rooms.has(room)) {
      rooms.set(room, { id: room, name: room, users: new Set() });
      messages.set(room, []);
    }
    
    rooms.get(room).users.add(socket.id);
    
    io.to(room).emit('user_joined', {
      username: currentUser.username,
      id: socket.id,
      timestamp: new Date().toISOString()
    });
    
    io.to(room).emit('user_list', Array.from(rooms.get(room).users).map(id => users.get(id)));
    
    socket.emit('room_history', messages.get(room) || []);
    
    console.log(`${username} joined room: ${room}`);
  });

  // Send message to room
  socket.on('send_message', ({ message, room = currentRoom }) => {
    if (!currentUser) return;
    
    const messageData = {
      id: uuidv4(),
      sender: currentUser.username,
      senderId: socket.id,
      message,
      room,
      timestamp: new Date().toISOString(),
      reactions: {},
      readBy: [socket.id]
    };
    
    if (!messages.has(room)) {
      messages.set(room, []);
    }
    
    messages.get(room).push(messageData);
    
    if (messages.get(room).length > 500) {
      messages.get(room).shift();
    }
    
    io.to(room).emit('receive_message', messageData);
    
    socket.to(room).emit('new_message_notification', {
      sender: currentUser.username,
      message: message.substring(0, 50),
      room
    });
  });

  // Private messaging
  socket.on('private_message', ({ to, message }) => {
    if (!currentUser) return;
    
    const messageData = {
      id: uuidv4(),
      from: currentUser.username,
      fromId: socket.id,
      to,
      message,
      timestamp: new Date().toISOString(),
      isPrivate: true,
      read: false
    };
    
    const pmKey = [socket.id, to].sort().join('-');
    if (!privateMessages.has(pmKey)) {
      privateMessages.set(pmKey, []);
    }
    privateMessages.get(pmKey).push(messageData);
    
    socket.to(to).emit('private_message', messageData);
    socket.emit('private_message', messageData);
    
    socket.to(to).emit('new_message_notification', {
      sender: currentUser.username,
      message: message.substring(0, 50),
      isPrivate: true
    });
  });

  // Typing indicator
  socket.on('typing', ({ isTyping, room = currentRoom }) => {
    if (!currentUser) return;
    
    const key = `${room}-${socket.id}`;
    
    if (isTyping) {
      typingUsers.set(key, currentUser.username);
    } else {
      typingUsers.delete(key);
    }
    
    const roomTypingUsers = Array.from(typingUsers.entries())
      .filter(([k]) => k.startsWith(`${room}-`))
      .map(([, username]) => username);
    
    socket.to(room).emit('typing_users', roomTypingUsers);
  });

  // Message reactions
  socket.on('add_reaction', ({ messageId, reaction, room = currentRoom }) => {
    if (!currentUser) return;
    
    const roomMessages = messages.get(room);
    if (!roomMessages) return;
    
    const message = roomMessages.find(m => m.id === messageId);
    if (!message) return;
    
    if (!message.reactions) message.reactions = {};
    if (!message.reactions[reaction]) message.reactions[reaction] = [];
    
    if (!message.reactions[reaction].includes(socket.id)) {
      message.reactions[reaction].push(socket.id);
    }
    
    io.to(room).emit('message_reaction', { messageId, reactions: message.reactions });
  });

  // Read receipts
  socket.on('mark_read', ({ messageId, room = currentRoom }) => {
    if (!currentUser) return;
    
    const roomMessages = messages.get(room);
    if (!roomMessages) return;
    
    const message = roomMessages.find(m => m.id === messageId);
    if (!message) return;
    
    if (!message.readBy) message.readBy = [];
    if (!message.readBy.includes(socket.id)) {
      message.readBy.push(socket.id);
    }
    
    io.to(room).emit('message_read', { messageId, readBy: message.readBy });
  });

  // Join room
  socket.on('join_room', (roomId) => {
    if (!currentUser) return;
    
    socket.leave(currentRoom);
    rooms.get(currentRoom)?.users.delete(socket.id);
    
    socket.join(roomId);
    currentRoom = roomId;
    currentUser.room = roomId;
    
    if (!rooms.has(roomId)) {
      rooms.set(roomId, { id: roomId, name: roomId, users: new Set() });
      messages.set(roomId, []);
    }
    
    rooms.get(roomId).users.add(socket.id);
    
    io.to(roomId).emit('user_joined', {
      username: currentUser.username,
      id: socket.id,
      timestamp: new Date().toISOString()
    });
    
    io.to(roomId).emit('user_list', Array.from(rooms.get(roomId).users).map(id => users.get(id)));
    
    socket.emit('room_history', messages.get(roomId) || []);
  });

  // Create room
  socket.on('create_room', (roomName) => {
    if (!currentUser) return;
    
    const roomId = roomName.toLowerCase().replace(/\s+/g, '-');
    
    if (!rooms.has(roomId)) {
      rooms.set(roomId, { id: roomId, name: roomName, users: new Set() });
      messages.set(roomId, []);
    }
    
    io.emit('room_created', { id: roomId, name: roomName });
  });

  // File sharing (metadata only)
  socket.on('share_file', ({ fileName, fileSize, fileType, room = currentRoom }) => {
    if (!currentUser) return;
    
    const messageData = {
      id: uuidv4(),
      sender: currentUser.username,
      senderId: socket.id,
      message: `Shared a file: ${fileName}`,
      room,
      timestamp: new Date().toISOString(),
      isFile: true,
      fileData: { fileName, fileSize, fileType },
      reactions: {},
      readBy: [socket.id]
    };
    
    messages.get(room).push(messageData);
    io.to(room).emit('receive_message', messageData);
  });

  // Disconnect
  socket.on('disconnect', () => {
    if (currentUser) {
      const room = currentUser.room;
      
      rooms.get(room)?.users.delete(socket.id);
      users.delete(socket.id);
      
      Array.from(typingUsers.keys())
        .filter(key => key.endsWith(`-${socket.id}`))
        .forEach(key => typingUsers.delete(key));
      
      io.to(room).emit('user_left', {
        username: currentUser.username,
        id: socket.id,
        timestamp: new Date().toISOString()
      });
      
      io.to(room).emit('user_list', Array.from(rooms.get(room)?.users || []).map(id => users.get(id)));
      
      console.log(`${currentUser.username} disconnected`);
    }
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Ricky Chat Server running on port ${PORT}`);
});

module.exports = { app, server, io }; 