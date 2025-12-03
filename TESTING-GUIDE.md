# 🧪 Ricky Chat - Testing Guide

## 📋 Pre-Testing Checklist

Before you start testing:
- [ ] Server is running on port 5000
- [ ] Client is running on port 5173
- [ ] Browser is open to localhost:5173
- [ ] No console errors visible
- [ ] Connection status shows "Connected"

---

## 🎯 Test Scenarios

### Test 1: Authentication Flow

#### 1.1 Guest Login
**Steps**:
1. Open application
2. Enter username "TestUser1"
3. Click "Continue as Guest"

**Expected**:
- ✅ Redirected to chat interface
- ✅ Username shows in header
- ✅ Connection status is "Connected"
- ✅ User appears in user list

#### 1.2 User Registration
**Steps**:
1. Logout if logged in
2. Click "Don't have an account? Register"
3. Enter username "TestUser2"
4. Enter password "password123"
5. Click "Register"

**Expected**:
- ✅ Account created successfully
- ✅ Automatically logged in
- ✅ Token stored in localStorage
- ✅ Can logout and login again

#### 1.3 User Login
**Steps**:
1. Logout
2. Enter username "TestUser2"
3. Enter password "password123"
4. Click "Login"

**Expected**:
- ✅ Successfully logged in
- ✅ Same user session restored
- ✅ Can access all features

---

### Test 2: Basic Messaging

#### 2.1 Send Message
**Steps**:
1. Login as any user
2. Type "Hello World!" in input
3. Press Enter

**Expected**:
- ✅ Message appears in chat
- ✅ Message shows on right side (purple)
- ✅ Username and timestamp visible
- ✅ Input field clears

#### 2.2 Receive Message
**Steps**:
1. Open second browser window
2. Login as different user
3. Send message from second window

**Expected**:
- ✅ Message appears in first window
- ✅ Message shows on left side (white)
- ✅ Notification sound plays
- ✅ Unread counter increases
- ✅ Toast notification appears

#### 2.3 Multiple Messages
**Steps**:
1. Send 5 messages quickly
2. Observe message list

**Expected**:
- ✅ All messages appear
- ✅ Correct order (oldest to newest)
- ✅ Auto-scroll to bottom
- ✅ Smooth animations

---

### Test 3: Room Management

#### 3.1 Create Room
**Steps**:
1. Click + button in Rooms section
2. Enter "Test Room"
3. Click "Create"

**Expected**:
- ✅ Room appears in room list
- ✅ Room is created on server
- ✅ Other users can see the room

#### 3.2 Join Room
**Steps**:
1. Click "Test Room" in room list
2. Observe interface

**Expected**:
- ✅ Room name shows in header
- ✅ Message history loads (empty for new room)
- ✅ User list updates
- ✅ Can send messages in new room

#### 3.3 Switch Rooms
**Steps**:
1. Send message in "Test Room"
2. Switch to "General"
3. Send message in "General"
4. Switch back to "Test Room"

**Expected**:
- ✅ Messages stay in correct rooms
- ✅ History loads correctly
- ✅ No message mixing
- ✅ Smooth transitions

---

### Test 4: Private Messaging

#### 4.1 Start Private Chat
**Steps**:
1. Have two users online
2. User 1 clicks 💬 next to User 2
3. Observe interface

**Expected**:
- ✅ Header shows "Private chat with User2"
- ✅ Message area clears
- ✅ Close button (✕) appears
- ✅ Input still works

#### 4.2 Send Private Message
**Steps**:
1. In private chat, type "Private message"
2. Send message

**Expected**:
- ✅ Message has orange border
- ✅ Only sender and recipient see it
- ✅ Other users don't see it
- ✅ Notification sent to recipient

#### 4.3 Close Private Chat
**Steps**:
1. Click ✕ button
2. Observe interface

**Expected**:
- ✅ Returns to room view
- ✅ Room messages visible again
- ✅ Private messages not mixed with room

---

### Test 5: Typing Indicators

#### 5.1 Show Typing
**Steps**:
1. Have two users in same room
2. User 1 starts typing
3. Observe User 2's screen

**Expected**:
- ✅ "User1 is typing..." appears
- ✅ Shows below message list
- ✅ Updates in real-time

#### 5.2 Stop Typing
**Steps**:
1. User 1 stops typing for 1 second
2. Observe User 2's screen

**Expected**:
- ✅ Typing indicator disappears
- ✅ Automatic timeout works

