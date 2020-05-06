import React, { Component } from "react";
import { logOut } from "../store/actions/userActions";
import { connect } from "react-redux";
import Header from "../components/Header";

class LogOut extends Component {
  componentDidMount() {
    this.props.logOut();
  }
  render() {
    return (
      <div>
        <Header />
        <h1>Log out screen</h1>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.users,
  };
};
const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogOut);
