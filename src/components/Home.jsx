import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  let user = localStorage.getItem("user");

  return (
    <main className="home-page">
      <div className="homePageLeft">
        <div id="welcome-section">
          <div id="welcome-user">
            <h1>Welcome {user} to DrivEze!</h1>
          </div>
          <div id="welcome-desc">
            <h3 className="homePageText">
              The rental car industry has been stagnant for over 60 years, lets
              change that.
            </h3>
            <img className="carLotImg" src="./images/car-rental.jpeg" alt="car lot"></img>
            <p id="imgBlurb">This photo was taken in late 2022 and it marks the completion of our latest hub: Denver, Co</p>
          </div>
            <Link to="/vehicleList" className="homePageLink">
              <button class="homePageButtons" role="button">
                View Available Cars
              </button>
            </Link>
        </div>
      </div>
      <div className="homePageRight">
        <div id="welcome-section-locations">
          <div id="welcome-locations">
            <h1>Areas of service</h1>
          </div>
          <div id="welcome-desc">
            <h3 className="homePageText">
              Our rental locations are strategically placed to make it
              convenient for you to rent from us.
            </h3>
            <div className="mapImgDiv">
              <img className="mapImg" src="./images/map.png" alt="map" />
            </div>
          </div>
            <Link to="/locations" className="homePageLink">
              <button class="homePageButtons" role="button">
                View Locations
              </button>
            </Link>
        </div>
        <div id="welcome-section-about">
          <div id="welcome-about">
            <h1>About Us</h1>
          </div>
          <div id="welcome-desc">
            <h3 className="homePageText">
              Learn more about our company and our commitment to providing
              quality car rental services.
            </h3>
            <div className="aboutImgDiv">
              <img className="aboutImg" src="./images/info.png" alt="map" />
            </div>
          </div>
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
