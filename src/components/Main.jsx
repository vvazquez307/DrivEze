import React, { useState, useEffect } from "react";
import { Navbar, Home, Locations } from "./";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Profile, Footer } from "./index";
import AllVehicles from "./AllVehicles";
import Login from "./Login";
import Register from "./Register";
import About from "./About";
import Cart from "./Cart";
import Guest from "./Guest";
import { getAllHubs } from "../api-adapter/hub";

//this is to start a branch
const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isGuestUser, setIsGuestUser] = useState(
    localStorage.getItem("isGuestUser") === "true"
  );
  const [guestName, setGuestName] = useState(
    localStorage.getItem("guestName") || ""
  );
  const [locations, setLocations] = useState([]);

  console.log(isLoggedIn, "logged in Main");
  console.log(isGuestUser, "guest user main");
  console.log(locations, "locations in Main");

  useEffect(() => {
    async function allHubs() {
      let hubs = await getAllHubs();
      setLocations(hubs); // call setLocations function to update state in Main
    }
    allHubs();
    const loggedIn = localStorage.getItem("loggedIn");
    setIsLoggedIn(loggedIn === "true");

    const isGuest = localStorage.getItem("isGuestUser");
    setIsGuestUser(isGuest === "true");
  }, [setLocations]);

  const handleLogin = (isLoggedIn) => {
    setIsLoggedIn(isLoggedIn);
    localStorage.setItem("loggedIn", "true");
  };

  return (
    <BrowserRouter>
      <div id="main">
        <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile locations={locations} />} />

          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/guest"
            element={
              <Guest
                setIsGuestUser={setIsGuestUser}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/vehicleList"
            element={
              <AllVehicles isGuestUser={isGuestUser} isLoggedIn={isLoggedIn} />
            }
          />

          <Route path="/about" element={<About />} />

          <Route
            path="/locations"
            element={<Locations setLocations={setLocations} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Main;
