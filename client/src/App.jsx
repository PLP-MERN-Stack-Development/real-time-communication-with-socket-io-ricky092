import { useState, useEffect } from 'react';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom';
import { socket } from './socket/socket';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    const savedUsername = localStorage.getItem('username');
    
    if (savedToken && savedUsername) {
      setToken(savedToken);
      setUsername(savedUsername);
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (user, authToken) => {
    setUsername(user);
    setToken(authToken);
    setIsAuthenticated(true);
    localStorage.setItem('token', authToken);
    localStorage.setItem('username', user);
  };

  const handleLogout = () => {
    socket.disconnect();
    setIsAuthenticated(false);
    setUsername('');
    setToken('');
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  };

  return (
    <div className="app">
      {!isAuthenticated ? (
        <Login onLogin={handleLogin} />
      ) : (
        <ChatRoom username={username} token={token} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
