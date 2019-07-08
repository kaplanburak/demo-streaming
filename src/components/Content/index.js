import React from "react";
import "./style.scss";
import ProgramList from "../ProgramList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };
  }

  render() {
    const { list, isLoading, gotError } = this.props;
    if (isLoading) return <p>Loading...</p>;
    if (gotError) return <p>Oops, something went wrong...</p>;

    const { searchTerm, forceSearch } = this.state;
    let filteredList = [...list];

    if (searchTerm.length > 2 || forceSearch) {
      filteredList = filteredList.filter(item =>
        item.title.toUpperCase().includes(searchTerm.toUpperCase())
      );
    }

    return (
      <div>
        <div id="filters">
          <form id="search-form">
            <input
              type="text"
              placeholder="Search..."
              onChange={e => this.setState({ searchTerm: e.target.value })}
              value={this.state.searchTerm}
            />
            <div id="icon-button">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </form>
          <form id="sort-form">
            <select>
              <option>Sort by year in descending order.</option>
              <option>Sort by year in ascending order.</option>
              <option>Sort by title in descending order.</option>
              <option>Sort by title in ascending order.</option>
            </select>
          </form>
        </div>
        {filteredList.length ? (
          <ProgramList programs={filteredList} />
        ) : (
          <p>Sorry, we couldn't find any results matching "{searchTerm}"</p>
        )}
      </div>
    );
  }
}

export default Content;
