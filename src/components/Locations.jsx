import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllHubs } from "../api-adapter/hub";

function AllHubs() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function allHubs() {
      let hubs = await getAllHubs();
      setLocations(hubs);
    }
    allHubs();
  }, []);

  return (
    <>
      <div id="hubs">
        <h1 id="hub-title-text">Hub Locations</h1>

        {locations.map((location) => (
          <div id="hub-view" key={location.id}>
            <h3 id="locations-list">{location.location}</h3>
          </div>
        ))}
      </div>
        <Link to="/" id="back-button">
          Go Back
        </Link>
    </>
  );
}

export default AllHubs;
