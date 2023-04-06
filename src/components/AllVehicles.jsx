import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllVehicles, addCarToCart, getCartByUserId } from "../api-adapter";

function AllVehicles(props) {
  const [vehicles, setVehicles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searched, setSearched] = useState("");
  const [cartMessage, setCartMessage] = useState("Add to cart");

  const loggedIn = props.isLoggedIn;
  const guestUser = props.guestUser;

  if (!loggedIn) {
    return (
      <div>
        <h2>
          Please
          <Link to="/login"> login</Link>
          <br />
          or
          <br />
          <Link to="/guest"> continue as guest </Link>
          to view available inventory
        </h2>
      </div>
    );
  }

  useEffect(() => {
    async function allVehicles() {
      let vehicles = await getAllVehicles();
      setVehicles(vehicles);
    }
    allVehicles();
  }, []);

  const searchedVehicle = vehicles.filter((vehicle) => {
    return vehicle.name.toLowerCase().startsWith(searched.toLowerCase());
  });

  const searchHandle = (e) => {
    setSearchTerm(e.target.value);
    setSearched(e.target.value);
  };

  const addVehicleToCart = async (carId, userId, price) => {
    try {
      const response = await addCarToCart(carId, userId, price);
      setCartMessage("Vehicle added to cart");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="allVehiclesPage">
        <div className="allVehiclesTopDiv">
          <div className="searchBarDiv">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={searchHandle}
              className="searchBar"
            />
          </div>
          <div className="filters">filters </div>
        </div>
        <div className="allVehiclesBottomDiv">
          {searchedVehicle.map((vehicle) => (
            <div className="vehicleListing" key={vehicle.id}>
              <div className="vehicleImg">
                img
                <div className="vehicleName">{vehicle.name}</div>
              </div>
              <div className="vehicleDescription">{vehicle.description}</div>
              <div className="addToCart">
                <button
                  onClick={() => {
                    // addVehicleToCart(vehicle.id, userId, vehicle.daily_rate)
                    console.log(vehicle.id, " ///////vehicle.id//////");
                    console.log(
                      vehicle.daily_rate,
                      " ///////vehicle.daily_rate/////"
                    );
                    console.log(userId, " /////////////////userId////////////");
                  }}
                >
                  <img
                    src="/images/Cart.png"
                    alt="cartImage"
                    className="allVehiclesCart"
                  />
                </button>
                <div>{cartMessage}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link to="/">Go Back</Link>
    </>
  );
}
export default AllVehicles;
