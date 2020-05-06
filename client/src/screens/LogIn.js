import React, { Component } from "react";
import Header from "../components/Header";
import { connect } from "react-redux";
import { login } from "../store/actions/userActions";

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.email === "" || this.state.password === "") {
      return alert(
        "Something is missing. Please provide both your e-mail address and password"
      );
    } else {
      const userData = {
        email: this.state.email,
        password: this.state.password,
      };
      console.log(userData);
      this.props.login(userData);
    }
  };

  render() {
    return (
      <div>
        <Header />
        {this.props.user.isLoggedIn ? (
          <div>
            <h1>Logged in</h1>
            <h2>{this.props.user.user.username}</h2>
          </div>
        ) : (
          <React.Fragment>
            <form
              className="form-horizontal"
              // onSubmit={this.handleSubmit}
            >
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
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
                  />
                </div>
                <div className="formInput">
                  <button onClick={this.handleSubmit} className="blueButton">
                    Log In
                  </button>
                </div>
              </div>
            </form>
            <a
              href="http://localhost:5000/users/auth/google"
              className="redButton"
            >
              Log in with Google
            </a>
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.users,
  };
};
const mapDispatchToProps = (dispatch) => ({
  login: (userData) => dispatch(login(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
