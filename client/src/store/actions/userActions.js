import axios from "axios";

export const FETCH_USERS = "FETCH_USERS";

export const fetchUsers = () => {
  return (dispatch) => {
    fetch("http://localhost:5000/users/all")
      .then((resp) => {
        return resp.json();
      })
      .then((json) => {
        dispatch({ type: "FETCH_USERS_SUCCESS", payload: json });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_USERS_ERROR", payload: err });
      });
  };
};

export const register = (newUser) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/users/register", newUser)
      .then((res) => {
        console.log("response", res);
        if (res.status === 200) {
          dispatch({
            type: "SIGNUP_SUCCESS",
            payload: res.data,
          });
        }
      })
      .catch((error) => {
        console.log("error" + error.response);
        if (error.response) {
          if (error.response.status === 409) {
            alert("Sign up error");
          } else {
            alert("Please review your data");
          }
        }
      });
  };
};
