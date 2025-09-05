import React from "react";
import styles from "./Navigation.module.css";
const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/image/Logo.png" />
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navigation;
