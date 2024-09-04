import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../../helpers/request";
import "./Registration.css";

const Registration = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const notify = (message) => toast(message);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await register({
        email,
        password,
      });
      if (res.status === 201) {
        notify("Registration was successful");

        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (e) {
      notify(`Error: ${e.message}`);
    } finally {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="registration-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
