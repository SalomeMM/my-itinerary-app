import React, { Component } from "react";
import Header from "../components/Header";
import { connect } from "react-redux";
import { fetchItineraries } from "../store/actions/itineraryActions";
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
    //in the props we have access to both redux store and redux actions (only the ones remaped in mapStateToProps and mapDispatchToProps)
    console.log("itinerary props", this.props);
    const city = this.props.match.params.city;
    this.props.fetchItineraries(city);
  }
  render() {
    const { itineraries } = this.props;
    return (
      <div>
        <Header />
        {/* <div className="itinerary-container">
          <div className="row d-flex">
            <div className="p-2 col-12">
              {this.props.myItineraries.map((itinerary) => {
                return (
                  <div className="itinerary-img">
                    <img src={itinerary.img} alt=" City itinerary image" />

                    <div className="itinerary-details">
                      <p>{itinerary.title}</p>
                      <p>CITY:{itinerary.city}</p>
                      <p>WHAT YOU DO:{itinerary.summary}</p>
                      <p>DURATION:{itinerary.duration}</p>
                      <p>PRICE:{itinerary.price}</p>
                      <p>RATING:{itinerary.rating}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div> */}
        <Itinerary itineraryDisplay={itineraries} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("state:", state);
  // return {
  //   itineraries: state.itineraries.itineraries,
  // };
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
    fetchItineraries: (itinerary) => {
      dispatch(fetchItineraries(itinerary));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);
