import React from 'react';
import './UserCard.css';

const UserCard = ({ name, username, email, image }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-content">
        <h3>{name}</h3>
        <p>@{username}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default UserCard;
