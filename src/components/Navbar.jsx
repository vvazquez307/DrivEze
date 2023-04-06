import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const handleLogout = () => {
    props.setIsLoggedIn = false;
    localStorage.clear();

    // Refresh the page to log out the user
    //window.location.reload();
  };

  return (
    <div id="navbar">
      <div id="nav-title">
        <Link to="/">
          <img src="/images/logo.png" alt="logo" className="navLogo" />
        </Link>
      </div>
      <div id="nav-buttons">
        {!props.isLoggedIn && (
          <React.Fragment>
            <Link to="/register">
              <button id="button">Register</button>
            </Link>
            <Link to="/login">
              <button id="button">Login</button>
            </Link>
          </React.Fragment>
        )}
        {props.isLoggedIn && (
          <React.Fragment>
            <Link to="/profile">
              <button id="button">Profile</button>
            </Link>
            <Link to="/cart">
              <button id="button">Cart</button>
            </Link>
            <button id="button" onClick={handleLogout}>
              Log Out
            </button>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Navbar;
