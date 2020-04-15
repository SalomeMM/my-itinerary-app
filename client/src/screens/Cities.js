import React, { Component } from "react";
import City from "../components/City";
import { connect } from "react-redux";
import { fetchCities } from "../store/actions/cityActions";
import Header from "../components/Header";
// import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "../App.css";
// import SearchBar from "./SearchBar";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

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
    // const { cityDisplay } = this.props;
    // console.log("this.props", this.props.cities);
    // console.log("cities", cities);

    return (
      <div>
        <Header />
        <SearchBar search={this.searchBar} />
        <div className="addCityDiv">
          <Link className="addCity" to={"/add-city/"}>
            <FontAwesomeIcon icon={faPlusCircle} className="faPlusCircle" />
            <span> Add city </span>
          </Link>
        </div>
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
