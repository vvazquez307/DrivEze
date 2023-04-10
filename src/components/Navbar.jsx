import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    props.setIsLoggedIn(false);
    localStorage.clear();
    navigate("/");
    // Refresh the page to log out the user
    //window.location.reload();
  };
  return (
    <div id="navbar">
      <div id="nav-title">
        <Link to="/">
          <img src="/images/DrivEze-lite.png" alt="logo" className="navLogo" />
        </Link>
      </div>
      <h3 id="nav-quote">"Making Driving Easier since 2023"</h3>
      <div id="nav-buttons">
        {!props.isLoggedIn && (
          <React.Fragment>
            <Link to="/login">
              <button id="button">Login</button>
            </Link>
            <Link to="/register">
              <button id="button">Register</button>
            </Link>
            <Link to="/guest">
              <button id="button">Guest</button>
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
