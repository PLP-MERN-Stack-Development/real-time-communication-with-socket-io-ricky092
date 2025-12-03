# 👤 Ricky Chat - User Guide

## 🎯 Getting Started

### First Time Setup

1. **Install & Start**
   ```bash
   # Run install.bat (Windows) or follow SETUP.md
   # Then run start-dev.bat or start manually
   ```

2. **Open Browser**
   - Navigate to `http://localhost:5173`
   - You'll see the Ricky login screen

3. **Choose Authentication Method**
   - **Guest**: Quick access, just username
   - **Register**: Create permanent account
   - **Login**: Use existing account

---

## 🔐 Authentication

### Guest Mode (Fastest)
1. Enter any username
2. Click "Continue as Guest"
3. Start chatting immediately

**Pros**: Quick, no password needed  
**Cons**: No persistent account

### Register New Account
1. Enter username
2. Enter password
3. Click "Register"
4. Automatically logged in

**Pros**: Permanent account, secure  
**Cons**: Requires password

### Login to Existing Account
1. Enter username
2. Enter password
3. Click "Login"
4. Access your account

**Pros**: Access from any device  
**Cons**: Must remember credentials

---

## 💬 Basic Chatting

### Send a Message
1. Type in the input field at bottom
2. Press **Enter** or click **"Send 🚀"**
3. Message appears instantly

**Tips**:
- Messages show your username
- Timestamp on every message
- Your messages appear on the right (purple)
- Others' messages appear on the left (white)

### Read Messages
- Scroll through message history
- Auto-scrolls to latest message
- System messages show in gray

---

## 🏠 Rooms

### Join a Room
1. Look at left sidebar (Rooms section)
2. Click any room name
3. Room loads with its message history

**Default Room**: General (everyone starts here)

### Create a Room
1. Click **+** button in Rooms header
2. Enter room name
3. Click **"Create"**
4. Room appears in list
5. Click to join

**Examples**:
- "Tech Talk"
- "Random"
- "Gaming"
- "Study Group"

### Switch Rooms
- Click any room in the list
- Messages load instantly
- User list updates
- Typing indicators are room-specific

---

## 💌 Private Messaging

### Start Private Chat
1. Look at right sidebar (Online Users)
2. Find the user you want to message
3. Click **💬** icon next to their name
4. Private chat opens

**Visual Indicators**:
- Orange border on private messages
- "Private chat with [username]" header
- Close button (✕) to return to room

### Send Private Message
1. Type in input field
2. Send like normal message
3. Only you and recipient see it

**Privacy**: Private messages are separate from room messages

---

## 👥 User List

### View Online Users
- Right sidebar shows all online users
- Green dot (●) indicates online status
- Your name shows "(You)"
- User count in header

### Toggle User List
- Click **👥** button in header
- Hides/shows user list
- Useful on smaller screens

---

## 🎭 Message Reactions

### Add Reaction
1. Hover over any message
2. Reaction buttons appear above message
3. Click an emoji:
   - 👍 Like
   - ❤️ Love
   - 😂 Laugh
   - 🎉 Celebrate

### View Reactions
- Reactions show below message
- Number indicates how many people reacted
- Example: "👍 3" means 3 people liked it

**Note**: You can react to your own messages too!

---

## ✓ Read Receipts

### How It Works
- Click any message to mark as read
- Messages show "✓✓ Read by X people"
- Automatic tracking
- Real-time updates

**Privacy**: You can see who read your messages

---

## 📎 File Sharing

### Share a File
1. Click **📎** button (left of input field)
2. Select file from your computer
3. File info appears in chat

**What's Shared**:
- File name
- File size (in KB)
- File type
- 📎 icon indicator

**Note**: Currently shares metadata only (not actual file download)

---

## 🔔 Notifications

### In-App Notifications
- Toast notifications appear top-right
- Show sender name and message preview
- Auto-dismiss after 5 seconds
- Multiple notifications stack

### Browser Notifications
- Desktop notifications when tab is inactive
- Permission requested on first use
- Click "Allow" to enable
- Works even when browser is minimized

### Sound Notifications
- Plays sound on new message
- Automatic playback
- Non-intrusive tone

### Unread Counter
- Red badge in header
- Shows number of unread messages
- Resets when you send a message

---

## ⌨️ Typing Indicators

### Show You're Typing
- Just start typing
- Others see "[Your name] is typing..."
- Automatically stops after 1 second of inactivity

