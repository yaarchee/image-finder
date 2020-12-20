import React from "react";
import ReactDOM from "react-dom";
import AppHooks from "./components/ImageFinder/App/App";
import "./styles.css";

ReactDOM.render(
  <React.StrictMode>
    <>
      <AppHooks />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
