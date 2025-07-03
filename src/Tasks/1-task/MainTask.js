import React, { useState, useEffect } from 'react';
import UserForm from './Task1-Component/UserForm';
import UserList from './Task1-Component/UserList';

function MainTask() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem('submittedUsers');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('submittedUsers', JSON.stringify(users));
  }, [users]);

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
