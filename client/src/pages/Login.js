import React from "react";
import Login from "../components/Login";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <h2 className="mb-3">Login</h2>
          <Login />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
