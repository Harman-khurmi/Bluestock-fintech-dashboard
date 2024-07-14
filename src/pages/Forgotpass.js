import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../pages/Forgotpass.css';
import textlogo from '../assets/textlogo.png';



const Forgotpass = () => {
  return (
    <div className="forgotpass">
      <div className="forgot-container">
        <img src={textlogo} alt="Company Logo" className="textlogo" />
        <div className="content">
          <h2>Forgot Password?</h2>
          <h3>Enter your email address to get the password reset link.</h3>
        </div>
        <div className="interact">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" value="johndoe@gmail.com" />
        </div>
        <button className="reset-btn">Password Reset</button>
        <button className="backto-login">Back to Login</button>
      </div>
    </div>
  );
};
export default Forgotpass;
