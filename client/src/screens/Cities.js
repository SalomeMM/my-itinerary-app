import React, { Component } from "react";
import { Form, Row } from "react-bootstrap";
import Cities from "../components/Cities";
import City from "../components/City";
import { connect } from "react-redux";
import { fetchCities } from "../Store/Actions/CityActions";
import Header from "./Header";

class CitiesScreen extends Component {
  state = {
    cities: [], // creamos un empty array, cada vez que el state varia, se render la funcióndentro de render con la información modificada
    fileterdCities: [],
    input: "",
  };

  fetchCities() {
    // fetching data
    fetch("http://localhost:5000/cities/all") // fetch data of list of cities
      .then((res) => res.json())
      .then((data) => {
        this.setState({ cities: data }); // set state con la información de cities
      })
      .catch(console.log);
  }

  componentDidMount() {
    //this.fetchCities(); // Cuando la web está "montada", es cuando generamos la función fetchcities, con la información de cities (lista), por lo tanto el state varia y se render la función render de nuevo pero con la información modificada
    this.props.fetchCities();
    //console.log(this.props);
  }

  render() {
    const { cities } = this.props.cities;
    let cityFilter = this.state.input;
    console.log(this.props.cities);
    let filteredCities = cities.filter((city) => {
      let cityName = city.name.toLowerCase();
      return cityName.indexOf(cityFilter.toLowerCase()) !== -1;
    });
    console.log(filteredCities);
    return (
      <div className="citiesDisplay">
        <Header></Header>
        <Form className="searchBar">
          <Form.Control
            type="text"
            placeholder="Search City"
            className="mr-sm-2"
            value={this.state.input}
            onChange={(event) => {
              this.setState({ input: event.target.value });
            }}
          />
        </Form>
        <Row>
          {this.state.input === "" ? ( // if the input is empty show all the cities
            // we are just maping one elemet (city), if we mapped more than one should be {this.state.cities.map((cities )=>
            // map to get the information we need of all cities, but one by one. That's why we put "city" in the parentesis
            <Cities citiesData={cities} />
          ) : (
            <Cities citiesData={filteredCities} />
          )}
        </Row>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    cities: state.cities,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchCities: () => dispatch(fetchCities()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CitiesScreen);
