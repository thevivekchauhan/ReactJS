import React, { useState } from 'react';

function UserForm({ onUserAdd }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Please enter both name and email.");
      return;
    }

    const userData = {
      name: name,
      email: email,
    };

    try {
      const response = await fetch('https://6866397e89803950dbb1c032.mockapi.io/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Failed to add user to API');
      }

      const result = await response.json();
      onUserAdd(result);
      setName('');
      setEmail('');
    } catch (error) {
      alert('Error posting user: ' + error.message);
      console.error('Error posting user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <div style={{ marginBottom: '10px' }}>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: '5px', width: '200px' }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '5px', width: '200px' }}
        />
      </div>

      <button type="submit" style={{ padding: '5px 10px', cursor: 'pointer' }}>
        Submit
      </button>
    </form>
  );
}

export default UserForm;
