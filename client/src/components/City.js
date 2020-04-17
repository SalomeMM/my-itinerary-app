import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class City extends Component {
  //   state = {
  //     cities: [], // create an empty array that changes everytime the state variates, it will render with the modify information
  //     filteredCities: [],
  //     input: "",
  //   };

  render() {
    // console.log("city props", this.props);
    const { city } = this.props;
    console.log("City.js props", this.props);
    return (
      <div key={city._id} className="cityDiv">
        <h1 className="cityName">{city.name}</h1>
        <p className="cityCountry">{city.country}</p>
        <div className="seeItineraryDiv">
          {/* <Link
                  className="seeItineraries"
                  to={"/Itineraries/" + city.name}
                >
                  See itineraries
                </Link> */}
          <Link className="seeItineraries" to={`/itineraries/${city.name}`}>
            See itineraries
          </Link>
        </div>
        <img src={city.img} alt="pic" className="cityImg" />
      </div>
    );
  }
}
