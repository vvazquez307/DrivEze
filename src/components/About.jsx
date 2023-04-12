import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="aboutPage">
      <div id="about-container">
        <h1 id="about-title">Learn a little about us here at DrivEze</h1>
        <img
          src="https://chippewaautoandrentals.com/wp-content/uploads/2015/06/car_rental1.jpg"
          alt="Italian Trulli"
          id="car-rental-img"
        ></img>
        <p id="about-paragraph">
          We are a car rental service that is revolutionizing the industry with
          an innovative model that delivers rental cars right to you within 2-3
          business days. For over 60 years, the car rental industry has remained
          largely unchanged, but with our service, you can get a rental car
          quickly and conveniently. Our delivery service is available in select
          cities with plans to expand nationwide, so no matter where you are,
          you can get a car with ease. We also have a wide range of vehicles to
          choose from, so you can find the perfect car for your needs.
        </p>
      </div>
      <Link to="/" id="back-button">
        Go Back
      </Link>
    </div>
  );
};

export default About;
