import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { guestUser, getCart } from "../api-adapter/login&register";

function Guest(props) {
  const [guestName, setGuestName] = useState("");
  const navigate = useNavigate();
  const isGuestUser = props.isGuestUser;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!guestName) {
      alert("Enter a guest name");
      return;
    }
    const result = await guestUser(guestName);
    if (result.token) {
      alert(result.message);
      const cart = await getCart(result.token);
      setGuestName(guestName);
      props.setIsGuestUser(true);
      props.setIsLoggedIn(true);
      localStorage.setItem("token", result.token);
      localStorage.setItem("isGuestUser", true);
      localStorage.setItem("guestName", guestName);
      localStorage.setItem(`guest cart ${guestName}`, JSON.stringify(cart));
      navigate("/vehicleList");
    } else {
      alert("Error: " + result);
    }
  };
  return (
    <form onSubmit={handleSubmit} id="login-form">
      <div id="text-field">
        <label className="username"></label>
        <input
          type="text"
          name="user"
          value={guestName}
          onChange={(event) => setGuestName(event.target.value)}
          id="text-box"
          placeholder="Enter a Temporary Username"
        />
      </div>
      <button type="submit" id="submitBtn">
        Log in
      </button>
      <div>
        <Link to="/register" id="link">
          New user? Register Here.
        </Link>
      </div>
    </form>
  );
}

export default Guest;
