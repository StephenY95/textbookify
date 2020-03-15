import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import LoginPage from "./components/auth/LoginPage";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/login" component={LoginPage} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
