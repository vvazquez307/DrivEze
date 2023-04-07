import React, { useState } from "react";
import { updateUser } from "../api-adapter/profile";

const UpdateUserForm = (props) => {
  const [username, setUsername] = useState(props.user.username);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(props.user.email);
  const [location, setLocation] = useState(props.user.location);
  const [active, setActive] = useState(props.user.active);
  const [submitMessage, setSubmitMessage] = useState("");
  const token = localStorage.getItem("token");

  const handleSubmit = (event) => {
    event.preventDefault();
    const fields = {};
    if (username !== props.user.username) {
      fields.username = username;
    }
    if (password !== "") {
      fields.password = password;
    }
    if (email !== props.user.email) {
      fields.email = email;
    }
    if (location !== props.user.location) {
      fields.location = location;
    }
    if (active !== props.user.active) {
      fields.active = active;
    }
    setSubmitMessage("User updated successfully!");
    updateUser(props.user.id, fields, token);
    window.location.reload();
  };

  const handleCancelClick = () => {
    props.editing ? props.handleCancelClick() : null;
  };

  return (
    <div className="profile">
      <div className="profileDiv">
        <div className="profilePicDiv">
          <img
            className="profilePic"
            src="/images/profilePic.png"
            alt="profile pic"
          />
        </div>
        <div className="profileDetails">
          <form onSubmit={handleSubmit} className="profileDetailsForm">
            <div className="form-group">
              <label className="username">Username:</label>
              <input
                type="text"
                id="username"
                className="form-control"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="password">Password:</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="email">Email:</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="location">Location:</label>
              <input
                type="text"
                id="location"
                className="form-control"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="active">Active:</label>
              <input
                type="checkbox"
                id="active"
                className="form-control"
                checked={active}
                onChange={(event) => setActive(event.target.checked)}
              />
            </div>
            <button type="submit">Submit and exit</button>
            <button onClick={handleCancelClick}>Cancel</button>
            {submitMessage && <p>{submitMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserForm;
