import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../reducers/Reducers";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    dispatch(login());

    if (email === "sagar000adhikari@gmail.com" && password === "spykids2000") {
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="signin">
      <h2>Sign In</h2>
      <div className="form-container">
        <form onSubmit={handleFormSubmit} className="form-labels">
          <label>Email address</label>
          <br />
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Password</label>
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
