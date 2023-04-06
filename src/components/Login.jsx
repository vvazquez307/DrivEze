import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, getCart } from "../api-adapter/login&register";

const Login = (props) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [guest, setGuest] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!password || !user) {
      alert("Username and password required");
      return;
    }
    const result = await loginUser(user, password);
    console.log(result, "RESULT LOG");
    if (result.token) {
      alert(result.message);
      const cart = await getCart(result.userId);
      setLoggedIn(true);
      props.handleLogin(true);
      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(user));
      console.log(cart, "cart log");
      localStorage.setItem(`cart login ${user}`, JSON.stringify(cart));
      navigate("/");
    } else {
      alert("Error: " + result);
    }
  };

  return (
    <form onSubmit={handleSubmit} id="login-form">
      <div>
        <label className="username">Username:</label>
        <input
          type="text"
          name="user"
          value={user}
          onChange={(event) => setUser(event.target.value)}
        />
      </div>
      <div>
        <label className="password">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit" id="button">
        Log in
      </button>
      <div>
        <Link to="/register" id="link">
          New user? Click here!
        </Link>
      </div>
    </form>
  );
};

export default Login;
