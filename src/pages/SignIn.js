// src/pages/SignIn.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../pages/SignIn.css';
import textlogo from '../assets/textlogo.png';
import google from '../assets/Google.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="signin-container">
      <img src={textlogo} alt="Company Logo" className="textlogo" />
      <div className="signin-form">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" value="johndoe@gmail.com" />
        </div>
        <div className="form-group">
          <div className="passforgot">
            <label htmlFor="password">Password</label>
            <Link to="/forgot-password" className="forgot-password">
              Forgot password?
            </Link>
          </div>

          <input
            type={passwordVisible ? "text" : "password"}
            id="password"
            name="password"
            value="harmankhurmi365"
          />
          <span
            className="password-toggle-icon"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </span>

        </div>
        <div className="form-group robot">
          <input type="checkbox" id="robot-check" name="robot-check" />
          <label htmlFor="robot-check">I'm not a robot</label>
        </div>
        <div className="form-group keepin">
          <input type="checkbox" id="keep-signed-in" name="keep-signed-in" />
          <label htmlFor="keep-signed-in">Keep me signed in</label>
        </div>
        <button className="login-btn">Login</button>

        <div className="or-cover">
          <hr className='left-line' />
          <button className='or-btn'>or sign in with</button>
          <hr className='right-line' />
        </div>

        <button className="social-login-btn"><img src={google} alt="Company Logo" className="googlelogo" />Continue with Google</button>
        <Link to="/sign-up" className="create-account">
          Create an account
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
