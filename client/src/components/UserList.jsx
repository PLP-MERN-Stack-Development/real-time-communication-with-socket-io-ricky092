import './UserList.css';

function UserList({ users, currentUserId, onPrivateMessage }) {
  return (
    <div className="user-list">
      <div className="user-list-header">
        <h3>Online Users ({users.length})</h3>
      </div>
      
      <div className="user-list-content">
        {users.map((user) => (
          <div
            key={user.id}
            className={`user-item ${user.id === currentUserId ? 'current-user' : ''}`}
          >
            <div className="user-info">
              <span className="user-status">●</span>
              <span className="user-name">
                {user.username}
                {user.id === currentUserId && ' (You)'}
              </span>
            </div>
            
            {user.id !== currentUserId && (
              <button
                className="btn-dm"
                onClick={() => onPrivateMessage(user)}
                title="Send private message"
              >
                💬
              </button>
            )}
          </div>
        ))}
        
        {users.length === 0 && (
          <div className="no-users">No users online</div>
        )}
      </div>
    </div>
  );
}

export default UserList;
