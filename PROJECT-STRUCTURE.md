# 📁 Ricky Chat - Project Structure

## Complete File Tree

```
ricky-chat/
│
├── 📄 README.md                    # Main documentation
├── 📄 SETUP.md                     # Setup instructions
├── 📄 QUICK-START.md               # Quick start guide
├── 📄 FEATURES.md                  # Complete feature list
├── 📄 PROJECT-STRUCTURE.md         # This file
├── 📄 Week5-Assignment.md          # Assignment requirements
├── 📄 .gitignore                   # Git ignore rules
├── 📄 install.bat                  # Windows installation script
├── 📄 start-dev.bat                # Windows start script
│
├── 📁 server/                      # Backend application
│   ├── 📄 server.js                # Main server file (300+ lines)
│   ├── 📄 package.json             # Server dependencies
│   ├── 📄 .env                     # Environment variables
│   └── 📁 node_modules/            # Dependencies (after npm install)
│
└── 📁 client/                      # Frontend application
    ├── 📄 index.html               # HTML entry point
    ├── 📄 package.json             # Client dependencies
    ├── 📄 vite.config.js           # Vite configuration
    ├── 📄 .env                     # Client environment variables
    │
    ├── 📁 public/                  # Static assets
    │   ├── 📄 notification.mp3     # Notification sound
    │   └── 📄 ricky-icon.png       # App icon
    │
    ├── 📁 src/                     # Source code
    │   ├── 📄 main.jsx             # React entry point
    │   ├── 📄 App.jsx              # Main app component
    │   ├── 📄 App.css              # App styles
    │   ├── 📄 index.css            # Global styles
    │   │
    │   ├── 📁 socket/              # Socket.io setup
    │   │   └── 📄 socket.js        # Socket client & hooks
    │   │
    │   └── 📁 components/          # React components
    │       ├── 📄 ChatRoom.jsx     # Main chat interface
    │       ├── 📄 ChatRoom.css     # Chat room styles
    │       ├── 📄 Login.jsx        # Authentication UI
    │       ├── 📄 Login.css        # Login styles
    │       ├── 📄 MessageList.jsx  # Message display
    │       ├── 📄 MessageList.css  # Message styles
    │       ├── 📄 MessageInput.jsx # Message input field
    │       ├── 📄 MessageInput.css # Input styles
    │       ├── 📄 UserList.jsx     # Online users sidebar
    │       ├── 📄 UserList.css     # User list styles
    │       ├── 📄 RoomList.jsx     # Room selection sidebar
    │       └── 📄 RoomList.css     # Room list styles
    │
    └── 📁 node_modules/            # Dependencies (after npm install)
```

## File Descriptions

### Root Level Files

| File | Purpose | Lines |
|------|---------|-------|
| README.md | Main project documentation | 200+ |
| SETUP.md | Detailed setup instructions | 100+ |
| QUICK-START.md | Quick reference guide | 150+ |
| FEATURES.md | Complete feature documentation | 400+ |
| Week5-Assignment.md | Assignment requirements | 150+ |
| .gitignore | Git ignore patterns | 30+ |
| install.bat | Windows installation script | 50+ |
| start-dev.bat | Windows startup script | 30+ |

### Server Files

| File | Purpose | Lines | Key Features |
|------|---------|-------|--------------|
| server.js | Express + Socket.io server | 300+ | Authentication, rooms, messaging, reactions |
| package.json | Dependencies & scripts | 30+ | Express, Socket.io, JWT, bcrypt |
| .env | Environment configuration | 5+ | Port, URLs, secrets |

### Client Files

#### Core Files
| File | Purpose | Lines | Key Features |
|------|---------|-------|--------------|
| main.jsx | React entry point | 10+ | App mounting |
| App.jsx | Main app component | 50+ | Auth state, routing |
| index.html | HTML template | 15+ | Root div, meta tags |
| vite.config.js | Build configuration | 10+ | React plugin, port |

#### Socket Files
| File | Purpose | Lines | Key Features |
|------|---------|-------|--------------|
| socket.js | Socket.io client | 150+ | Connection, events, custom hook |

