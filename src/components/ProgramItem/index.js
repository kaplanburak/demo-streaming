import React from "react";
import "./style.scss";

const ProgramItem = ({ title, url }) => {
  return (
    <div id="item-wrapper">
      <div id="poster">
        <img src={url} alt={title} />
      </div>
      <div id="title">
        <span>{title}</span>
      </div>
    </div>
  );
};

export default ProgramItem;
