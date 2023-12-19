import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [lastLoginTime, setLastLoginTime] = useState(null);

  const validCredentials = [
    { username: 'user1', password: 'password1', loginTime: null },
    { username: 'user2', password: 'password2', loginTime: null },
    { username: 'user3', password: 'password3', loginTime: null },
    { username: 'manojs', password: '7397274634', loginTime: null },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the entered username and password match any of the valid credentials
    const user = validCredentials.find(
      (cred) => cred.username === username && cred.password === password
    );

    if (user) {
      user.loginTime = new Date().toLocaleTimeString();
      setLastLoginTime(user.loginTime);

      setIsLoggedIn(true);
      setErrorMessage('');
    } else {
      setIsLoggedIn(false);
      setErrorMessage('Invalid username or password.');
    }
  };

  return (
    <div className={`login-container ${isLoggedIn ? 'logged-in' : ''}`}>
      <h2>{isLoggedIn ? `Welcome! Last login: ${lastLoginTime}` : 'LOGIN'}</h2>
      {!isLoggedIn ? (
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">USERNAME:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">PASSWORD:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Integrate the provided button code */}
          <center>
            <button className="cssbuttons-io-button" type="submit">
              HERE WE GO!!
              <div className="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
          </center>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          {/* Link to the Signup page */}
          <div className='end'>
             <p>
               NOT A MEMBER ? <Link className='lastlink' to="/Signup">SIGNUP</Link>
              </p>
              </div>
        </form>
      ) : null}
    </div>
  );
};

export default Login;
