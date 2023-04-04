import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <div id="nav-title">
      <Link to="/">DrivEze</Link>
      </div>
      <div id="nav-buttons">
      <Link to="/register"><button id="button">Register</button></Link>
      <Link to="/login"><button id="button">Login</button></Link>
      <Link to="/profile"><button id="button">Profile</button></Link>
      <Link to="/cart"><button id="button">Cart</button></Link>
      <button id="button">Log Out</button>
      </div>
    </div>
  );
};

export default Navbar;