import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './SignUpForm.css'; // Your CSS file for styling

const SignUpForm = () => {
  return (
    <div className="signup-container">
      <h2>Create account</h2>
      <button className="google-btn">
        <i className="fab fa-google"></i> Sign Up with Google
      </button>
      <button className="facebook-btn">
        <i className="fab fa-facebook-f"></i> Sign Up with Facebook
      </button>
      <p>or</p>
      <input type="text" placeholder="Enter your name" />
      <input type="text" placeholder="Enter your age" />
      <select>
        <option>Select Your Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
      <input type="email" placeholder="Email" />
      <input type="text" placeholder="Choose a username" />
      <input type="password" placeholder="Enter your password" />
      <button className="register-btn">Register</button>
    </div>
  );
};

export default SignUpForm;

