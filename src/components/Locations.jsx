import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllHubs } from "../api-adapter/hub";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function AllHubs(props) {
  const [hubs, setHubs] = useState([]);

  useEffect(() => {
    async function getHubs() {
      const hub = await getAllHubs();
      setHubs(hub);
    }
    getHubs();
  }, []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
  });

  // If the maps script hasn't loaded yet, display a loading message.
  if (!isLoaded) return <div>Loading...</div>;

  // Render the map with the hubs.
  return (
    <>
      <div id="hubs">
        <h1 id="hub-title-text">All Hub Locations</h1>

        {hubs.map((location) => (
          <div className="hubViewDiv">
            <div id="hub-view" key={location.id}>
              {/* <h3 id="locations-list"> */}
              <Link
                to={{
                  pathname: `/hub/${location.id}`,
                  state: { hubs: hubs },
                }}
                id="locations-list"
              >
                {location.location}
              </Link>
              {/* </h3> */}
            </div>
          </div>
        ))}
        <Link to="/" id="back-button">
          Go Back
        </Link>
      </div>

      {/* Render the map with the hubs */}
      <Map hubs={hubs} />
    </>
  );
}

function Map(props) {
  const mapContainerStyle = {
    width: "100%",
    height: "60%",
  };

  const center = {
    lat: 37.0902,
    lng: -105.7129,
  };

  const zoom = 5;

  // Use the props.hubs list to render markers on the map.
  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={zoom}
      center={center}
    >
      {props.hubs.map((location) => (
        <Marker
          key={location.id}
          position={{ lat: location.latitude, lng: location.longitude }}
        />
      ))}
    </GoogleMap>
  );
}

export default AllHubs;
