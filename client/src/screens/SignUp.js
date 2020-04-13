import React, { Component } from "react";
import Header from "../components/Header";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      picture: "",
      username: "",
      email: "",
      password: "",
      passwordRepeat: "",
    };
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Sign Up</h1>
        <div className="FormDiv">
          <form className="form">
            <div className="formChildDiv">
              <label className="formLabel" htmlFor="name">
                Username
              </label>
              <span> </span>
              <input
                type="text"
                id="username"
                className="formInput"
                placeholder="e.g. John Doe"
                name="username"
              />
            </div>
            <div className="formChildDiv">
              <label className="formLabel" htmlFor="email">
                E-mail address
              </label>
              <span> </span>
              <input
                type="email"
                id="email"
                className="formInput"
                placeholder="e.g. doe@example.com"
                name="emailAddress"
              />
            </div>
            <div className="formChildDiv">
              <label className="formLabel" htmlFor="password">
                Password
              </label>
              <span> </span>
              <input
                type="password"
                id="password"
                className="formInput"
                placeholder="********"
                name="password"
              />
            </div>
            <div className="formChildDiv">
              <label className="formLabel" htmlFor="picture">
                Profile picture (URL)
              </label>
              <span> </span>
              <input
                type="text"
                id="profilePicture"
                className="formInput"
                placeholder="e.g. https://bit.ly/2XxYJG0"
                name="profilePicture"
              />
            </div>
            <div className="formChildDiv">
              <button className="blueButton">Create Account</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

// toggle to show password: https://www.w3schools.com/howto/howto_js_toggle_password.asp

export default SignUp;
