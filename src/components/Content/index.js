import React from "react";
import ProgramList from "../ProgramList";
import "./style.scss";

const Content = ({ list, isLoading, gotError }) => {
  return (
    <main>
      {isLoading ? (
        <p>Loading...</p>
      ) : gotError ? (
        <p>Oops, something went wrong...</p>
      ) : (
        <ProgramList programs={list} />
      )}
    </main>
  );
};

export default Content;
