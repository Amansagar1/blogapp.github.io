import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import axios from 'axios';
const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    pincode: "",
    city: "",
    region: "",
    state: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try{
    const res = await axios.post("/auth/reister" , inputs) ;
  }catch (err) {
     console.log(err) 
    }
  };

  return (
    <div className="register-container">
      <form className="register-form">
        <h2>Register</h2>
        <input
          type="text"
          className="input-field"
          placeholder="Full Name"
          name="username"
          required
          onChange={handleChange}
        />
        <input
          type="tel"
          className="input-field"
          placeholder="Phone"
          name="phone"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          className="input-field"
          placeholder="Email"
          required
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          className="input-field"
          placeholder="Password"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          className="input-field"
          placeholder="Confirm Password"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          className="input-field"
          placeholder="Pincode"
          required
          name="pincode"
          onChange={handleChange}
        />
        <input
          type="text"
          className="input-field"
          placeholder="City"
          required
          name="city"
          onChange={handleChange}
        />
        <input
          type="text"
          className="input-field"
          placeholder="Region"
          required
          name="region"
          onChange={handleChange}
        />
        <input
          type="text"
          className="input-field"
          placeholder="State"
          required
          name="state"
          onChange={handleChange}
        />
        <Link to="/Login" type="submit" className="register-button" onClick={handleSubmit}>
          Create Account
        </Link>
      </form>
    </div>
  );
};

export default Register;
