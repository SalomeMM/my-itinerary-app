const initialState = {
  cities: [],
  err: "",
};

function citiesReducer(state = initialState, action) {
  // console.log("city action", action);
  switch (action.type) {
    case "FETCH_CITIES_SUCCESS":
      // console.log("FETCH_CITIES_SUCCESS", action);
      return { ...state, cities: action.payload, err: "" };

    case "FETCH_CITIES_ERROR":
      console.log("FETCH_CITIES_ERROR", action);
      return { ...state, err: action.payload };
    default:
      return state;
  }
}
export default citiesReducer;
