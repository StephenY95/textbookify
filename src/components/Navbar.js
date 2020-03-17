import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default class Navbar extends React.Component {
  render() {
    return (
      <header>
        <Link to="/">
          <img src="./images/textbookify.png" width="250" alt="logo" />
        </Link>
        <div>
          <ul>
            <li>Search</li>
            <li>Sell</li>
            <Link to="/login">
              <li>Log in</li>
            </Link>
            <li>
              <button className="button-style">Sign up</button>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
