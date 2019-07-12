import React from "react";
import "./style.scss";
import ProgramItem from "../ProgramItem";
import { IProgramListProps } from "../../interfaces";

const ProgramList: React.FC<IProgramListProps> = ({ programs }): JSX.Element => {
  return (
    <div id="program-list">
      {programs.map((p: { [index: string]: any }) => (
        <ProgramItem key={p.title} title={p.title} url={p.images["Poster Art"].url} />
      ))}
    </div>
  );
};

export default ProgramList;
