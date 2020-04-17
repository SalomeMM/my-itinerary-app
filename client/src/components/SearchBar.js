import React, { Component } from "react";
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
            type="textarea"
            placeholder="Search city (SearchBar.js)"
            className="inputSearchBar"
            onKeyUp={(event) => this.props.search(event.target.value)}
          ></input>
        </span>
      </div>
    );
  }
}
