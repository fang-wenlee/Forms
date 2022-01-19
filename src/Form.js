import React, { useState } from "react";
import "./Form.css";
const Form = () => {
  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
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

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setError(true);
      setErrorMsg("please Enter all the fields");
    } else if (email.indexOf("@") === -1) {
      setError(true);
      setErrorMsg("Error input, email need to include @");
    } else if (email.indexOf(".") === -1) {
      setError(true);
      setErrorMsg("Error input, email need to include .");
    } else {
      setError(false);
      setSubmitted(true);
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div className="success" style={{ display: submitted ? "" : "none" }}>
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="error" style={{ display: error ? "" : "none" }}>
        <h1>{errorMsg}</h1>
      </div>
    );
  };

  return (
    <>
      <div>
        <h1>User Registration</h1>
      </div>

      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form style={{ display: submitted ? "none" : "" }}>
        <input
          onChange={handleName}
          className="input"
          value={name}
          type="text"
          placeholder="Name"
          required
        />
        <br />
        <input
          onChange={handleEmail}
          className="input"
          placeholder="email"
          value={email}
          type="email"
          required
        />
        <br />
        <input
          onChange={handlePassword}
          className="input"
          placeholder="Password"
          value={password}
          type="password"
          required
        />
        <br />
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
export default Form;
