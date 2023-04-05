import React, { useState, useEffect } from "react";
import { Navbar, Home, Locations } from "./";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Profile, Footer } from "./index";
import AllVehicles from "./AllVehicles";
import Login from "./Login";
import Register from "./Register";
import About from "./About";
import Cart from "./Cart";

//this is to start a branch
const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isGuestUser, setIsGuestUser] = useState(false);
  console.log(isLoggedIn, "logged in Main");
  console.log(isGuestUser, "guest user main");

  console.log(isLoggedIn, "logged in Main");

  const handleLogin = (isLoggedIn) => {
    setIsLoggedIn(isLoggedIn);
  };

  return (
    <div id="main">
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />

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
        </Routes>
        <Routes>

          <Route
            path="/vehicleList"
            element={
              <AllVehicles isGuestUser={isGuestUser} isLoggedIn={isLoggedIn} />
            }
          />
          <Route path="/vehicleList" element={<AllVehicles />} />

        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default Main;
