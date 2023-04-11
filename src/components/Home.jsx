import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  let user = localStorage.getItem("user");

  return (
    <main className="home-page">
      <div id="welcome-section">
        <div id="welcome-user">
          <h1>Welcome {user} to DrivEze!</h1>
        </div>
        <div id="welcome-desc">
          <h3 className="homePageText">
            The rental car industry has been stagnant for over 60 years, lets
            change that.
          </h3>
          <Link to="/vehicleList" className="homePageLink">
            <button class="homePageButtons" role="button">
              View Available Cars
            </button>
          </Link>
        </div>
      </div>
      <div id="welcome-section">
        <div id="welcome-locations">
          <h1>Convenient locations across the United States</h1>
        </div>
        <div id="welcome-desc">
          <h3 className="homePageText">
            Our rental locations are strategically placed to make it easy and
            convenient for you to rent from us. Whether you need a car for a day
            or a month, we have a location that can serve you.
          </h3>
          <Link to="/locations" className="homePageLink">
            <button class="homePageButtons" role="button">
              View Locations
            </button>
          </Link>
        </div>
      </div>
      <div id="welcome-section">
        <div id="welcome-about">
          <h1>About Us</h1>
        </div>
        <div id="welcome-desc">
          <h3 className="homePageText">
            Learn more about our company and our commitment to providing quality
            car rental services.
          </h3>
          <Link to="/about" className="homePageLink">
            <button class="homePageButtons" role="button">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};
export default Home;
