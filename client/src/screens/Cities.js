import React, { Component } from "react";
import City from "../components/City";
import { connect } from "react-redux";
import { fetchCities } from "../store/actions/cityActions";
import Header from "../components/Header";
// import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "../App.css";
// import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../components/SearchBar";
// import { Link } from "react-router-dom";

class CitiesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      searchInput: "",
    };
  }

  componentDidMount() {
    this.props.fetchCities(); // takes cities from db
  }

  // filter() {
  //   if (this.props.cities) {
  //     const filterCity = this.props.cities.filter((city, index) => {
  //       // console.log(" our cities  " + city.name);
  //       console.log("our search " + this.state.searchInput);
  //       let cityName = city.name.toLowerCase();
  //       return cityName.startsWith(this.state.searchInput.toLowerCase());
  //     });
  //     console.log(filterCity);
  //     return filterCity;
  //   } else return [];
  // }

  searchBar = (term) => {
    for (let i = 0; i < this.state.cities.length; i++) {
      let name = this.state.cities[i].name;
      // let description = this.state.cities[i].description;
      console.log(this.state.cities);
      if (name.includes(term)) {
        // this.setState (UPDATE STATE HERE)
        console.log(this.state.cities[i]);
        console.log(this.props);
      }
    }
  };

  render() {
    // const filterList = this.filter();
    const { cities } = this.props;
    const { cityDisplay } = this.props;
    // console.log("this.props", this.props.cities);
    // console.log("cities", cities);
    // beg pre
    // const { cities } = this.props.cities;
    // let cityFilter = this.state.input;
    // console.log(this.props.cities);
    // let filteredCities = cities.filter((city) => {
    //   let cityName = city.name.toLowerCase();
    //   return cityName.indexOf(cityFilter.toLowerCase()) !== -1;
    // });
    // console.log(filteredCities);
    // end pre

    return (
      <div>
        <Header />
        <SearchBar search={this.searchBar} />

        {/* <div className="citySearchBar">
          <span>
            <FontAwesomeIcon icon={faSearch} className="faSearch" />
          </span>
          <span>
            <input
              id="search-bar"
              // onKeyUp={event => this.props.search(event.target.value)}
              type="text"
              // type="textarea"
              placeholder="Search city"
              className="inputSearchBar"
              // value={this.state.input}
              // onChange={(event) => {
              //   this.setState({ input: event.target.value });
              // }}

              //beg alba2
              value={this.state.searchInput}
              onChange={(event) => {
                this.setState({ input: event.target.value });
              }}
              //end alba2
            ></input>
          </span>
        </div> */}

        <City cityDisplay={cities} />
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(CitiesScreen);
