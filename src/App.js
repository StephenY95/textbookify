import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import LoginPage from "./components/auth/LoginPage";

function App() {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section id="main">
        <div className="main-text">
          <span>textbookify.</span>
          <br />
          Get rid of those old textbooks now
          <br />
        </div>
      </section>
      <section></section>
    </div>
  );
}

export default App;
