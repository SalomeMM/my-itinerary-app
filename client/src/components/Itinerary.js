import React, { Component } from "react";

export default class Itinerary extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     itineraries: [],
  //     search: "",
  //   };
  // }

  //   render() {
  //     // console.log("city props", this.props);
  //     const { itinerary } = this.props;
  //     console.log("itinerary.js props", this.props);
  //     return (
  //       <div>
  //         {itinerary.map((itinerary) => {
  //           return (
  //             <div key={itinerary._id} className="cityDiv">
  //               <h1 className="cityName">{itinerary.title}</h1>
  //               <p className="cityCountry">{itinerary.city}</p>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     );
  //   }
  // }

  render() {
    // console.log("city props", this.props);
    const { itinerary } = this.props;
    console.log("itinerary.js props", this.props);

    return (
      <div key={itinerary._id} className="cityDiv">
        <h1 className="cityName">{itinerary.title}</h1>
        <p className="cityCountry">{itinerary.city}</p>
      </div>
    );
  }
}

//   render() {
//     const { itineraryDisplay } = this.props;
//     console.log("itinerary props", this.props);
//     return (
//       <div>
//         {itineraryDisplay.map((itinerary) => {
//           // we are just maping one elemet (city), if we mapped more than one should be {this.state.cities.map((cities )=>
//           // map to get the information we need of all cities, but one by one. That's why we put "city" in the parentesis
//           return (
//             <div key={itinerary._id} className="cityDiv">
//               {/* <h1 className="cityName">{itinerary.title}</h1>
//               <p className="cityCountry">{itinerary.city}</p> */}
//               <div className="seeItineraryDiv">
//                 {/* <Link
//                   className="seeItineraries"
//                   to={"/Itineraries/" + city.name}
//                 >
//                   See itineraries
//                 </Link> */}
//                 {/* <Link
//                   className="seeItineraries"
//                   to={`/itineraries/${city.name}`}
//                 >
//                   See itineraries
//                 </Link> */}
//               </div>
//               {/* <img src={itinerary.img} alt="pic" className="cityImg" /> */}
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

//       <div>
//         <p>text check</p>
//         {itineraryDisplay.map((itineraries) => {
//           return (
//             <div>

//         <div key={city._id} className="cityDiv">
//                 <h1 className="cityName">{city.name}</h1>
//                 <p className="cityCountry">{city.country}</p>
//                 <div className="seeItineraryDiv">
//                   <Link className="Activities" to={"/Activities/" + city.name}>
//                     See Activities
//                   </Link>
//                 </div>
//                 { <img src={city.img} alt="pic" className="cityImg" />
//         </div>
//         </div>
//           );
//         })}
//       </div>
//     )
//   }
// }