#### 5.3 Multiple Users Typing
**Steps**:
1. Have three users in room
2. User 1 and User 2 start typing
3. Observe User 3's screen

**Expected**:
- ✅ "User1, User2 are typing..." appears
- ✅ Shows both users
- ✅ Updates as users stop/start

---

### Test 6: Message Reactions

#### 6.1 Add Reaction
**Steps**:
1. Hover over any message
2. Click 👍 emoji
3. Observe message

**Expected**:
- ✅ Reaction buttons appear on hover
- ✅ Reaction added to message
- ✅ Shows "👍 1" below message
- ✅ Updates for all users

#### 6.2 Multiple Reactions
**Steps**:
1. Add 👍 to message
2. Add ❤️ to same message
3. Have another user add 👍

**Expected**:
- ✅ Both reactions show
- ✅ 👍 count increases to 2
- ✅ ❤️ shows count of 1
- ✅ All users see updates

#### 6.3 All Reaction Types
**Steps**:
1. Test all 4 reactions: 👍 ❤️ 😂 🎉
2. Add each to different messages

**Expected**:
- ✅ All reactions work
- ✅ Correct emoji displays
- ✅ Counts update properly

---

### Test 7: Read Receipts

#### 7.1 Mark as Read
**Steps**:
1. User 1 sends message
2. User 2 clicks on message
3. Observe User 1's screen

**Expected**:
- ✅ "✓✓ Read by 1 person" appears
- ✅ Updates in real-time
- ✅ Shows below message

#### 7.2 Multiple Readers
**Steps**:
1. User 1 sends message
2. User 2 and User 3 click message
3. Observe User 1's screen

**Expected**:
- ✅ "✓✓ Read by 2 people" appears
- ✅ Count increases correctly
- ✅ Real-time updates

---

### Test 8: File Sharing

#### 8.1 Share File
**Steps**:
1. Click 📎 button
2. Select any file
3. Observe chat

**Expected**:
- ✅ File picker opens
- ✅ File info appears in chat
- ✅ Shows file name
- ✅ Shows file size in KB
- ✅ 📎 icon visible

#### 8.2 Multiple Files
**Steps**:
1. Share 3 different files
2. Observe message list

**Expected**:
- ✅ All files appear
- ✅ Correct metadata for each
- ✅ Proper formatting

---

### Test 9: Notifications

#### 9.1 In-App Notifications
**Steps**:
1. User 1 sends message
2. Observe User 2's screen

**Expected**:
- ✅ Toast notification appears top-right
- ✅ Shows sender name
- ✅ Shows message preview
- ✅ Auto-dismisses after 5 seconds

#### 9.2 Sound Notifications
**Steps**:
1. Ensure sound is on
2. Receive new message
3. Listen for sound

**Expected**:
- ✅ Sound plays
- ✅ Not too loud
- ✅ Plays once per message

#### 9.3 Browser Notifications
**Steps**:
1. Allow browser notifications
2. Switch to different tab
3. Receive message

**Expected**:
- ✅ Desktop notification appears
- ✅ Shows sender and message
- ✅ Works when tab inactive

#### 9.4 Unread Counter
**Steps**:
1. Receive 3 messages
2. Observe header
3. Send a message

**Expected**:
- ✅ Badge shows "3"
- ✅ Red badge visible
- ✅ Resets to 0 after sending

---

### Test 10: User Presence

#### 10.1 User Join
**Steps**:
1. Have User 1 in room
2. User 2 joins room
3. Observe User 1's screen

**Expected**:
- ✅ System message: "User2 joined the room"
- ✅ User 2 appears in user list
- ✅ User count increases

#### 10.2 User Leave
**Steps**:
1. User 2 closes browser/logs out
2. Observe User 1's screen

**Expected**:
- ✅ System message: "User2 left the room"
- ✅ User 2 removed from user list
- ✅ User count decreases

#### 10.3 Online Status
**Steps**:
1. Check user list
2. Observe status indicators

**Expected**:
- ✅ Green dot (●) next to all users
- ✅ "You" label on current user
- ✅ User count accurate

---

### Test 11: Connection Management

#### 11.1 Disconnect
**Steps**:
1. Stop server
2. Observe client

**Expected**:
- ✅ Status changes to "○ Disconnected"
- ✅ Red color indicator
- ✅ Auto-reconnection attempts

#### 11.2 Reconnect
**Steps**:
1. Restart server
2. Observe client

