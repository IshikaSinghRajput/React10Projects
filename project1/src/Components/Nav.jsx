import React from "react";
import "../App.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src="/images/NikeLogo.jpg" className="logo" />
      </div>
      <div className="nav-center">
        <ul>
          <li>MENU</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className="nav-right">
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
};

export default Nav;
