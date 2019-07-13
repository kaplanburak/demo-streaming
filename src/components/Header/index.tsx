import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./style.scss";
import { TReduxState, IAppState } from "../../interfaces";

export const Header: React.FC<IAppState> = ({ pageTitle }): JSX.Element => {
  return (
    <header>
      <nav>
        <div>
          <h1>
            <Link to="/">DEMO Streaming</Link>
          </h1>
        </div>
        <div>
          <button className="button-ghost">Log in</button>
          <button id="button-gray">Start your free trial</button>
        </div>
      </nav>
      <div id="page-title">
        <h2>{pageTitle}</h2>
      </div>
    </header>
  );
};

const mapStateToProps = (state: TReduxState) => {
  return {
    pageTitle: state.app.pageTitle || ""
  };
};

export default connect(mapStateToProps)(Header);
