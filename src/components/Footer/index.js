import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import appStore from "../../assets/app-store.svg";
import playStore from "../../assets/play-store.svg";
import microsoftStore from "../../assets/microsoft-store.svg";
import facebook from "../../assets/facebook-white.svg";
import twitter from "../../assets/twitter-white.svg";
import instagram from "../../assets/instagram-white.svg";

const Footer = () => {
  return (
    <footer>
      <div id="links">
        <Link to="/" className="link-footer">
          Home
        </Link>
        <span>|</span>
        <Link to="/" className="link-footer">
          Terms and Conditions
        </Link>
        <span>|</span>
        <Link to="/" className="link-footer">
          Privacy Policy
        </Link>
        <span>|</span>
        <Link to="/" className="link-footer">
          Collection Statement
        </Link>
        <span>|</span>
        <Link to="/" className="link-footer">
          Help
        </Link>
        <span>|</span>
        <Link to="/" className="link-footer">
          Manage Account
        </Link>
      </div>
      <div>
        <p>Copyright &copy; 2016 DEMO Streaming. All Rights Reserved.</p>
      </div>
      <div id="buttons">
        <div id="buttons-social">
          <button className="button-ghost">
            <img src={facebook} alt="Facebook" className="svg-social" />
          </button>
          <button className="button-ghost">
            <img src={twitter} alt="Twitter" className="svg-social" />
          </button>
          <button className="button-ghost">
            <img src={instagram} alt="Instagram" className="svg-social" />
          </button>
        </div>
        <div id="buttons-store">
          <button className="button-ghost">
            <img src={appStore} alt="App Store" className="svg-store" />
          </button>
          <button className="button-ghost">
            <img src={playStore} alt="Play Store" className="svg-store" />
          </button>
          <button className="button-ghost">
            <img
              src={microsoftStore}
              alt="Microsoft Store"
              className="svg-store"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
