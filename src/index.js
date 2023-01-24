import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.scss";

const rootElelemt = ReactDOM.createRoot(document.getElementById("root"));

rootElelemt.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
