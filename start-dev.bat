@echo off
echo ========================================
echo   Starting Ricky Chat Application
echo ========================================
echo.
echo Starting server and client...
echo.
echo Server will run on: http://localhost:5000
echo Client will run on: http://localhost:5173
echo.
echo Press Ctrl+C in each window to stop
echo ========================================
echo.

start "Ricky Server" cmd /k "cd server && npm run dev"
timeout /t 3 /nobreak >nul
start "Ricky Client" cmd /k "cd client && npm run dev"

echo.
echo Both server and client are starting...
echo Check the new terminal windows for status
echo.
pause
