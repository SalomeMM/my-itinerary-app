export const FETCH_CITY = "FETCH_CITY";

export const fetchCitiesAction = () => {
  return dispatch => {

    fetch("http://localhost:5000/api/cities/all")
      .then(resp => {
        return resp.json();
      })
      .then(json => {
        dispatch({ type: "FETCH_CITIES_SUCCESS", payload: json });
      })
      .catch(err => {
        dispatch({ type: "FETCH_CITIES_ERROR", payload: err });
      });