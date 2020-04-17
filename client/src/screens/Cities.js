import React, { Component } from "react";
import City from "../components/City";
import { connect } from "react-redux";
import { fetchCities } from "../store/actions/cityActions";
import Header from "../components/Header";
import "../App.css";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

class CitiesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      search: "",
    };
  }

  componentDidMount() {
    this.props.fetchCities(); // takes cities from db
  }

  /*get filtered cities by city name and country name*/
  searchBar = () => {
    let search = this.props.cities.filter((cities) => {
      return (
        cities.name.toUpperCase().startsWith(this.state.search.toUpperCase()) ||
        cities.country.toUpperCase().startsWith(this.state.search.toUpperCase())
      );
    });
    return search;
  };

  //this works
  handleSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { cities } = this.props;
    const filteredCities = this.searchBar();
    console.log("filtered cities:", filteredCities);
    return (
      <div>
        <Header />
        <SearchBar search={this.handleSearch} />
        {/* <div className="citySearchBar">
          <span>
            <FontAwesomeIcon icon={faSearch} className="faSearch" />
          </span>
          <span>
            <input
              id="search-bar"
              type="textarea"
              placeholder="Search city (Cities.js)"
              className="inputSearchBar"
              // onChange={(event) => this.handleSearch(event.target.value)}
              onKeyUp={(event) => this.handleSearch(event.target.value)}
            ></input>
          </span>
        </div> */}
        <div className="addCityDiv">
          <Link className="addCity" to={"/add-city/"}>
            <FontAwesomeIcon icon={faPlusCircle} className="faPlusCircle" />
            <span> Add city </span>
          </Link>
        </div>
        {cities &&
          filteredCities.map((city) => {
            return <City city={city} key={city._id} />;
          })}
        {/* <City cityDisplay={cities} /> */}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("state:", state);

  return {
    cities: state.cities.cities,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchCities: (city) => dispatch(fetchCities(city)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CitiesScreen);
