import React, { useState } from "react";
import {validateEmail} from '../utils'

const PasswordErrorMessage = () => {
  return (
    <p style={{ color: "red" }}>Password must be at least 8 characters long.</p>
  );
};

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    return (
      firstName !== "" &&
      validateEmail(email) &&
      password.length >= 8 &&
      role !== "role"
    );
  };


  const clearForm = () => {
    // Implement this function
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    setRole('')
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Account created!");
    clearForm();
  };

  const handlePasswordChange = (e) => {
    const updatedPassword = {
      value: e.target.value,
      isTouched: true,
    };
    setPassword(updatedPassword);
  };

  const isPasswordValid = password.value.length >= 8 || !password.isTouched;

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <h2>Sign Up</h2>
        <div className="Field">
          <label>
            First name <sup>*</sup>
          </label>
          <input
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="Field">
          <label>Last name</label>
          <input
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="Field">
          <label>
            Email address <sup>*</sup>
          </label>
          <input
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="Field">
          <label>
            Password <sup>*</sup>
          </label>
          <input
            type="password"
            placeholder="Password"
            value={password.value}
            onChange={handlePasswordChange}
          />
          {!isPasswordValid && (
            <PasswordErrorMessage />
          )}
        </div>
        <div className="Field">
          <label>
            Role <sup>*</sup>
          </label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="role">Role</option>
            <option value="individual">Individual</option>
            <option value="business">Business</option>
          </select>
        </div>
        <button type="submit" disabled={!getIsFormValid()}>
          Create account
        </button>
      </fieldset>
    </form>
  );
};

export default Registration;
