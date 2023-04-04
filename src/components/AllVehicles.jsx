import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllVehicles } from "../api-adapter";

function AllVehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searched, setSearched] = useState("");

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
                <img
                  src="/images/Cart.png"
                  alt="cartImage"
                  className="allVehiclesCart"
                />
                <div>add to cart</div>
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
