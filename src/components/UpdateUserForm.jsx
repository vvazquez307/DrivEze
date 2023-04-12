import React, { useState } from "react";
import { updateUser } from "../api-adapter/profile";

const UpdateUserForm = (props) => {
  const [username, setUsername] = useState(props.user.username);

  const [email, setEmail] = useState(props.user.email);
  const [password, setPassword] = useState(
    localStorage.getItem("password") || ""
  );
  const [active, setActive] = useState(props.user.active);
  const [submitMessage, setSubmitMessage] = useState("");
  const token = localStorage.getItem("token");
  console.log(password, "password log");

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
            <div className="profileName">
              <h4 className="username">
                <label>Username:</label>
              </h4>
              <h5>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </h5>
            </div>
            <div className="profilePassword">
              <h4 className="password">
                <label>Password:</label>
              </h4>
              <h5>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </h5>
            </div>
            <div className="profileEmail">
              <h4 className="email">
                <label>Email:</label>
              </h4>
              <h5>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </h5>
            </div>

            <div className="profileActive">
              <h4 className="active">
                <label>Active:</label>
              </h4>

              <input
                type="checkbox"
                id="active"
                className="form-control"
                checked={active}
                onChange={(event) => setActive(event.target.checked)}
              />
            </div>

            {submitMessage && <p>{submitMessage}</p>}
            <div className="profilePageCartDiv">
              <button className="submitEditBtn" type="submit">
                Submit
              </button>
              <br />
              <button className="cancelEditBtn" onClick={handleCancelClick}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserForm;
