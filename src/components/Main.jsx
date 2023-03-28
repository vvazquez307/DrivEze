import React from "react";
import { Navbar } from "./";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Profile, Footer } from "./index";

const Main = () => {
  return (
    <div id="main">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default Main;
