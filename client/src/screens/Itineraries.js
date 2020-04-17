import React, { Component } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { connect } from "react-redux";
import { fetchItinerariesByCity } from "../store/actions/itineraryActions";
import Itinerary from "../components/Itinerary";

class Itineraries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itineraries: [],
      search: "",
    };
  }

  componentDidMount() {
    const city = this.props.match.params.city;
    this.props.fetchItinerariesByCity(city);
  }

  /*get filtered cities by city name and country name*/
  searchBar = () => {
    let search = this.props.itineraries.filter((itineraries) => {
      return itineraries.title
        .toUpperCase()
        .startsWith(this.state.search.toUpperCase());
    });
    return search;
  };

  //this works
  handleSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { itineraries } = this.props;
    return (
      <div>
        <Header />
        <SearchBar search={this.handleSearch} />
        {itineraries &&
          itineraries.map((itinerary) => {
            return <Itinerary itinerary={itinerary} key={itinerary._id} />;
          })}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("state:", state); // showing cities, why?
  return {
    itineraries: state.itineraries.itineraries,
  };
};

// //this works
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchItineraries: (city) => {
//       dispatch(fetchItineraries(city));
//     },
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItinerariesByCity: (itinerary) => {
      dispatch(fetchItinerariesByCity(itinerary));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);
