import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to Your HR</h1>
      <p>
        Your HR is an HR management system that helps companies manage their
        human resources and simplify HR processes.
      </p>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Login</h5>
              <p className="card-text">
                Login to Your HR to manage your company's human resources.
              </p>
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Register</h5>
              <p className="card-text">
                Register for Your HR to start managing your company's human
                resources.
              </p>
              <Link to="/register" className="btn btn-primary">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
