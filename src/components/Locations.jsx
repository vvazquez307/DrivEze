import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllHubs } from "../api-adapter/hub";

function AllHubs({ setLocations }) {
  const [locations, setLocationsState] = useState([]);

  useEffect(() => {
    async function allHubs() {
      let hubs = await getAllHubs();
      setLocationsState(hubs);
      setLocations(hubs); // call setLocations function to update state in Main
    }
    allHubs();
  }, [setLocations]);

  console.log("!!!")
  return (
    <>
      <div id="hubs">
        <h1 id="hub-title-text">Hub Locations</h1>

        {locations.map((location) => (
          <div id="hub-view" key={location.id}>
            <h3 id="locations-list">{location.location}</h3>
          </div>
        ))}
        <Link to="/" id="back-button">
          Go Back
        </Link>
      </div>
    </>
  );
}

export default AllHubs;
