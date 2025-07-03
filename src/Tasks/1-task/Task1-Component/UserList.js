import React from 'react';

function UserList({ users }) {
  return (
    <div>
      {users.length === 0 ? (
        <p style={{ color: 'gray' }}>No users submitted yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {users.map((user) => (
            <li
              key={user.id}
              style={{
                border: '1px solid #ccc',
                marginBottom: '10px',
                padding: '10px',
                borderRadius: '8px',
              }}
            >
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
