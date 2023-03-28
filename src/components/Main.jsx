import React from "react";
import { Navbar } from "./";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Profile, Footer } from "./index";
import AllVehicles from "./AllVehicles";

const Main = () => {
  return (
    <div id="main">
      <Navbar />
      <BrowserRouter>
        <Routes>
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
