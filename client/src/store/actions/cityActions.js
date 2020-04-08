export const FETCH_CITIES = "FETCH_CITIES";

export const fetchCities = () => {
  return (dispatch) => {
    fetch("http://localhost:5000/cities/all")
      .then((resp) => {
        return resp.json();
      })
      .then((json) => {
        dispatch({ type: "FETCH_CITIES_SUCCESS", payload: json });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_CITIES_ERROR", payload: err });
      });
  };
};
