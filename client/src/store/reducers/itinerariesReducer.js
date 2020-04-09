const initialState = {
  itineraries: [],
  err: "",
};

function itinerariesReducer(state = initialState, action) {
  // console.log("itinerary action", action);
  switch (action.type) {
    case "FETCH_ITINERARIES_SUCCESS":
      // console.log("FETCH_ITINERARIES_SUCCESS", action);
      return { ...state, itineraries: action.payload, err: "" };

    case "FETCH_ITINERARIES_ERROR":
      console.log("FETCH_ITINERARIES_ERROR", action);
      return { ...state, err: action.payload };
    default:
      return state;
  }
}
export default itinerariesReducer;
