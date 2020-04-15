export const FETCH_ITINERARIES = "FETCH_ITINERARIES";

export const fetchItineraries = () => {
  return (dispatch) => {
    fetch("http://localhost:5000/itineraries/all")
      .then((resp) => {
        return resp.json();
      })
      .then((json) => {
        dispatch({ type: "FETCH_ITINERARIES_SUCCESS", payload: json });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ITINERARIES_ERROR", payload: err });
      });
  };
};

export const fetchItinerariesByCityName = (name) => {
  return (dispatch) => {
    fetch("http://localhost:5000/api/itineraries/" + name)
      .then((resp) => {
        return resp.json();
      })
      .then((json) => {
        dispatch({ type: "FETCH_ITINERARIES_SUCCESS", payload: json });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ITINERARIES_ERROR", payload: err });
      });
  };
};
