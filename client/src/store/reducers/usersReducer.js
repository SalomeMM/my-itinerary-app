const initialState = {
  user: null,
  picture: "",
  err: "",
  isLoggedIn: false,
};

function usersReducer(state = initialState, action) {
  // console.log("user action", action);
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      console.log("SIGNUP_SUCCESS", action);
      return { ...state, users: action.payload, err: "", isLoggedIn: true };
    case "SIGNUP_ERROR":
      console.log("SIGNUP_ERROR", action);
      return { ...state, err: action.payload.data };
    default:
      return state;
  }
}
export default usersReducer;
