import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import axios from "axios";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoggedIn = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await axios.get("/api/auth/user", {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (response.data.user) {
            setLoggedIn(true);
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    checkLoggedIn();
  }, []);

  return (
    
    <Router>
      <Switch>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
  
        <Route exact path="/" component={Home} ></Route>
        <Route path="/login" render={(props) => <Login {...props} setLoggedIn={setLoggedIn} />} ></Route>
        <Route path="/signup" component={Signup} ></Route>
        <Route path="/profile" component={Profile} ></Route>
        </Switch>
    </Router>
  
  );
}

export default App;
