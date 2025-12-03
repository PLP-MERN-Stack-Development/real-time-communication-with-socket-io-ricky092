# 🚀 Ricky - Real-Time Chat Application

A feature-rich real-time chat application built with Socket.io, React, and Express. Ricky provides seamless bidirectional communication with support for multiple rooms, private messaging, reactions, and more.

![Ricky Chat](https://img.shields.io/badge/Status-Complete-success)
![Node.js](https://img.shields.io/badge/Node.js-v18+-green)
![React](https://img.shields.io/badge/React-18.2-blue)
![Socket.io](https://img.shields.io/badge/Socket.io-4.6-purple)

## ✨ Features Implemented

### Core Features
- ✅ **Real-time Messaging** - Instant message delivery using Socket.io
- ✅ **User Authentication** - JWT-based authentication with guest mode support
- ✅ **Multiple Chat Rooms** - Create and join different chat channels
- ✅ **Private Messaging** - Direct messages between users
- ✅ **Online Status** - Real-time user presence tracking
- ✅ **Typing Indicators** - See when other users are typing

### Advanced Features
- ✅ **Message Reactions** - React to messages with emojis (👍 ❤️ 😂 🎉)
- ✅ **Read Receipts** - Track who has read your messages
- ✅ **File Sharing** - Share files with metadata display
- ✅ **Browser Notifications** - Desktop notifications for new messages
- ✅ **Sound Notifications** - Audio alerts for incoming messages
- ✅ **Message Pagination** - Efficient loading of message history
- ✅ **Auto-Reconnection** - Automatic reconnection on connection loss
- ✅ **Unread Message Counter** - Track unread messages
- ✅ **Responsive Design** - Works seamlessly on desktop and mobile

## 🏗️ Project Structure

```
ricky-chat/
├── client/                     # React front-end
│   ├── public/
│   │   └── notification.mp3    # Notification sound
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatRoom.jsx    # Main chat interface
│   │   │   ├── ChatRoom.css
│   │   │   ├── Login.jsx       # Authentication component
│   │   │   ├── Login.css
│   │   │   ├── MessageList.jsx # Message display
│   │   │   ├── MessageList.css
│   │   │   ├── MessageInput.jsx # Message input field
│   │   │   ├── MessageInput.css
│   │   │   ├── UserList.jsx    # Online users sidebar
│   │   │   ├── UserList.css
│   │   │   ├── RoomList.jsx    # Room selection sidebar
│   │   │   └── RoomList.css
│   │   ├── socket/
│   │   │   └── socket.js       # Socket.io client setup
│   │   ├── App.jsx             # Main app component
│   │   ├── App.css
│   │   ├── main.jsx            # React entry point
│   │   └── index.css           # Global styles
│   ├── .env                    # Environment variables
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── server/                     # Node.js back-end
│   ├── server.js               # Express + Socket.io server
│   ├── .env                    # Server environment variables
│   └── package.json
├── README.md
└── Week5-Assignment.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Modern web browser

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd ricky-chat
```

2. **Install server dependencies**
```bash
cd server
npm install
```

3. **Install client dependencies**
```bash
cd ../client
npm install
```

### Running the Application

1. **Start the server** (in the `server` directory)
```bash
npm run dev
```
Server will run on `http://localhost:5000`

2. **Start the client** (in the `client` directory)
```bash
npm run dev
```
Client will run on `http://localhost:5173`

3. **Open your browser** and navigate to `http://localhost:5173`

## 🎮 How to Use

### Authentication
- **Register**: Create a new account with username and password
- **Login**: Sign in with existing credentials
- **Guest Mode**: Continue as guest with just a username

### Chatting
- **Send Messages**: Type in the input field and press Enter or click Send
- **Join Rooms**: Click on room names in the left sidebar
- **Create Rooms**: Click the + button in the Rooms section
- **Private Messages**: Click the 💬 icon next to any user's name
- **React to Messages**: Hover over a message and click an emoji
- **Share Files**: Click the 📎 button to attach files

### Features
- **Typing Indicator**: Start typing to show others you're composing
- **Notifications**: Enable browser notifications for new messages
- **Read Receipts**: Messages show checkmarks when read
- **Online Users**: View all connected users in the right sidebar

## 🔧 Configuration

### Server Environment Variables (`.env`)
```env
PORT=5000
CLIENT_URL=http://localhost:5173
JWT_SECRET=your_jwt_secret_key_change_this_in_production
NODE_ENV=development
```

### Client Environment Variables (`.env`)
```env
VITE_SOCKET_URL=http://localhost:5000
VITE_API_URL=http://localhost:5000/api
```

## 📦 Dependencies

### Server
- `express` - Web framework
- `socket.io` - Real-time communication
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variables
- `jsonwebtoken` - JWT authentication
- `bcryptjs` - Password hashing
- `uuid` - Unique ID generation

### Client
- `react` - UI library
- `react-dom` - React DOM rendering
- `socket.io-client` - Socket.io client
- `vite` - Build tool

## 🎯 Assignment Requirements Completed

### Task 1: Project Setup ✅
- Node.js server with Express configured
- Socket.io configured on server and client
- React front-end application created
- Basic connection established

### Task 2: Core Chat Functionality ✅
- User authentication (JWT + guest mode)
- Global chat room with real-time messaging
- Messages display with sender name and timestamp
- Typing indicators implemented
- Online/offline status tracking

### Task 3: Advanced Chat Features ✅
- Private messaging between users
- Multiple chat rooms/channels
- "User is typing" indicator
- File sharing capability
- Read receipts for messages
- Message reactions (4 emoji types)

### Task 4: Real-Time Notifications ✅
- New message notifications
- User join/leave notifications
- Unread message counter
- Sound notifications
- Browser notifications (Web Notifications API)

### Task 5: Performance and UX Optimization ✅
- Message pagination (500 message limit per room)
- Auto-reconnection logic
- Socket.io rooms optimization
- Message delivery acknowledgment
- Responsive design for mobile and desktop

## 🌐 Deployment

### Quick Deployment (20 minutes)

**Read**: `DEPLOYMENT-QUICK-START.md` for fastest deployment

**Detailed Guide**: `DEPLOYMENT-GUIDE.md` for step-by-step instructions

**Visual Guide**: `DEPLOYMENT-VISUAL-GUIDE.md` for screenshots and visuals

### Server Deployment (Render - Free)
1. Push code to GitHub
2. Create Web Service on Render
3. Set Root Directory to `server`
4. Add environment variables
5. Deploy

### Client Deployment (Vercel - Free)
1. Import project from GitHub
2. Set Root Directory to `client`
3. Add environment variables (VITE_SOCKET_URL)
4. Deploy

### Post-Deployment
- Update `CLIENT_URL` in Render with your Vercel URL
- Test real-time features
- Share your live URLs!

**Deployment Files Included:**
- `DEPLOYMENT-QUICK-START.md` - 20-minute guide
- `DEPLOYMENT-GUIDE.md` - Comprehensive guide
- `DEPLOYMENT-VISUAL-GUIDE.md` - Visual walkthrough
- `DEPLOYMENT-CHECKLIST.md` - Step-by-step checklist
- `DEPLOYMENT-TROUBLESHOOTING.md` - Common issues & fixes
- `render.yaml` - Render configuration
- `vercel.json` - Vercel configuration

## 📸 Screenshots

### Login Screen
Beautiful gradient login interface with authentication options

### Chat Interface
Full-featured chat with rooms, messages, and user lists

### Private Messaging
Direct messaging with visual indicators

### Message Reactions
Interactive emoji reactions on messages

## 🤝 Contributing

This is an assignment project. For improvements or bug fixes, please create an issue or pull request.

## 📝 License

MIT License - feel free to use this project for learning purposes.

## 🙏 Acknowledgments

- Socket.io documentation and examples
- React documentation
- Week 5 Assignment requirements

---

**Built with ❤️ for the Real-Time Communication Assignment** 