import React from "react";
// import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Arrow from ".../public/images/circled-right-2.png";
// import Carousel from "Carousel";

export default function Landing() {
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
