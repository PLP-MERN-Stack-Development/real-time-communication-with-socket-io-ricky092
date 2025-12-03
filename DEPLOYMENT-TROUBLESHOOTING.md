# 🔧 Deployment Troubleshooting Guide

## Common Issues and Solutions

---

## 🚨 CORS Errors

### Symptom
Browser console shows:
```
Access to XMLHttpRequest has been blocked by CORS policy
```

### Solution 1: Check CLIENT_URL
1. Go to Render dashboard
2. Open your server service
3. Go to "Environment" tab
4. Verify `CLIENT_URL` matches your Vercel URL **exactly**
5. No trailing slash: ✅ `https://app.vercel.app` ❌ `https://app.vercel.app/`
6. Save and wait for redeploy

### Solution 2: Check Server Code
Verify `server/server.js` has correct CORS setup:
```javascript
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});
```

---

## 🔌 Connection Issues

### Symptom
- "Disconnected" status in app
- Can't send messages
- Console shows WebSocket errors

### Solution 1: Check Socket URL
1. Go to Vercel dashboard
2. Open your project
3. Go to Settings → Environment Variables
4. Verify `VITE_SOCKET_URL` is correct
5. Should be: `https://your-server.onrender.com`
6. Redeploy if changed

### Solution 2: Check Server Status
1. Open your Render server URL directly
2. Should see: "Ricky Chat Server is running! 🚀"
3. If not, check Render logs for errors

### Solution 3: Wait for Spin-up
- Render free tier spins down after 15 min
- First request takes 30-60 seconds
- Just wait and refresh

---

## 🏗️ Build Failures

### Render Build Failed

**Check Logs**:
1. Go to Render dashboard
2. Click your service
3. Go to "Logs" tab
4. Look for error messages

**Common Causes**:

#### Missing Dependencies
```
Error: Cannot find module 'express'
```
**Fix**: Ensure all dependencies in `server/package.json`

#### Wrong Node Version
```
Error: Unsupported engine
```
**Fix**: Add to `server/package.json`:
```json
"engines": {
  "node": ">=18.0.0"
}
```

#### Wrong Directory
```
Error: Cannot find package.json
```
**Fix**: Set Root Directory to `server` in Render settings

---

### Vercel Build Failed

**Check Logs**:
1. Go to Vercel dashboard
2. Click your deployment
3. View build logs

**Common Causes**:

#### Missing Dependencies
```
Error: Cannot find module 'react'
```
**Fix**: Ensure all dependencies in `client/package.json`

#### Wrong Build Command
```
Error: Command not found
```
**Fix**: Verify Build Command is `npm run build`

#### Environment Variables Missing
```
Error: VITE_SOCKET_URL is not defined
```
**Fix**: Add environment variables in Vercel settings

#### Wrong Directory
```
Error: No package.json found
```
**Fix**: Set Root Directory to `client` in Vercel settings

---

## 📦 Module Not Found Errors

### Server Side

**Error**: `Cannot find module 'socket.io'`

**Fix**:
1. Check `server/package.json` has the dependency
2. In Render, trigger manual deploy
3. Or push a change to GitHub to trigger redeploy

### Client Side

**Error**: `Cannot find module 'react'`

**Fix**:
1. Check `client/package.json` has the dependency
2. In Vercel, redeploy with "Clear Cache"
3. Or push a change to GitHub

---

## 🌐 Environment Variables Issues

### Variables Not Working

**Render**:
1. Go to Environment tab
2. Click "Add Environment Variable"
3. Enter key and value
4. Click "Save Changes"
5. Wait for automatic redeploy

**Vercel**:
1. Go to Settings → Environment Variables
2. Add variable
3. Select environment (Production, Preview, Development)
4. Save
5. Redeploy from Deployments tab

### Variables Not Updating

**Fix**: Redeploy after changing variables
- Render: Auto-redeploys
- Vercel: Manual redeploy needed

---

## 🐌 Performance Issues

### Server Very Slow

**Cause**: Free tier spins down after 15 min inactivity

**Solutions**:
1. **Accept it**: First request takes 30-60 sec
2. **Keep alive**: Ping server every 10 min (external service)
3. **Upgrade**: Render paid plan ($7/month) - no spin down

### Client Slow to Load

**Check**:
1. Vercel deployment logs for warnings
2. Bundle size (should be < 1MB)
3. Network tab in browser DevTools

**Fix**:
- Optimize images
- Remove unused dependencies
- Enable Vercel's automatic optimizations

---

## 🔐 Authentication Issues

### JWT Errors

**Error**: `JsonWebTokenError: invalid signature`

**Fix**: 
1. Check `JWT_SECRET` is same in Render environment
2. Don't change JWT_SECRET after users register
3. Clear localStorage in browser and re-register

### Login Not Working

**Check**:
1. Browser console for errors
2. Network tab - check API calls
3. Server logs in Render

---

## 📱 Mobile Issues

### Not Responsive

**Check**:
1. Viewport meta tag in `client/index.html`
2. CSS media queries
3. Test in browser DevTools mobile view

### Touch Not Working

**Fix**: Ensure touch events are handled in React components

---

## 🔍 Debugging Steps

### General Debugging Process

1. **Check Browser Console** (F12)
   - Look for red errors
   - Check Network tab
   - Verify WebSocket connection

2. **Check Server Logs**
   - Render dashboard → Logs tab
   - Look for errors or warnings

3. **Check Build Logs**
   - Render: Events tab
   - Vercel: Deployment logs

4. **Verify URLs**
   - Server URL accessible
   - Client URL accessible
   - Environment variables correct

5. **Test Locally**
   - Does it work on localhost?
   - If yes, it's a deployment config issue
   - If no, it's a code issue

---

## 🆘 Still Stuck?

### Get Help

1. **Check Documentation**
   - Render: https://render.com/docs
   - Vercel: https://vercel.com/docs

2. **Community Support**
   - Render Community: https://community.render.com
   - Vercel Discord: https://vercel.com/discord

3. **Review Logs**
   - Copy error messages
   - Search for specific errors
   - Check Stack Overflow

### Provide Information

When asking for help, include:
- Error message (full text)
- Deployment logs
- Browser console errors
- What you've tried
- URLs (server and client)

---

## ✅ Verification Checklist

Before asking for help, verify:

- [ ] Code works locally
- [ ] All files pushed to GitHub
- [ ] Root directories set correctly
- [ ] Environment variables set
- [ ] Build commands correct
- [ ] Dependencies in package.json
- [ ] No .env files in GitHub
- [ ] CORS configured
- [ ] URLs match exactly

---

## 🔄 Fresh Start

If all else fails, start over:

### Render
1. Delete service
2. Create new service
3. Follow deployment guide carefully

### Vercel
1. Delete project
2. Import again
3. Set environment variables
4. Deploy

---

## 📞 Quick Fixes Reference

| Issue | Quick Fix |
|-------|-----------|
| CORS Error | Update CLIENT_URL in Render |
| Can't Connect | Check VITE_SOCKET_URL in Vercel |
| Build Failed | Check logs for specific error |
| Slow Server | Wait 60 sec (free tier spin-up) |
| 404 Error | Check Root Directory setting |
| Module Error | Verify package.json dependencies |
| Env Vars Not Working | Redeploy after changing |

---

**Remember**: Most issues are configuration problems, not code problems!

Take your time, check each setting carefully, and you'll get it working! 🚀
