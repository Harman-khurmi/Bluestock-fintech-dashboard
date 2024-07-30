import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../pages/SignUp.css';
import textlogo from '../assets/textlogo.png';
import google from '../assets/Google.png';
import captcha from '../assets/google_recaptcha-official 2.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="SignUp-container">
      <div className="SignUp-form">
        <img src={textlogo} alt="Company Logo" className="textlogo-signup" />
        <div className="form-group">
          <label htmlFor="Name">Name</label>
          <input type="text" id="name" name="name" placeholder="Harman Khurmi" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="johndoe@gmail.com" />
        </div>
        <div className="form-group">
          <div className="passforgot">
            <label htmlFor="password">Password</label>
            <Link to="/Forgotpass" className="forgot-password">
              Forgot password?
            </Link>
          </div>

          <input
            type={passwordVisible ? "text" : "password"}
            id="password"
            name="password"
            placeholder="harmankhurmi365" className={`form-control ${passwordVisible ? 'visible' : ''}`}
          />
          <span
            className={`password-icon ${passwordVisible ? 'visible-icon' : ''}`}
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </span>

        </div>
        <div className="form-group keepin">
          <label htmlFor="keep-signed-in">By continuing, you agree to our <a href='/terms&condition'>terms of service</a></label>
        </div>
        <div className="form-group robot">
          <input type="checkbox" id="robot-check" name="robot-check" />
          <label htmlFor="robot-check">I'm not a robot</label>
          <img src={captcha} alt="" className="captcha" />
        </div>
        <button className="login-btn"><Link to="/Dashboard" className='Login-link'>Sign up</Link></button>

        <div className="or-cover">
          <hr className='left-line' />
          <button className='or-btn'>or sign in with</button>
          <hr className='right-line' />
        </div>

        <button className="social-login-btn"><img src={google} alt="Company Logo" className="googlelogo" />Continue with Google</button>
        <Link to="/SignIn" className="already-account">
          <label htmlFor="alredy">Already have an account? </label>
          <p>Sign in here</p>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
