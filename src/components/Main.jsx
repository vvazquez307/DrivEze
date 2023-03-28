import React from "react";
import { Navbar, Home } from "./";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Profile, Footer } from "./index";
import AllVehicles from "./AllVehicles";


//this is to start a branch
const Main = () => {
  return (
    <div id="main">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Routes>
          <Route path="/vehicleList" element={<AllVehicles />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};


export default Main;
