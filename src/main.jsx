import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import Rockets from "./components/Rockets.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Rockets />
  </React.StrictMode>
);
