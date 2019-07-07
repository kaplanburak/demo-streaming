import React from "react";
import "./style.scss";
import ProgramItem from "../ProgramItem";

const ProgramList = ({ programs }) => {
  return (
    <div id="program-list">
      {programs.map(p => (
        <ProgramItem
          key={p.title}
          title={p.title}
          url={p.images["Poster Art"].url}
        />
      ))}
    </div>
  );
};

export default ProgramList;
