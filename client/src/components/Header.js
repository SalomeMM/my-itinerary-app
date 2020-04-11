import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Form,
} from "reactstrap";
import FormControl from "react-bootstrap/FormControl";
export default class Header extends Component {
  constructor(props) {
    super();
    this.state = {
      isOpen: false,
      search: "",
    };
  }

  handleChangeChild = (e) => {
    console.log("e from header", e);
    //console.log("this.props", this.props);
    this.props.callbackFromParent(e);
  };

  render() {
    //toggle = () => this.setState({ isOpen: !isOpen });
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <FontAwesomeIcon icon={faUserCircle} className="faUserCircle" />
          </NavbarBrand>
          <NavbarToggler
            onClick={() => this.setState({ isOpen: !this.state.isOpen })}
          />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink>
                  {" "}
                  <Link to="./">Home </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  {" "}
                  <Link to="/Cities">Cities </Link>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Others
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    {" "}
                    <Link to="../screens/Favourites">Favourites </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/">Profile </Link>
                  </DropdownItem>
                  {/* <DropdownItem divider /> */}
                  {/* <DropdownItem>Reset</DropdownItem> */}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <Form inline>
              <FormControl
                value={this.state.search}
                onChange={this.handleChangeChild}
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button
                variant="outline-success"
                onChange={this.handleChangeChild}
              >
                Search
              </Button>
            </Form>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
