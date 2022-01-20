import React from "react";

import { validPassword } from "./regex/Regex";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {},
      errors: {},
      allFieldsValid: false
    };
  }

  handleInput = (e) => {
    let login = this.state.login;
    e.preventDefault();
    login[e.target.name] = e.target.value;
    this.setState(login);
  };
  handleValidation = () => {
    let login = this.state.login;
    let errors = {};
    let inputIsvalid = true;
    //email====================================================
    if (!login["email"]) {
      inputIsvalid = false;
      errors["email"] = "Enter your email";
    }

    if (typeof login["email"] !== "undefined") {
      let lastAtPos = login["email"].lastIndexOf("@");
      let lastDotPos = login["email"].lastIndexOf(".");
      // console.log("@: ", lastAtPos); //@ can't be in first position
      // // lastAtPos < lastDotPos,because @ sign has to be ahead of .
      // console.log(". : ", lastDotPos);
      // console.log("2 @: ", login["email"].indexOf("@@"));
      // console.log("length: ", login["email"].length);
      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          login["email"].indexOf("@@") === -1 &&
          lastDotPos - lastAtPos > 2 &&
          lastDotPos > 2 &&
          login["email"].length - lastDotPos > 2
        )
      ) {
        inputIsvalid = false;
        errors["email"] = "It is not valid email";
      }
    }

    //password=======================================

    if (!login["password"]) {
      inputIsvalid = false;
      errors["password"] = "Enter your passowrd";
    }
    if (typeof login["password"] !== "undefined") {
      // let pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
      if (!validPassword.test(login["password"])) {
        console.log(login["password"]);
        inputIsvalid = false;
        errors["password"] =
          "Invalid password;need to have one numeric digit and one uppercase";
      } else if (login["password"] !== login["password2"]) {
        console.log(login["password2"]);
        inputIsvalid = false;
        errors["password2"] = "Password input doesn't match first one";
      }
    }

    console.log(" your input: ", login["password"]);

    this.setState({ errors: errors });
    return inputIsvalid;
  };

  loginSubmit = (e) => {
    e.preventDefault();
    let login = this.state.login;

    if (this.handleValidation()) {
      this.setState({ allFieldsValid: true });
      login["email"] = " ";
      login["password"] = "";
      login["password2"] = "";
    }
  };

  render() {
    const { allFieldsValid } = this.state;
    const successDisplay = allFieldsValid ? "block" : "none";
    const formDisplay = allFieldsValid ? "none" : "block";

    return (
      <div>
        <h1>Login</h1>
        <div style={{ display: successDisplay, textAlign: "center" }}>
          <h1 style={{ color: "red" }}>Success!</h1>
          <h3 style={{ color: "red" }}>
            You have successfully submitted a form.
          </h3>
        </div>
        <form
          style={{ display: formDisplay }}
          name="loginform"
          className="loginform"
          onSubmit={this.loginSubmit}
        >
          <label>Enter your email:</label>
          <input
            size="50"
            type="text"
            name="email"
            onChange={this.handleInput}
            value={this.state.login["emai"]}
            placeholder="email"
          />
          <br />
          <span style={{ color: "red", marginLeft: "13px" }}>
            {this.state.errors["email"]}
          </span>
          <br />
          <label>Enter password:</label>
          <input
            size="50"
            type="password"
            name="password"
            onChange={this.handleInput}
            value={this.state.login["password"]}
            placeholder="input your password"
          />
          <br />
          <span style={{ color: "red", marginLeft: "13px" }}>
            {this.state.errors["password"]}
          </span>
          <br />
          <label>veriify password:</label>
          <input
            size="50"
            type="password"
            name="password2"
            onChange={this.handleInput}
            value={this.state.login["password2"]}
            placeholder="Verify password"
          />
          <span style={{ color: "red", marginLeft: "13px" }}>
            {this.state.errors["password2"]}
          </span>
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
