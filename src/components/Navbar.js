import React from "react";
import "../App.css";

export default class Navbar extends React.Component {
  render() {
    return (
      <header>
        <img src="./images/textbookify.png" width="250" alt="logo" />
        <div>
          <ul>
            <li>Search</li>
            <li>Sell</li>
            <li>Log in</li>
            <li>
              <button className="button-style">Sign up</button>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
