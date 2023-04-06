import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUser, updateUser } from "../api-adapter/profile";
import UpdateUserForm from "./UpdateUserForm";

function Profile() {
  const [user, setUser] = useState("");
  const [editing, setEditing] = useState(false);
  let token = localStorage.getItem("token");
  let active = user.active;
  console.log(user, "USER LOG");

  if (!token) {
    return (
      <div>
        <h2>
          Please
          <Link to="/login"> login</Link>
        </h2>
      </div>
    );
  }

  useEffect(() => {
    async function fetchUser() {
      let user = await getUser(token);
      setUser(user);
    }
    fetchUser();
  }, []);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelClick = () => {
    setEditing(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const fields = {
      username: form.username.value,
      email: form.email.value,
      location: form.location.value,
    };
    try {
      await updateUser(user.id, fields, token);
      setEditing(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {editing ? (
        <UpdateUserForm user={user} />
      ) : (
        <div className="profile">
          <div className="profileDiv">
            <div className="profilePic"></div>
            <div className="profileDetails">
              <label userId="">User ID:</label>
              <div className="profileID">{user.id}</div>
              <label userName="">User Name:</label>
              <div className="profileName">{user.username}</div>
              <label userEmail="">User Email:</label>
              <div className="profileEmail">{user.email}</div>
              <label userLocation="">User Location:</label>
              <div className="profileLocation">{user.location}</div>
              <label userActive="">Active :</label>
              <div className="profileActive">{`${active}`}</div>
              <button onClick={handleEditClick}>Edit Profile</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
