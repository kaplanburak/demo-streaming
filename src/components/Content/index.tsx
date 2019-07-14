import React from "react";
import "./style.scss";
import ProgramList from "../ProgramList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { IContentState, IContentProps, TEntry } from "../../interfaces";

class Content extends React.Component<IContentProps, IContentState> {
  state = {
    searchTerm: "",
    sortBy: ""
  };

  render(): JSX.Element {
    const { list, isLoading, gotError }: IContentProps = this.props;
    if (isLoading) return <p>Loading...</p>;
    if (gotError) return <p>Oops, something went wrong...</p>;

    const { searchTerm, sortBy }: IContentState = this.state;
    let filteredList = [...list];

    if (searchTerm.length > 2) {
      filteredList = filteredList.filter((item: TEntry) => item.title.toUpperCase().includes(searchTerm.toUpperCase()));
    }

    if (sortBy.length) {
      const key = sortBy.split("-")[0];

      let lessThen = -1;
      let greaterThen = 1;

      if (sortBy === "title-asc" || sortBy === "releaseYear-desc") {
        lessThen *= -1;
        greaterThen *= -1;
      }

      filteredList = filteredList.sort((a: { [index: string]: any }, b: { [index: string]: any }) => {
        let valueA = a[key];
        let valueB = b[key];

        if (typeof valueA === "string") {
          valueA = valueA.toUpperCase();
          valueB = valueB.toUpperCase();
        }

        if (valueA < valueB) return lessThen;
        if (valueA > valueB) return greaterThen;
        return 0;
      });

      //console.log(sortBy, filteredList.reduce((arr, i) => [...arr, i[key]], []));
    }

    return (
      <div>
        <div id="filters">
          <form id="search-form">
            <input
              type="text"
              placeholder="Search..."
              onChange={e => this.setState({ searchTerm: e.target.value })}
              value={searchTerm}
            />
            <div id="icon-button">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </form>
          <form id="sort-form">
            <select value={sortBy} onChange={e => this.setState({ sortBy: e.target.value })}>
              <option value="" disabled>
                Sort by
              </option>
              <option value="releaseYear-desc">Sort by year in descending order.</option>
              <option value="releaseYear-asc">Sort by year in ascending order.</option>
              <option value="title-desc">Sort by title in descending order.</option>
              <option value="title-asc">Sort by title in ascending order.</option>
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
