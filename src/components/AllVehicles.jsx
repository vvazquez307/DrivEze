import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllVehicles, addCarToCart, getCartByUserId } from "../api-adapter";

function AllVehicles(props) {
  const [vehicles, setVehicles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searched, setSearched] = useState("");
  const [cart, setCart] = useState({});
  const token = localStorage.getItem("token");
  const loggedIn = props.isLoggedIn;
  const guestUser = props.guestUser;
  console.log(vehicles);

  const initialCartMessages = vehicles.map((vehicle) => ({
    id: vehicle.id,
    cartMessage: "Add to cart",
  }));

  const [cartMessages, setCartMessages] = useState(initialCartMessages);

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
      setCartMessages(
        vehicles.map((vehicle) => ({
          id: vehicle.id,
          cartMessage: "Add to cart",
        }))
      );
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

  const addVehicleToCart = async (token, carId, price, index) => {
    try {
      const result = await addCarToCart(token, carId, price);
      const newCartMessages = [...cartMessages];
      newCartMessages[index].cartMessage = "Vehicle added to cart";
      setCartMessages(newCartMessages);
      console.log(result);
      setCart(result);
    } catch (error) {
      console.log(error);
    }
  };

  function checkoutButton() {
    return (
      <div>
        <Link to="/cart" state={{ cart: cart }}>
          <button id="button">Checkout</button>
        </Link>
      </div>
    );
  }

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
                <div className="vehicleName">{vehicle.name}</div>
              </div>
              <div className="vehicleDescription">
                <h3 className="vehicleDetails">{vehicle.name}</h3>
                <h3 className="vehicleDetails">Vehicle information:</h3>
                <h5 className="vehicleDetails">{vehicle.description}</h5>
                <br />

                <h3 className="vehicleDetails">Daily rate:</h3>
                <h5 className="vehicleDetails">{vehicle.daily_rate}</h5>
                <br />
                <h3 className="vehicleDetails">Hub location</h3>
                <h5 className="vehicleDetails">{vehicle.hubLocation}</h5>
                <br />
              </div>
              <div className="addToCart">
                <button
                  className="addToCartBtn"
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
      <Link to="/">Go Back</Link>
    </>
  );
}
export default AllVehicles;
