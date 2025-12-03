import { useState } from 'react';
import './RoomList.css';

function RoomList({ rooms, currentRoom, onJoinRoom, onCreateRoom }) {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newRoomName, setNewRoomName] = useState('');

  const handleCreateRoom = (e) => {
    e.preventDefault();
    if (newRoomName.trim()) {
      onCreateRoom(newRoomName);
      setNewRoomName('');
      setShowCreateForm(false);
    }
  };

  return (
    <div className="room-list">
      <div className="room-list-header">
        <h3>Rooms</h3>
        <button
          className="btn-add-room"
          onClick={() => setShowCreateForm(!showCreateForm)}
          title="Create room"
        >
          +
        </button>
      </div>

      {showCreateForm && (
        <form className="create-room-form" onSubmit={handleCreateRoom}>
          <input
            type="text"
            value={newRoomName}
            onChange={(e) => setNewRoomName(e.target.value)}
            placeholder="Room name..."
            className="room-input"
            autoFocus
          />
          <div className="form-actions">
            <button type="submit" className="btn-create">
              Create
            </button>
            <button
              type="button"
              className="btn-cancel"
              onClick={() => {
                setShowCreateForm(false);
                setNewRoomName('');
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="room-list-content">
        {rooms.map((room) => (
          <div
            key={room.id}
            className={`room-item ${currentRoom === room.id ? 'active' : ''}`}
            onClick={() => onJoinRoom(room.id)}
          >
            <span className="room-icon">#</span>
            <span className="room-name">{room.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomList;
