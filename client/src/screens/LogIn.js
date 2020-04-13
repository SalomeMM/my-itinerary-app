import React, { Component } from "react";
import Header from "../components/Header";

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Log In</h1>
        <div className="formParentDiv">
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
              name="email"
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
          <div className="formInput">
            <button className="blueButton">Log In</button>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;
