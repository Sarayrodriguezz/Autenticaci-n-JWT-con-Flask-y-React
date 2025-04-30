import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  
  const { actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log("signup data", email, password);
    const success = await actions.signup(email, password);
    if (success) navigate("/login"); 
  };

  return (
    <div>
      <form className="w-50 mx-auto" onSubmit={handleSignup}>
        <div className="mb-3">
          <label htmlFor="signupEmail" className="form-label">
            Email address
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="signupEmail"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="signupPassword" className="form-label">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="signupPassword"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;