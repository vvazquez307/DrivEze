import React from "react";
import { Link } from "react-router-dom";

function AllVehicles() {
  return (
    <>
      <div className="allVehiclesPage">
        <div className="allVehiclesTopDiv">
          <div className="searchBar">search bar</div>
          <div className="filters">filters </div>
        </div>
        <div className="allVehiclesBottomDiv">
          <div className="vehicleListing">
            <div className="vehicleImg">img</div>
            <div className="vehicleDescription">description</div>
            <div className="addToCart">add to cart</div>
          </div>
          <div className="vehicleListing">
            <div className="vehicleImg">img</div>
            <div className="vehicleDescription">description</div>
            <div className="addToCart">add to cart</div>
          </div>
          <div className="vehicleListing">
            <div className="vehicleImg">img</div>
            <div className="vehicleDescription">description</div>
            <div className="addToCart">add to cart</div>
          </div>
          <div className="vehicleListing">
            <div className="vehicleImg">img</div>
            <div className="vehicleDescription">description</div>
            <div className="addToCart">add to cart</div>
          </div>
        </div>
      </div>
      <Link to="/">Go Back</Link>
    </>
  );
}

export default AllVehicles;
