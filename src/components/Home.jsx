import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  let user = localStorage.getItem("user");

  return (
    <main className="home-page">
      <div id="home-buttons">
        <Link to="/Locations">
          <button id="button">Locations</button>
        </Link>
        <Link to="/about">
          <button id="button">About Us</button>
        </Link>
      </div>
      <div id="welcome-section">
        <div id="welcome-user">
          <h1>Welcome {user} to DrivEze!</h1>
        </div>
        <div id="welcome-desc">
          <h2>
            The rental car industry has been stagnant for over 60 years, lets
            change that.
            <Link to="/vehicleList">
              <button id="available-button">View Available Cars</button>
            </Link>
          </h2>
        </div>
      </div>
    </main>
  );
};
export default Home;
