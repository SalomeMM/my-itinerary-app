import React, { Component } from "react";
import { Link } from "react-router-dom";
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

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      search: "",
    };
  }

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
              <DropdownItem>
                {" "}
                <Link to="./Profile">My profile </Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/">Log out </Link>
              </DropdownItem>
              {/* <DropdownItem divider /> */}
              {/* <DropdownItem>Reset</DropdownItem> */}
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
                <Link to="./Cities">Cities </Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="./Favourites">Favourites </Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Navbar>
      </div>
    );
  }
}
