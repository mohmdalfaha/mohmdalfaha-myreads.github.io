import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import BooksApp from "./App.js";
import "./index.css";

ReactDOM.render(
  <HashRouter>
    <BooksApp />
  </HashRouter>,
  document.getElementById("root")
);
