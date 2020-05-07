import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { login } from "../store/actions/userActions";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Navbar,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      search: "",
      users: {
        username: "",
        email: "",
        password: "",
        picture: "",
      },
    };
  }

  // componentDidMount() {
  //   const userData = {
  //     user: this.state.users,
  //   };
  //   console.log(userData);
  //   this.props.login(userData);
  // }

  render() {
    //toggle = () => this.setState({ isOpen: !isOpen });
    return (
      <div>
        <Navbar color="light" light expand="md">
          {/* Icon 1/3: User = dropdown to Profile, LogOut)*/}
          {/* <NavbarBrand href="./Profile">
            <FontAwesomeIcon
              icon={faUserCircle}
              className="faUserCircle NavbarIcon"
            /> */}
          {/* </NavbarBrand> */}
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav>
              <FontAwesomeIcon
                icon={faUserCircle}
                className="faUserCircle NavbarIcon"
              />
            </DropdownToggle>
            <DropdownMenu>
              {this.props.user.isLoggedIn ? (
                <DropdownItem>
                  {" "}
                  <Link to="./profile">My profile </Link>
                </DropdownItem>
              ) : (
                <DropdownItem>
                  <Link to="/signup">Sign up </Link>
                </DropdownItem>
              )}

              {this.props.user.isLoggedIn ? (
                <DropdownItem>
                  <Link to="/logout">Log out </Link>
                </DropdownItem>
              ) : (
                <DropdownItem>
                  <Link to="/login">Log in </Link>
                </DropdownItem>
              )}
            </DropdownMenu>
          </UncontrolledDropdown>
          {/* Icon 2/3: Home */}
          <NavbarBrand href="/">
            <FontAwesomeIcon icon={faHome} className="faHome NavbarIcon" />
          </NavbarBrand>
          {/* Icon 3/3: Bars = dropdown to Cities, Favourites) */}
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav>
              <FontAwesomeIcon
                icon={faBars}
                className="faBars NavbarIcon"
                onClick={() => this.setState({ isOpen: !this.state.isOpen })}
              />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                {" "}
                <Link to="./cities">Cities </Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="./favourites">Favourites </Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users,
  };
};
// const mapDispatchToProps = (dispatch) => ({
//   login: (userData) => dispatch(login(userData)),
// });
export default connect(mapStateToProps)(Header);
// export default connect(mapStateToProps, mapDispatchToProps)(Header);
