import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Navigate} from "react-router-dom";

export default function SignUpPage() {
    // States for registration
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [major, setMajor] = useState('');

    // navigation
    const navigate = useNavigate();
    const navigateToLogin = () => {
      navigate('/login');
    }
   
    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
   
    // Handling the name change
    const handleFirstName = (e) => {
      setFirstName(e.target.value);
      setSubmitted(false);
    };

    const handleLastName = (e) => {
      setLastName(e.target.value);
      setSubmitted(false);
    };
   
    // Handling the email change
    const handleEmail = (e) => {
      setEmail(e.target.value);
      setSubmitted(false);
    };
   
    // Handling the password change
    const handlePassword = (e) => {
      setPassword(e.target.value);
      setSubmitted(false);
    };
   
    // Handling the major change
    const handleMajor = (e) => {
      setMajor(e.target.value);
      setSubmitted(false);
    };



    // Handling the form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (firstName === '' || lastName === ' ' || email === '' || password === '' || major === '') {
        setError(true);
      }
      try {
        let response = await fetch("/api/auth/signup", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            major: major
          }),
          
        });
  
        if (response.ok) {
          setSubmitted(true);
        } else {
          setError(true);
        }
      } catch (error) {
        console.error("Server error while creating a new user", error);
        setError(true);
      } 
      
    };
    

    const handleReset = (e) => {
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setMajor('');
      
    };
   
    // Showing success message
    const successMessage = () => {
      return (
        <div
          className="success"
          style={{
            display: submitted ? '' : 'none',
          }}>
          <p>Your account under the name of {firstName} {lastName} is successfully registered!</p>
        </div>
      );
    };
   
    // Showing error message if error is true
    const errorMessage = () => {
      return (
        <div
          className="error"
          style={{
            display: error ? '' : 'none',
          }}>
          <p>Please enter all the fields</p>
        </div>
      );
    };
    if(submitted) return <Navigate to="/" />;
   
    return (
        <div className="col-10 col-md-8 col-lg-7">
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>
          <form onSubmit={handleSubmit} onReset={handleReset}>
            <div className="form-row">
              {errorMessage}
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="First Name"
                value={firstName}
                onChange={handleFirstName}
              />
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Last Name"
                value={lastName}
                onChange={handleLastName}
              />
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
              />
              <input
                type = "password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handlePassword}
              />
              <input
                type="major"
                className="form-control"
                name="major"
                placeholder="Major"
                value={major}
                onChange={handleMajor}
              />
              

              <button type="submit" className="btn btn-primary ml-auto">
                Sign Up
              </button>

              <button type="reset" onClick={handleReset} className="btn btn-primary ml-auto">
                Reset
              </button>
            </div>
          </form>
          <button className = "btn btn-info" onClick={navigateToLogin}>Already have an account? Login here.</button>
        </div>
      );
  }