import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  // State to store form input values
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    age: '',
    gender: '',
    password: '',
    email: '',
  });

  // State to track form submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  // State to store welcome message
  const [welcomeMessage, setWelcomeMessage] = useState('');

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation (add your validation logic here)
    const isValid = true; // Replace with actual validation logic

    if (isValid) {
      // If the form is valid, set the welcome message and mark the form as submitted
      setWelcomeMessage(`WELCOME, ${formData.firstname}!`);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="signup-container">
      <h2>SIGN UP</h2>
      {isSubmitted ? (
        // Display welcome message if the form is submitted
        <div className="WelcomeMessage">
          <p>{welcomeMessage}</p>
        </div>
      ) : (
        // Display signup form if the form is not submitted
        <form onSubmit={handleSubmit}>
          {/* First Name Input */}
          <div className="form-group">
            <label htmlFor="firstname">FIRST NAME:</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Enter your first name"
              value={formData.firstname}
              onChange={handleInputChange}
            />
          </div>

          {/* Last Name Input */}
          <div className="form-group">
            <label htmlFor="lastname">LAST NAME:</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Enter your last name"
              value={formData.lastname}
              onChange={handleInputChange}
            />
          </div>

          {/* Username Input */}
          <div className="form-group">
            <label htmlFor="username">USERNAME:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Choose a username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>

          {/* Age Input */}
          <div className="form-group">
            <label htmlFor="age">AGE:</label>
            <input
              type="text"
              id="age"
              name="age"
              placeholder="Enter your age"
              value={formData.age}
              onChange={handleInputChange}
            />
          </div>

          {/* Gender Radio Buttons */}
          <div className="form-group">
            <label>GENDER:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleInputChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleInputChange}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={formData.gender === 'other'}
                  onChange={handleInputChange}
                />
                Other
              </label>
            </div>
          </div>

          {/* Password Input */}
          <div className="form-group">
            <label htmlFor="password">PASSWORD:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Choose a password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>

          {/* ... (other form fields) */}

          {/* Sign Up Button */}
          <button className="signup-button" type="submit">
            SIGN UP
          </button>
        </form>
      )}
    </div>
  );
};

export default Signup;
