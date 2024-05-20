import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import { CookiesProvider } from "react-cookie";

const routing = (
  <React.StrictMode>
    <Router>
      <CookiesProvider>
        <Route exact path="/" component={Login} />
        <Route exact path="/profiles" component={App} />
      </CookiesProvider>
    </Router>
  </React.StrictMode>
);

ReactDOM.render(routing, document.getElementById("root"));
reportWebVitals();