### See Others Typing
- Appears below message list
- Shows all users currently typing
- Example: "Alice, Bob are typing..."

---

## 🎨 Interface Guide

### Header (Top)
- **Left**: Ricky logo, connection status
- **Right**: Username, unread count, user list toggle, logout

### Main Area (Center)
- **Top**: Current room/chat name
- **Middle**: Message list (scrollable)
- **Bottom**: Typing indicator, message input

### Left Sidebar
- **Rooms**: List of available rooms
- **+**: Create new room
- **#**: Room indicator

### Right Sidebar
- **Online Users**: All connected users
- **●**: Online status
- **💬**: Private message button

---

## 🔄 Connection Status

### Connected (Green)
- "● Connected" in header
- Can send/receive messages
- All features working

### Disconnected (Red)
- "○ Disconnected" in header
- Auto-reconnection in progress
- Messages queued until reconnected

### Reconnection
- Automatic after disconnect
- 5 attempts with 1-second delay
- Seamless when successful

---

## ⚙️ Settings & Preferences

### Logout
1. Click **"Logout"** button in header
2. Returns to login screen
3. Disconnects from server
4. Clears session (for registered users)

### Browser Notifications
1. Browser prompts for permission
2. Click "Allow" to enable
3. Click "Block" to disable
4. Can change in browser settings later

---

## 💡 Tips & Tricks

### Keyboard Shortcuts
- **Enter**: Send message
- **Shift + Enter**: New line (not implemented, sends message)

### Best Practices
- Use descriptive room names
- React to messages to show engagement
- Use private messages for sensitive topics
- Create rooms for specific topics
- Check typing indicator before sending

### Performance Tips
- Close unused browser tabs
- Keep message history reasonable
- Refresh if experiencing issues

---

## 🐛 Troubleshooting

### Can't Send Messages
- Check connection status (header)
- Verify server is running
- Refresh browser

### Not Receiving Messages
- Check if you're in the right room
- Verify connection status
- Check browser console for errors

### Notifications Not Working
- Check browser notification permissions
- Verify sound is not muted
- Try refreshing the page

### User List Not Updating
- Refresh the page
- Check connection status
- Verify server is running

### Private Messages Not Working
- Ensure user is still online
- Check if you clicked the right user
- Try closing and reopening private chat

---

## 🎯 Common Scenarios

### Scenario 1: Team Discussion
1. Create room "Team Meeting"
2. Share room name with team
3. Everyone joins room
4. Discuss in real-time

### Scenario 2: One-on-One Chat
1. Find user in user list
2. Click 💬 icon
3. Private conversation starts
4. Close when done

### Scenario 3: File Sharing
1. Click 📎 button
2. Select file
3. File info appears in chat
4. Everyone sees file details

### Scenario 4: Quick Question
1. Send message in General
2. Wait for typing indicator
3. See response in real-time
4. React with 👍 to acknowledge

---

## 📱 Mobile Usage

### Mobile Interface
- Responsive design
- Touch-friendly buttons
- Swipe-friendly layout
- Optimized spacing

### Mobile Tips
- Use landscape for more space
- Tap 👥 to hide user list
- Tap room name to see options
- Long-press for additional actions (if implemented)

---

## 🎓 Advanced Features

### Multiple Rooms
- Join multiple rooms
- Switch between them
- Each has separate history
- Room-specific users

### Message History
- Last 500 messages per room
- Loads on room join
- Scrollable history
- Persistent during session

### User Presence
- Real-time online status
- Join/leave notifications
- Active user tracking
- User count display

---

## 📊 Feature Summary

| Feature | How to Use | Location |
|---------|-----------|----------|
| Send Message | Type & Enter | Bottom input |
| Join Room | Click room name | Left sidebar |
| Create Room | Click + button | Left sidebar |
| Private Message | Click 💬 icon | Right sidebar |
| React | Hover & click emoji | On message |
| Share File | Click 📎 button | Bottom left |
| Toggle Users | Click 👥 button | Top right |
| Logout | Click Logout | Top right |

---

## 🎉 You're Ready!

You now know everything about using Ricky Chat!

**Quick Start**:
1. Login/Register
2. Send a message
3. Create a room
4. Invite friends
5. Start chatting!

**Need Help?**
- Check QUICK-START.md for setup
- Check FEATURES.md for feature list
- Check README.md for documentation

---

**Happy Chatting with Ricky! 🚀**
