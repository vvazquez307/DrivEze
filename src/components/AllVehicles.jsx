import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllVehicles, addCarToCart, getCartByUserId } from "../api-adapter";
import { getAllTags, carsByTags } from "../api-adapter/tags";

function AllVehicles(props) {
  const [vehicles, setVehicles] = useState([]);
  const [tags, setTags] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [searched, setSearched] = useState("");
  const [cart, setCart] = useState({});
  const token = localStorage.getItem("token");
  const loggedIn = props.isLoggedIn;
  const guestUser = props.guestUser;

  const initialCartMessages = vehicles.map((vehicle) => ({
    id: vehicle.id,
    cartMessage: "Add to cart",
  }));

  const [cartMessages, setCartMessages] = useState(initialCartMessages);

  if (!loggedIn) {
    return (
      <div>
        <h2 id="guest-form">
          Please
          <Link to="/login" id="log-link">
            {" "}
            login
          </Link>
          <br />
          or
          <br />
          <Link to="/guest" id="guest-link">
            {" "}
            continue as guest{" "}
          </Link>
          to view available inventory
        </h2>
      </div>
    );
  }

  useEffect(() => {
    async function allVehicles() {
      let vehicles = await getAllVehicles();
      let tags = await getAllTags();
      setVehicles(vehicles);
      setTags(tags);
      setCartMessages(
        vehicles.map((vehicle) => ({
          id: vehicle.id,
          cartMessage: "Add to cart",
        }))
      );
    }
    allVehicles();
  }, []);

  const searchedVehicle =
    searchResults.length > 0
      ? searchResults
      : vehicles.filter((vehicle) => {
          return vehicle.name.toLowerCase().startsWith(searched.toLowerCase());
        });

  const searchHandle = (e) => {
    setSearchTerm(e.target.value);
    setSearched(e.target.value);
  };

  const addVehicleToCart = async (token, carId, price, index) => {
    try {
      const result = await addCarToCart(token, carId, price);
      const newCartMessages = [...cartMessages];
      newCartMessages[index].cartMessage = "Vehicle added to cart";
      setCartMessages(newCartMessages);
      setCart(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTagSelect = async (tagId) => {
    try {
      const cars = await carsByTags(tagId);
      setSearchResults(cars);
    } catch (error) {
      console.log(error);
    }
  };

  function checkoutButton() {
    return (
      <div>
        <Link to="/cart" state={{ cart: cart }}>
          <button class="nav-buttons" role="button">
            Checkout
          </button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div id="inventory-container">
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
            <div className="filters">
              <label htmlFor="">Filter</label>
              <select
                className="dropDown"
                onChange={(e) => handleTagSelect(e.target.value)}
              >
                <option value="">All</option>
                {tags.map((tag) => (
                  <option key={tag.id} value={tag.id}>
                    {tag.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <Link to="/locations" id="hub-location-btn">
            Browse by hub location.
          </Link>
          {cart.id ? checkoutButton() : null}
          <div className="allVehiclesBottomDiv">
            {searchedVehicle.map((vehicle, index) => (
              <div className="vehicleListing" key={vehicle.id}>
                <div className="vehicleImgBox">
                  <img
                    className="vehicleImg"
                    src={vehicle.image}
                    alt={vehicle.name}
                  />
                  <div className="vehicleName">
                    <h3>{vehicle.name}</h3>
                  </div>
                </div>
                <div className="vehicleDescription">
                  <h3 className="vehicleDetails">Vehicle information:</h3>
                  <h4 className="vehicleDetails">{vehicle.description}</h4>
                  <br />

                  <h3 className="vehicleDetails">Daily rate:</h3>
                  <h4 className="vehicleDetails">${vehicle.daily_rate}</h4>
                  <br />
                  <h3 className="vehicleDetails">Hub location</h3>
                  <h4 className="vehicleDetails">{vehicle.hubLocation}</h4>
                  <br />
                </div>
                <div id="addToCartButton">
                  <button
                    class="allVehiclesButtons"
                    role="button"
                    onClick={() => {
                      addVehicleToCart(
                        token,
                        vehicle.id,
                        vehicle.daily_rate,
                        index
                      );
                    }}
                  >
                    {cartMessages[index].cartMessage}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Link to="/" id="back-button">
          Go Back
        </Link>
      </div>
    </>
  );
}
export default AllVehicles;
