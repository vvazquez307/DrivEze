import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <div id="nav-title">
      <Link to="/">DrivEze</Link>
      </div>
      <div id="nav-buttons">
      <button id="button">Register</button>
      <button id="button">Login</button>
      <button id="button">Cart</button>
      <button id="button">Log Out</button>
      </div>
    </div>
  );
};

export default Navbar;