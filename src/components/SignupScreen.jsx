import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupScreenPage = () => {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Save user in localStorage
    localStorage.setItem("user", JSON.stringify(form));

    alert("Signup successful!");

    navigate("/login");
  };

  return (
    <div className="form-container">
      <h2>Create your PopX account</h2>

      <form onSubmit={handleSubmit}>
        <label>Full Name*</label>
        <input name="fullName" onChange={handleChange} required />

        <label>Phone number*</label>
        <input name="phone" onChange={handleChange} required />

        <label>Email address*</label>
        <input type="email" name="email" onChange={handleChange} required />

        <label>Password*</label>
        <input type="password" name="password" onChange={handleChange} required />

        <label>Company name</label>
        <input name="company" onChange={handleChange} />

        <div className="radio-group">
          <p>Are you an Agency?</p>

          <label>
            <input
              type="radio"
              name="isAgency"
              value="yes"
              checked={form.isAgency === "yes"}
              onChange={handleChange}
            />
            Yes
          </label>

          <label>
            <input
              type="radio"
              name="isAgency"
              value="no"
              checked={form.isAgency === "no"}
              onChange={handleChange}
            />
            No
          </label>
        </div>

        <button type="submit" className="primary-btn">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupScreenPage;