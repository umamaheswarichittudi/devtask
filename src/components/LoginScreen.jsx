import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    // ❌ If no user found
    if (!storedUser) {
      alert("No user found. Please signup first.");
      return;
    }

    // ❌ Wrong credentials
    if (storedUser.email !== email || storedUser.password !== password) {
      alert("Invalid email or password");
      return;
    }

    // ✅ Save logged-in user
    localStorage.setItem("loggedUser", JSON.stringify(storedUser));

    alert("Login successful!");

    navigate("/account-settings");
  };

  return (
    <div className="form-container">
      <h2>Login to PopX</h2>

      <form onSubmit={handleSubmit}>
        <label>Email address*</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password*</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="primary-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;