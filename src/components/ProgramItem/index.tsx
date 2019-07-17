import React from "react";
import "./style.scss";
import { IProgramItemProps } from "../../interfaces";

const ProgramItem: React.FC<IProgramItemProps> = ({ title, url }): JSX.Element => {
  return (
    <div id="wrapper">
      <img src={url} alt={title} />
      <div>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default ProgramItem;
