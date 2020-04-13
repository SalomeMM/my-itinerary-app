import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Itinerary extends Component {
  render() {
    console.log("city props", this.props);
    const { cityDisplay } = this.props;
    return (
      <div>
        {cityDisplay.map((city) => {
          // we are just maping one elemet (city), if we mapped more than one should be {this.state.cities.map((cities )=>
          // map to get the information we need of all cities, but one by one. That's why we put "city" in the parentesis
          return (
            <div key={city._id} className="cityDiv">
              <h1 className="cityName">{city.name}</h1>
              <p className="cityCountry">{city.country}</p>
              <div className="seeItineraryDiv">
                <Link className="Activities" to={"/Activities/" + city.name}>
                  See itineraries
                </Link>
              </div>
              <img src={city.img} alt="pic" className="cityImg" />
            </div>
          );
        })}
      </div>
    );
  }
}
