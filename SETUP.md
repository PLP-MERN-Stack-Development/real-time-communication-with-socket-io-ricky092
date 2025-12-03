# 🚀 Ricky Chat - Quick Setup Guide

## Step 1: Install Dependencies

### Server Setup
```bash
cd server
npm install
```

This will install:
- express
- socket.io
- cors
- dotenv
- jsonwebtoken
- bcryptjs
- uuid
- nodemon (dev dependency)

### Client Setup
```bash
cd client
npm install
```

This will install:
- react
- react-dom
- socket.io-client
- react-router-dom
- vite
- @vitejs/plugin-react

## Step 2: Environment Configuration

The `.env` files are already created with default values:

**Server** (`server/.env`):
- PORT=5000
- CLIENT_URL=http://localhost:5173
- JWT_SECRET=your_jwt_secret_key_change_this_in_production

**Client** (`client/.env`):
- VITE_SOCKET_URL=http://localhost:5000
- VITE_API_URL=http://localhost:5000/api

## Step 3: Run the Application

### Terminal 1 - Start Server
```bash
cd server
npm run dev
```
✅ Server running on http://localhost:5000

### Terminal 2 - Start Client
```bash
cd client
npm run dev
```
✅ Client running on http://localhost:5173

## Step 4: Test the Application

1. Open http://localhost:5173 in your browser
2. Create an account or continue as guest
3. Start chatting!

## Troubleshooting

### Port Already in Use
If port 5000 or 5173 is already in use:
- Change PORT in `server/.env`
- Update VITE_SOCKET_URL in `client/.env` accordingly

### Connection Issues
- Make sure both server and client are running
- Check that firewall isn't blocking the ports
- Verify the URLs in .env files match

### Dependencies Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Features to Test

✅ User registration and login
✅ Guest mode
✅ Sending messages
✅ Creating rooms
✅ Joining different rooms
✅ Private messaging
✅ Typing indicators
✅ Message reactions
✅ File sharing
✅ Browser notifications
✅ Sound notifications
✅ Read receipts
✅ Online user list
✅ Auto-reconnection

## Next Steps

- Customize the styling
- Add more emoji reactions
- Implement message search
- Add user profiles
- Deploy to production

Enjoy using Ricky! 🚀
