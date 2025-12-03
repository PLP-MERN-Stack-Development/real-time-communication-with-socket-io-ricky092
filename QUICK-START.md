# ⚡ Ricky Chat - Quick Start Guide

## 🚀 Fastest Way to Get Started

### Option 1: Automated Installation (Windows)
```bash
# Double-click install.bat
# Then double-click start-dev.bat
```

### Option 2: Manual Installation
```bash
# Install dependencies
cd server && npm install
cd ../client && npm install

# Start server (Terminal 1)
cd server && npm run dev

# Start client (Terminal 2)
cd client && npm run dev
```

### Option 3: One-Line Commands
```bash
# Server
cd server & npm install & npm run dev

# Client (in new terminal)
cd client & npm install & npm run dev
```

## 🎮 First Time Usage

1. **Open Browser**: Navigate to `http://localhost:5173`

2. **Choose Login Method**:
   - **Guest**: Just enter a username
   - **Register**: Create account with username + password
   - **Login**: Use existing credentials

3. **Start Chatting**:
   - Type message in bottom input
   - Press Enter or click "Send 🚀"

## 💡 Quick Feature Guide

### Send a Message
- Type in input field → Press Enter

### Create a Room
- Click **+** button in Rooms section → Enter name → Create

### Join a Room
- Click any room name in left sidebar

### Private Message
- Click **💬** icon next to user's name

### React to Message
- Hover over message → Click emoji (👍 ❤️ 😂 🎉)

### Share a File
- Click **📎** button → Select file

### Toggle User List
- Click **👥** button in header

## 🔧 Common Issues

### "Port already in use"
```bash
# Change port in server/.env
PORT=5001

# Update client/.env
VITE_SOCKET_URL=http://localhost:5001
```

### "Cannot connect to server"
- Make sure server is running first
- Check server terminal for errors
- Verify URLs in .env files

### "Dependencies not found"
```bash
# Reinstall dependencies
cd server
rm -rf node_modules package-lock.json
npm install

cd ../client
rm -rf node_modules package-lock.json
npm install
```

## 📋 Checklist

Before starting:
- [ ] Node.js v18+ installed
- [ ] npm installed
- [ ] Both terminals ready
- [ ] Ports 5000 and 5173 available

After installation:
- [ ] Server running on port 5000
- [ ] Client running on port 5173
- [ ] Browser opened to localhost:5173
- [ ] Can send messages
- [ ] Can see other users

## 🎯 Test All Features

Quick test checklist:
- [ ] Login/Register works
- [ ] Can send messages
- [ ] Can create room
- [ ] Can join room
- [ ] Can send private message
- [ ] Typing indicator shows
- [ ] Can react to messages
- [ ] Can share files
- [ ] Notifications work
- [ ] User list updates

## 📞 Need Help?

1. Check `SETUP.md` for detailed setup
2. Check `FEATURES.md` for feature documentation
3. Check `README.md` for full documentation
4. Review `Week5-Assignment.md` for requirements

## 🎉 You're Ready!

Open `http://localhost:5173` and start chatting with Ricky! 🚀

---

**Pro Tip**: Open multiple browser windows to test real-time features with different users!
