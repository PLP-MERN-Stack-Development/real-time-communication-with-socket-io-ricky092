@echo off
echo ========================================
echo   Ricky Chat - Installation Script
echo ========================================
echo.

echo [1/4] Installing server dependencies...
cd server
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Server installation failed!
    pause
    exit /b 1
)
echo Server dependencies installed successfully!
echo.

echo [2/4] Installing client dependencies...
cd ..\client
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Client installation failed!
    pause
    exit /b 1
)
echo Client dependencies installed successfully!
echo.

echo [3/4] Verifying installation...
cd ..
echo All dependencies installed!
echo.

echo [4/4] Setup complete!
echo.
echo ========================================
echo   Installation Complete!
echo ========================================
echo.
echo To start the application:
echo.
echo 1. Open a terminal and run:
echo    cd server
echo    npm run dev
echo.
echo 2. Open another terminal and run:
echo    cd client
echo    npm run dev
echo.
echo 3. Open http://localhost:5173 in your browser
echo.
echo ========================================
pause
