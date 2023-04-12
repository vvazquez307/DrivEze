import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { hubInventory } from "../api-adapter/hub";
import { getCarById } from "../api-adapter";
import { addCarToCart } from "../api-adapter";

function HubInventory(props) {
  const { id } = useParams();
  const [inventory, setInventory] = useState([]);
  const [cars, setCars] = useState([]);
  const [cart, setCart] = useState({});
  const [cartMessages, setCartMessages] = useState([]);
  const token = localStorage.getItem("token");
  const loggedIn = props.isLoggedIn;
  const guestUser = props.guestUser;
  const locations = props.locations;

  console.log(locations, "LOCATIONS LOG");

  // Get the hub information
  const hub = Array.isArray(locations)
    ? locations.find((location) => location.id === Number(id))
    : null;
  const hubName = hub ? hub.location : "";
  useEffect(() => {
    async function fetchInventory() {
      const inventory = await hubInventory(id);
      setInventory(inventory);
    }
    fetchInventory();
  }, [id]);

  useEffect(() => {
    async function fetchCarDetails() {
      const carIds = inventory.map((car) => car.carId);
      const cars = await Promise.all(carIds.map((carId) => getCarById(carId)));

      setCars(cars);
      const initialCartMessages = cars.map((vehicle) => ({
        id: vehicle.id,
        cartMessage: "Add to cart",
      }));
      setCartMessages(initialCartMessages);
    }
    if (inventory.length > 0) {
      fetchCarDetails();
    }
  }, [inventory]);

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
  // Render the inventory for the selected hub.

  return (
    <>
      <div id="inventory-container">
        <div className="allVehiclesBottomDiv">
          <h1 id="hub-inventory">Inventory for {hubName}</h1>
          <Link to="/vehicleList" id="vehicle-button">
            Click here to see all vehicles.
          </Link>
          {cars.map((car, index) => {
            const inventoryItem = inventory[index];
            return (
              <div key={inventoryItem.id} className="vehicleListing">
                <div className="vehicleImgBox">
                  <img
                    className="vehicleImg"
                    src={car.image.replace("./", "/")}
                    alt={car.name}
                  />
                  <div className="vehicleName">
                    <h3>{car.name}</h3>
                  </div>
                </div>
                <div className="vehicleDescription">
                  <h3 className="vehicleDetails">Vehicle information:</h3>
                  <h4 className="vehicleDetails">{car.description}</h4>
                  <br />

                  <h3 className="vehicleDetails">Daily rate:</h3>
                  <h4 className="vehicleDetails">${car.daily_rate}</h4>
                  <br />
                  <h3 className="vehicleDetails">Hub location</h3>
                  <h4 className="vehicleDetails">{car.hubLocation}</h4>
                  <br />
                </div>
                <div className="addToCart">
                  <button
                    className="hubInventoryButtons"
                    onClick={() => {
                      addVehicleToCart(token, car.id, car.daily_rate, index);
                    }}
                  >
                    {cartMessages[index].cartMessage}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <Link to="/locations" id="back-button">
          Go back
        </Link>
      </div>
    </>
  );
}

export default HubInventory;
