import React from "react";
// import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Arrow from ".../public/images/circled-right-2.png";
// import Carousel from "Carousel";

export default function Landing() {
  return (
    <div className="landing">
      {/* <nav style={navStyle}>
        <Link to="/" style={navLink}>
          Home
        </Link>
        <Link to="./components/cities" style={navLink}>
          Cities
        </Link>
      </nav> */}

      <div className="container-fluid App">
        <header className="col-12 ">
          {/* <img src={PhotoWithCamera} className="App-logo " alt="logo" /> */}
        </header>

        <div>
          <div className="landingContent">
            <div className="">
              <h1 className="landingTitle">
                <span className="landingTitle1">App</span>
                <span className="landingTitle2">tinerary</span>
              </h1>
            </div>
          </div>
          <Link to="/Cities">
            {/* <img src={Arrow} alt="looking" className="circle" /> */}
            <img
              src="././images/circled-right-2.png"
              alt="Arrow"
              id="arrow"
            ></img>
          </Link>
          <p className="mt-4 textSize col-sm-12 discoverText">
            Discover the best itineraries for your favorite activities in your
            favorite city!
          </p>

          <div className="container text-center homeButtons">
            <Link to="/SignUp" className="signupButton">
              Sign Up
            </Link>
            <Link to="/logIn" className="loginButton">
              Log In
            </Link>
          </div>

          {/* {cities && <Carousel cities={cities} />} */}
        </div>
        {/* <AddCity cities={cities} /> */}
      </div>
    </div>
  );
}
