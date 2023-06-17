import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import Rockets from "./components/Rockets.jsx";
import Testimonials from "./components/Testimonials.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Rockets />
    <Testimonials />
    <ContactUs />
    <Footer />
  </React.StrictMode>
);
