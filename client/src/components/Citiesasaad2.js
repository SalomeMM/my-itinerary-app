import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCities } from "../store/actions/cityActions";
import Header from "./Header";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "../App.css";
// import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class Cities extends Component {
  constructor() {
    super();
    this.state = {
      cities: [],
      search: "",
    };
  }

  componentDidMount() {
    this.props.fetchCities(); // takes the cities from the db
  }
  cutArray() {
    return this.props.cities.map((city, index) => {
      return index < 15;
    });
  }
  // handleChange = (e) => {
  //   console.log("event from handle change", e.target.value);
  //   this.setState({
  //     search: e.target.value,
  //   });
  // };
  filter() {
    if (this.props.cities) {
      const filterCity = this.props.cities.filter((city, index) => {
        // console.log(" our cities  " + city.name);
        console.log("our search " + this.state.search);
        let cityName = city.name.toLowerCase();
        return cityName.startsWith(this.state.search.toLowerCase());
      });
      console.log(filterCity);
      return filterCity;
    } else return [];
  }

  render() {
    const filterList = this.filter();
    const { cities } = this.props;
    console.log("this.props", this.props.cities);
    console.log("cities from cities", cities);
    return (
      <div>
        <Header />
        <div className="citySearchBar">
          <span>
            <FontAwesomeIcon icon={faSearch} className="faSearch" />
          </span>
          <span>
            <input
              id="search-bar"
              // onKeyUp={event => this.props.search(event.target.value)}
              type="textarea"
              placeholder="Search city"
              className="inputSearchBar"
            ></input>
          </span>
        </div>

        {/* <FormGroup> */}
        {/* <Label for="exampleSearch"></Label> */}
        {/* <FontAwesomeIcon icon={faSearch} className="faSearch" /> */}
        {/* <Input
            type="search"
            name="search"
            id="exampleSearch"
            placeholder="Search city"
            className="citySearchBar"
          /> */}
        {/* </FormGroup> */}
        {cities.map((city) => {
          // map one element (city), if we mapped more than one should be {this.state.cities.map((cities )=>
          // map to get the information we need of all cities, but one by one. That's why we put "city" in the brackets
          return (
            <div key={city._id} className="cityDiv">
              <h1 className="cityName">{city.name}</h1>
              <p className="cityCountry">{city.country}</p>
              {/* <Link className="seeItineraries" to={"/itineraries/" + city.name}>
                See itineraries
              </Link> */}
              <img src={city.img} alt="pic" className="cityImg" />
            </div>
          );
        })}
      </div>

      // <div>
      //   <label htmlFor="filter">Filter by City: </label>
      //   <input
      //     className="navbar-margin"
      //     type="search"
      //     id="filter"
      //     value={this.state.search}
      //     onChange={this.handleChange}
      //   />

      //   {filterList &&
      //     filterList.map((city, index) => (
      //       <div key={index} city={city}>
      //         {/* <div> */}
      //         <img className="card col-md-4" src={city.picture} />
      //         {/* </div> */}
      //       </div>
      //     ))}
      // </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  // console.log("mapToState", state);

  return {
    cities: state.cities.cities,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchCities: (city) => dispatch(fetchCities(city)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cities);

// export default function Cities() {
// class Cities extends Component {
// constructor() {
//   super();
//   this.state = {
//     books: []
//   };
// }

// componentDidMount() {
//   var requestOptions = {
//     method: "GET",
//     // redirect: 'follow'
//   };

//   fetch("http://localhost:5000/cities/all", requestOptions)
//     .then((response) => response.text())
//     .then((result) => console.log(result))
//     .catch((error) => console.log("error", error));

//   return (
//     <div>
//       <h1>Cities</h1>
//     </div>
//   );
// }

// export default Cities;

// export default function Cities() {

//   componentDidMount() {
//     var requestOptions = {
//       method: 'GET',
//       // redirect: 'follow'
//     };

//     fetch("http://localhost:5000/cities/all", requestOptions)
//       .then(response => response.text())
//       .then(result => console.log(result))
//       .catch(error => console.log('error', error));

//   return (
//     <div>
//       <h1>Cities</h1>
//     </div>
//   );
// }
//end
