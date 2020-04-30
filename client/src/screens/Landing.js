import React, { Component } from "react";
// import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { connect } from "react-redux";
// import { render } from "react-dom";
import { loginGoogle } from "../store/actions/userActions";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Arrow from ".../public/images/circled-right-2.png";
// import Carousel from "Carousel";

class Landing extends Component {
  componentDidMount() {
    console.log(this.props.location);
    const token = this.props.location.search.split("=")[1];
    if (token) {
      this.props.loginGoogle(token);
    }
  }
  render() {
    return (
      <div className="landing">
        <Header></Header>
        <div className="container-fluid App">
          <header className="col-12 "></header>
          <div>
            <div className="landingContent">
              <div className="">
                <h1 className="landingTitle">
                  <span className="landingTitle1">App</span>
                  <span className="landingTitle2">tinerary</span>
                </h1>
              </div>
            </div>
            <Link to="./cities">
              <img
                src="././images/circled-right-2.png"
                alt="Arrow"
                id="arrow"
              ></img>
            </Link>
            <p className="mt-4 textSize col-sm-12 discoverText">
              Discover the best itineraries for your favorite activities in your
              favorite cities!
            </p>
            <div className="container text-center homeButtons">
              <Link to="/SignUp" className="blueButton">
                Sign Up
              </Link>
              <Link to="/logIn" className="blueButton">
                Log In
              </Link>
            </div>
          </div>
        </div>
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
  loginGoogle: (token) => dispatch(loginGoogle(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
