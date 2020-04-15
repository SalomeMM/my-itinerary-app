import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Itinerary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itineraries: [],
      search: "",
    };
  }
  render() {
    console.log("itinerary props", this.props);
    const { itineraryDisplay } = this.props;
    return (
      <div>
        <p>text check</p>
        {/* {itineraryDisplay.map((itineraries) => {
          return (
            <div>
               */}
        {/* <div key={city._id} className="cityDiv">
                <h1 className="cityName">{city.name}</h1>
                <p className="cityCountry">{city.country}</p>
                <div className="seeItineraryDiv">
                  <Link className="Activities" to={"/Activities/" + city.name}>
                    See Activities
                  </Link>
                </div>
                {/* <img src={city.img} alt="pic" className="cityImg" /> */}
        {/* </div> */}
        {/* </div>
          );
        })} */}
      </div>
    );
  }
}
