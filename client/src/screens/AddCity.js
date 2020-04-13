import React, { Component } from "react";
import Header from "../components/Header";

class AddCity extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      country: null,
      picture: null,
    };
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Add city</h1>
        <div className="formParentDiv">
          <div className="formChildDiv">
            <label className="mx-auto" htmlFor="city">
              {" "}
              City
            </label>
            <span> </span>
            <input
              className="formInput"
              type="text"
              id="city"
              placeholder="e.g. Berlin"
            />
          </div>
          <div className="formChildDiv">
            <label className="formLabel" htmlFor="country">
              {" "}
              Country
            </label>
            <span> </span>
            <input
              className="formInput"
              type="text"
              id="country"
              placeholder="e.g. Germany"
            />
          </div>
          <div className="formChildDiv">
            <label className="formLabel" htmlFor="picture">
              Picture (URL)
            </label>
            <span> </span>
            <input
              className="formInput"
              type="url"
              id="picture"
              placeholder="e.g. https://bit.ly/2XxYJG0"
            />
          </div>
          <button className="blueButton" type="submit">
            Add City
          </button>
        </div>
      </div>
    );
  }
}
export default AddCity;
