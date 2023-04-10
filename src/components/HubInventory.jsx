import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { hubInventory } from "../api-adapter/hub";

function HubInventory(props) {
  const { id } = useParams();
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    async function fetchInventory() {
      const inventory = await hubInventory(id);
      console.log(inventory, "INVENTORY LOG");
      setInventory(inventory);
    }
    fetchInventory();
  }, [id]);

  // Render the inventory for the selected hub.
  return (
    <>
      <div>
        <h1>Inventory for Hub {id}</h1>
        {inventory.map((car) => (
          <div key={car.id}>
            <h2>
              id:{car.id}
              <br />
              hub id:{car.hubId}
            </h2>
            <br />
            <p>car ID: {car.carId}</p>
          </div>
        ))}
      </div>
      <Link to="/locations">Go back</Link>
    </>
  );
}
export default HubInventory;
