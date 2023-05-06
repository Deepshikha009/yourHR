import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/users/profile");
        setUserData(response.data.user);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h1>Welcome to Your HR Dashboard</h1>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>Phone: {userData.phone}</p>
    </div>
  );
};

export default Dashboard;
