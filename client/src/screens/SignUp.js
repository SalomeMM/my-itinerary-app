import React, { Component } from "react";
import Header from "../components/Header";
import { connect } from "react-redux";
import { register } from "../store/actions/userActions";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      users: {
        username: "",
        email: "",
        password: "",
        picture: "",
      },
    };
  }

  handleChange = (e) => {
    console.log(e);
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    if (
      this.state.username === "" ||
      this.state.email === "" ||
      this.state.password === ""
    ) {
      alert("There is something missing, please check again");
    } else {
      const newUser = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        picture: this.state.picture,
      };

      this.props.register(newUser); //redux action
    }
  };

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
                value={this.state.username}
                onChange={this.handleChange}
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
                name="email"
                value={this.state.email}
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
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="formChildDiv">
              <label className="formLabel" htmlFor="picture">
                Profile picture (URL)
              </label>
              <span> </span>
              <input
                type="text"
                id="picture"
                className="formInput"
                placeholder="e.g. https://bit.ly/2XxYJG0"
                name="picture"
                value={this.state.picture}
                onChange={this.handleChange}
              />
            </div>
            <div className="formChildDiv">
              <button className="blueButton" onClick={this.handleSubmit}>
                Create Account
              </button>
            </div>
            <div>
              <button className="redButton">Sign up with Google</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

// // toggle to show password: https://www.w3schools.com/howto/howto_js_toggle_password.asp

// export default SignUp;

// // const mapDispatchToProps = (dispatch) => ({
// //   signUpUser: (user) => dispatch(signUpUser(user)), // Pass user info to the store
// // });
// // export default connect(null, mapDispatchToProps)(SignUp);

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users,
  };
};
const mapDispatchToProps = (dispatch) => ({
  register: (newUser) => dispatch(register(newUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
