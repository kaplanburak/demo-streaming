import React from "react";
import "./style.scss";
import ProgramList from "../ProgramList";
import SearchBar from "../SearchBar";

const Content = ({ list, isLoading, gotError }) => {
  return (
    <main>
      {isLoading ? (
        <p>Loading...</p>
      ) : gotError ? (
        <p>Oops, something went wrong...</p>
      ) : (
        <div>
          <div id="filters">
            <SearchBar />
            <div>Filter</div>
          </div>
          <ProgramList programs={list} />
        </div>
      )}
    </main>
  );
};

export default Content;
