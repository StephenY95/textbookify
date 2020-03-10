import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <section>
        <header>
          <img src="./images/textbookify.png" width="200" alt="logo" />
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
      </section>
      <section id="main">
        <div className="main-text">
          <span>textbookify.</span>
          <br />
          Get rid of those old textbooks
          <br />
          and get paid.
        </div>
      </section>
      <section></section>
    </div>
  );
}

export default App;
