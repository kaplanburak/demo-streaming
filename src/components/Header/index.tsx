import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./style.scss";
import { TReduxState, IHeaderState, IHeaderProps } from "../../interfaces";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Header extends React.Component<IHeaderProps, IHeaderState> {
  state = {
    menuIsOpen: false
  };

  render(): JSX.Element {
    const { menuIsOpen } = this.state;
    console.log("menuIsOpen: ", menuIsOpen);

    return (
      <header>
        <nav>
          <div id="nav-title">
            <div>
              <h1>
                <Link to="/">DEMO Streaming</Link>
              </h1>
            </div>
            <div id="menu">
              <div onClick={() => this.setState({ menuIsOpen: true })} className={menuIsOpen ? "hidden" : ""}>
                <FontAwesomeIcon icon={faBars} size="2x" />
              </div>
              <div onClick={() => this.setState({ menuIsOpen: false })} className={!menuIsOpen ? "hidden" : ""}>
                <FontAwesomeIcon icon={faTimes} size="2x" />
              </div>
            </div>
          </div>
          <div id="nav-buttons" className={!menuIsOpen ? "hidden" : ""}>
            <button className="button-ghost">Log in</button>
            <button id="button-gray">Start your free trial</button>
          </div>
        </nav>
        <div id="page-title">
          <h2>{this.props.pageTitle}</h2>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state: TReduxState) => {
  return {
    pageTitle: state.app.pageTitle || ""
  };
};

export default connect(mapStateToProps)(Header);
