import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <Link to="/dashboard">Go back to Dashboard</Link>
    </div>
  );
};

export default Profile;
