import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";

import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import { firebaseConfig } from "./config";


const app = initializeApp(firebaseConfig);
const rootElelemt = ReactDOM.createRoot(document.getElementById("root"));

rootElelemt.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
