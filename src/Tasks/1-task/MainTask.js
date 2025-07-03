import React, { useState, useEffect } from 'react';
import UserForm from './Task1-Component/UserForm';
import UserList from './Task1-Component/UserList';

function MainTask() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://6866397e89803950dbb1c032.mockapi.io/api/v1/users');
        if (!response.ok) throw new Error('Failed to fetch users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>User Form</h2>
      <UserForm onUserAdd={addUser} />
      <hr />
      <h3>Submitted Users:</h3>
      <UserList users={users} />
    </div>
  );
}

export default MainTask;
