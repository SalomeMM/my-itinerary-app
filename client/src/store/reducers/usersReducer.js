const initialState = {
  user: null,
  picture: "",
  err: "",
  token: "",
  isLoggedIn: false,
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      console.log("SIGNUP_SUCCESS", action);
      return { ...state, users: action.payload, err: "", isLoggedIn: true };
    case "SIGNUP_ERROR":
      console.log("SIGNUP_ERROR", action);
      return { ...state, err: action.payload.data };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        token: action.token,
        user: action.payload,
        isLoggedIn: true,
      };
    case "LOGOUT SUCCESS":
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        user: null,
      };
    default:
      return state;
  }
}
export default usersReducer;
