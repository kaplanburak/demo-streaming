import React from "react";
import "./style.scss";

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <h1>DEMO Streaming</h1>
        </div>
        <div>
          <button className="button-ghost">Log in</button>
          <button id="button-gray">Start your free trial</button>
        </div>
      </nav>
      <div id="page-title">
        <h2>Popular Titles</h2>
      </div>
    </header>
  );
};

export default Header;
