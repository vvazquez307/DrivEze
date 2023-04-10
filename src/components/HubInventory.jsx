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
      <div id="hubs-form">
        <h1>Hub ID # {id}</h1>
        <h2>Number of vehicles at Hub #{id} : {inventory.length}</h2>
        {inventory.map((car) => (
          <div key={car.id}>
          </div>
        ))}
      </div>
      <Link to="/locations" id="back-button">Go back</Link>
    </>
  );
}

export default HubInventory;
