import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class SearchBar extends Component {
  render() {
    return (
      <div className="citySearchBar">
        <span>
          <FontAwesomeIcon icon={faSearch} className="faSearch" />
        </span>
        <span>
          <input
            id="search-bar"
            onKeyUp={(event) => this.props.search(event.target.value)}
            type="textarea"
            // type="textarea"
            placeholder="Search city"
            className="inputSearchBar"
            // onKeyUp={(event) => this.props.search(event.target.value)}
            // value={this.state.input}
            // onChange={(event) => {
            //   this.setState({ input: event.target.value });
            // }}
          ></input>
        </span>
      </div>
    );
  }
}
