import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };
  }

  onSearchSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSearchSubmit}>
          <input
            type="text"
            placeholder="Search..."
            onChange={e => this.setState({ searchTerm: e.target.value })}
            value={this.state.searchTerm}
          />
          <div id="icon-button" onClick={this.onSearchSubmit}>
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