**Expected**:
- ✅ Automatically reconnects
- ✅ Status changes to "● Connected"
- ✅ Can send messages again
- ✅ User rejoins room

#### 11.3 Network Issues
**Steps**:
1. Simulate network interruption
2. Restore network
3. Observe behavior

**Expected**:
- ✅ Graceful handling
- ✅ Automatic recovery
- ✅ No data loss

---

### Test 12: Responsive Design

#### 12.1 Desktop View
**Steps**:
1. View on desktop (1400px+)
2. Check all elements

**Expected**:
- ✅ Three-column layout
- ✅ All sidebars visible
- ✅ Proper spacing
- ✅ Readable text

#### 12.2 Tablet View
**Steps**:
1. Resize to 768px
2. Check layout

**Expected**:
- ✅ Layout adjusts
- ✅ Sidebars narrower
- ✅ Still functional
- ✅ Touch-friendly

#### 12.3 Mobile View
**Steps**:
1. Resize to 480px
2. Check all features

**Expected**:
- ✅ Single column layout
- ✅ Collapsible sidebars
- ✅ Touch-optimized
- ✅ All features work

---

### Test 13: Performance

#### 13.1 Message Load
**Steps**:
1. Send 100 messages
2. Observe performance

**Expected**:
- ✅ Smooth scrolling
- ✅ No lag
- ✅ Messages load quickly
- ✅ Memory usage reasonable

#### 13.2 Multiple Users
**Steps**:
1. Have 10 users online
2. All send messages
3. Observe performance

**Expected**:
- ✅ No slowdown
- ✅ All messages delivered
- ✅ User list updates
- ✅ Stable connection

#### 13.3 Room Switching
**Steps**:
1. Create 5 rooms
2. Switch between them rapidly
3. Observe performance

**Expected**:
- ✅ Fast switching
- ✅ No lag
- ✅ Correct history loads
- ✅ No errors

---

### Test 14: Error Handling

#### 14.1 Invalid Login
**Steps**:
1. Try login with wrong password
2. Observe error

**Expected**:
- ✅ Error message displays
- ✅ "Invalid credentials" shown
- ✅ Can try again
- ✅ No crash

#### 14.2 Empty Message
**Steps**:
1. Try sending empty message
2. Observe behavior

**Expected**:
- ✅ Send button disabled
- ✅ Nothing sent
- ✅ No error

#### 14.3 Server Down
**Steps**:
1. Stop server
2. Try to send message
3. Observe behavior

**Expected**:
- ✅ Graceful handling
- ✅ Connection status updates
- ✅ Auto-reconnect attempts
- ✅ No crash

---

## 📊 Test Results Template

### Test Session Information
- **Date**: ___________
- **Tester**: ___________
- **Browser**: ___________
- **OS**: ___________

### Results Summary
- **Total Tests**: 50+
- **Passed**: ___________
- **Failed**: ___________
- **Skipped**: ___________

### Issues Found
1. ___________
2. ___________
3. ___________

### Notes
___________

---

## 🎯 Quick Test (5 Minutes)

For a quick functionality check:

1. ✅ Login works
2. ✅ Can send message
3. ✅ Can create room
4. ✅ Can join room
5. ✅ Typing indicator works
6. ✅ User list updates
7. ✅ Notifications work
8. ✅ Reactions work
9. ✅ Private messages work
10. ✅ Connection stable

---

## 🔍 Detailed Test (30 Minutes)

For comprehensive testing:

1. ✅ All authentication methods
2. ✅ All messaging features
3. ✅ All room operations
4. ✅ All user interactions
5. ✅ All notification types
6. ✅ All reactions
7. ✅ Read receipts
8. ✅ File sharing
9. ✅ Connection handling
10. ✅ Responsive design
11. ✅ Performance
12. ✅ Error handling

---

## 🐛 Bug Report Template

**Title**: ___________

**Description**: ___________

**Steps to Reproduce**:
1. ___________
2. ___________
3. ___________

**Expected Behavior**: ___________

**Actual Behavior**: ___________

**Screenshots**: ___________

**Environment**:
- Browser: ___________
- OS: ___________
- Version: ___________

---

## ✅ Final Checklist

Before submitting:
- [ ] All core features tested
- [ ] All advanced features tested
- [ ] No critical bugs
- [ ] Performance acceptable
- [ ] Responsive design works
- [ ] Documentation accurate
- [ ] Code has no errors
- [ ] Ready for deployment

---

**Testing Complete! 🎉**

If all tests pass, Ricky Chat is ready for production!
