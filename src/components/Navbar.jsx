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
      <div className="navQuoteDiv">
        <h2 id="nav-quote">"Making Driving Easier since 2023"</h2>
      </div>

      <div className="navButtonsDiv">
        {!props.isLoggedIn && (
          <React.Fragment>
            <Link to="/login">
              <button class="nav-buttons" role="button">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button class="nav-buttons" role="button">
                Register
              </button>
            </Link>
            <Link to="/guest">
              <button class="nav-buttons" role="button">
                Guest
              </button>
            </Link>
          </React.Fragment>
        )}
        {props.isLoggedIn && (
          <div className="navButtonsDiv">
            <Link to="/profile" id="navLink">
              <button class="nav-buttons" role="button">
                Profile
              </button>
            </Link>
            <Link to="/cart" id="navLink">
              <button class="nav-buttons" role="button">
                Cart
              </button>
            </Link>
            <button class="nav-buttons" role="button" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
