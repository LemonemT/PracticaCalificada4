import React, { useEffect, useState } from 'react';
import UserCard from './components/UserCard';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="app">
      <div className="card-container">
        {users.map(user => (
          <UserCard
            key={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            image={`https://picsum.photos/300/300?random=${user.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