#### Component Files
| File | Purpose | Lines | Key Features |
|------|---------|-------|--------------|
| ChatRoom.jsx | Main chat interface | 250+ | Messages, rooms, users, notifications |
| ChatRoom.css | Chat room styling | 150+ | Layout, header, notifications |
| Login.jsx | Authentication UI | 100+ | Login, register, guest mode |
| Login.css | Login styling | 100+ | Form, buttons, responsive |
| MessageList.jsx | Message display | 100+ | Messages, reactions, read receipts |
| MessageList.css | Message styling | 150+ | Bubbles, animations, reactions |
| MessageInput.jsx | Message input | 80+ | Input, typing, file upload |
| MessageInput.css | Input styling | 60+ | Input field, buttons |
| UserList.jsx | User sidebar | 60+ | Online users, private message |
| UserList.css | User list styling | 80+ | User items, status indicators |
| RoomList.jsx | Room sidebar | 70+ | Room list, create room |
| RoomList.css | Room list styling | 100+ | Room items, form |

## Code Statistics

### Total Lines of Code
- **Server**: ~350 lines
- **Client**: ~1,500 lines
- **Documentation**: ~1,000 lines
- **Total**: ~2,850 lines

### File Count
- **JavaScript/JSX**: 14 files
- **CSS**: 7 files
- **Configuration**: 6 files
- **Documentation**: 5 files
- **Total**: 32 files

### Component Breakdown
- **React Components**: 6 components
- **Socket Events**: 15+ events
- **API Endpoints**: 4 endpoints
- **Features**: 50+ features

## Technology Stack

### Backend
```
Node.js
├── Express (Web framework)
├── Socket.io (Real-time communication)
├── JWT (Authentication)
├── Bcryptjs (Password hashing)
├── CORS (Cross-origin support)
└── UUID (Unique IDs)
```

### Frontend
```
React 18
├── Vite (Build tool)
├── Socket.io Client (Real-time)
├── React Hooks (State management)
└── CSS3 (Styling)
```

## Data Flow

```
User Action
    ↓
React Component
    ↓
Socket.io Client
    ↓
WebSocket Connection
    ↓
Socket.io Server
    ↓
Event Handler
    ↓
Data Processing
    ↓
Emit to Clients
    ↓
Socket.io Client
    ↓
React State Update
    ↓
UI Re-render
```

## Component Hierarchy

```
App
└── isAuthenticated?
    ├── No → Login
    │         ├── Login Form
    │         ├── Register Form
    │         └── Guest Button
    │
    └── Yes → ChatRoom
              ├── Header
              │   ├── Logo
              │   ├── Status
              │   ├── Username
              │   └── Logout
              │
              ├── Container
              │   ├── RoomList
              │   │   ├── Room Items
              │   │   └── Create Room
              │   │
              │   ├── ChatMain
              │   │   ├── Title
              │   │   ├── MessageList
              │   │   │   └── Message Items
              │   │   ├── Typing Indicator
              │   │   └── MessageInput
              │   │
              │   └── UserList
              │       └── User Items
              │
              └── Notifications
                  └── Notification Items
```

## Socket Events

### Client → Server
- `user_join` - User authentication
- `send_message` - Send message to room
- `private_message` - Send private message
- `typing` - Typing indicator
- `add_reaction` - Add emoji reaction
- `mark_read` - Mark message as read
- `join_room` - Join a room
- `create_room` - Create new room
- `share_file` - Share file metadata

### Server → Client
- `connect` - Connection established
- `disconnect` - Connection lost
- `receive_message` - New message
- `private_message` - New private message
- `user_list` - Updated user list
- `user_joined` - User joined room
- `user_left` - User left room
- `typing_users` - Users typing
- `room_created` - New room created
- `room_history` - Room message history
- `new_message_notification` - Notification
- `message_reaction` - Reaction update
- `message_read` - Read receipt update

## State Management

### Server State (In-Memory)
- `users` - Map of connected users
- `rooms` - Map of chat rooms
- `messages` - Map of room messages
- `privateMessages` - Map of private messages
- `typingUsers` - Map of typing users
- `messageReactions` - Map of reactions
- `registeredUsers` - Map of registered users

### Client State (React)
- `isAuthenticated` - Auth status
- `username` - Current username
- `token` - JWT token
- `messages` - Message array
- `users` - Online users array
- `typingUsers` - Typing users array
- `currentRoom` - Active room
- `rooms` - Available rooms
- `isConnected` - Connection status
- `unreadCount` - Unread messages
- `selectedUser` - Private chat user
- `notifications` - Notification array

## Build & Deploy

### Development
```bash
# Server: npm run dev (nodemon)
# Client: npm run dev (vite)
```

### Production
```bash
# Server: npm start (node)
# Client: npm run build (vite build)
```

### Deployment Targets
- **Server**: Render, Railway, Heroku
- **Client**: Vercel, Netlify, GitHub Pages

---

**Complete project structure for Ricky Chat! 🚀**
