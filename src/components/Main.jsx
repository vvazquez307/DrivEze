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
import Checkout from "./Checkout";
import { getAllHubs } from "../api-adapter/hub";
import AdminLoginPage from "./AdminLogin";
import AdminPage from "./Admin";
import { authAdmin } from "../api-adapter/admin";
import AdminNavbar from "./AdminNavbar";
import AdminCar from "./AdminCar";
import AdminHubs from "./AdminHubs";
import AdminInventory from "./AdminInventory";
import AdminTags from "./AdminTags";
import AdminEditPage from "./AdminAddCar";
import AdminAddCarPage from "./AdminAddCar";

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
  
  const [isAdmin, setIsAdmin] = useState(false);

  const checkAdminStatus = async ()=>
  {
    setIsAdmin(await authAdmin(localStorage.getItem("token")));
  }
  checkAdminStatus();
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
  console.log(isAdmin);
  return (
    <BrowserRouter>
      <div id="main">
        {
          !isAdmin ? <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} /> : <AdminNavbar/> 
        }
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
          <Route path="/checkout" element={<Checkout />} />

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
          <Route
            path="/adminLogin"
            element={<AdminLoginPage></AdminLoginPage>}
          />
          <Route
            path="/admin"
            element={<AdminPage isAdmin={isAdmin}></AdminPage>}
          />
          <Route
            path="/adminCars"
            element={<AdminCar isAdmin={isAdmin}></AdminCar>}
          />
          <Route
            path="/adminHubs"
            element={<AdminHubs isAdmin={isAdmin}></AdminHubs>}
          />
          <Route
            path="/adminInventory"
            element={<AdminInventory isAdmin={isAdmin}></AdminInventory>}
          />
          <Route
            path="/adminTags"
            element={<AdminTags isAdmin={isAdmin}></AdminTags>}
          />
          <Route
            path="/adminLogin"
            element={<AdminLoginPage></AdminLoginPage>}
          />
          <Route
            path="/admin"
            element={<AdminPage isAdmin={isAdmin}></AdminPage>}
          />
          <Route
            path="/adminCars"
            element={<AdminCar locations={locations} isAdmin={isAdmin}></AdminCar>}
          />
          <Route
            path="/adminHubs"
            element={<AdminHubs isAdmin={isAdmin}></AdminHubs>}
          />
          <Route
            path="/adminInventory"
            element={<AdminInventory isAdmin={isAdmin}></AdminInventory>}
          />
          <Route
            path="/adminTags"
            element={<AdminTags isAdmin={isAdmin}></AdminTags>}
          />
          <Route
            path="/adminAddCar"
            element={<AdminAddCarPage isAdmin={isAdmin}></AdminAddCarPage>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Main;
