import React, { useState } from 'react';
import "./LoginModel.css"
import { RxCross2 } from 'react-icons/rx';
const LoginModel = ({isOpen, setIsOpen}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState(true);
  return isOpen ? (
    <div className="overlay">
      <div className="loginModel">
        <div className="left">
          <div className="left_container">
            <p className="login-title">Login</p>
            <p className="login-desc">
              Get access to your Orders, Wishlist and Recommentations
            </p>
          </div>
        </div>
        <div className="right">
          <input
            type="email"
            className="login-input"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="login-input"
            placeholder="Enter Password"
            name="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="termsandcon">
            By contiuing,you agree to Flipkart's
            <span style={{ color: 'blue' }}>Terms of Use</span> and
            <span style={{ color: 'blue' }}>Privacy Policy</span>
          </p>
          {loginType ? (
            <button className="login-button">Log In</button>
          ) : (
            <button className="login-button">Sign Up</button>
          )}
          {loginType ? (
            <p className="login-signup" onClick={() => setLoginType(false)}>
              New to Flipkart ? Create an account
            </p>
          ) : (
            <p className="login-signup" onClick={() => setLoginType(true)}>
              Already an user? Login to an account
            </p>
          )}
        </div>
        <div className="close" onClick={() => setIsOpen(false)}>
          <RxCross2 />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default LoginModel;
