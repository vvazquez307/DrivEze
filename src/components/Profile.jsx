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

  return (
    <>
      {editing ? (
        <>
          <UpdateUserForm
            user={user}
            editing={editing}
            handleCancelClick={handleCancelClick}
          />
        </>
      ) : (
        <>
          <div className="profile">
            <div className="profileDiv">
              <div className="profilePicDiv">
                <img
                  className="profilePic"
                  src="/images/profilePic.png"
                  alt="profilePic"
                />
              </div>
              <div className="profileDetails">
                <div className="profileID">
                  <label userId="">User ID:</label>
                  <div> {user.id}</div>
                </div>
                <div className="profileName">
                  <label userName="">User Name:</label>
                  <div>{user.username}</div>
                </div>
                <div className="profileEmail">
                  <label userEmail="">User Email:</label>
                  <div>{user.email}</div>
                </div>
                <div className="profileLocation">
                  <label userLocation="">User Location:</label>
                  <div>{user.location}</div>
                </div>
                <div className="profileActive">
                  <label userActive="">Active :</label>
                  <div>{`${active}`}</div>
                </div>
                <br />
                <button onClick={handleEditClick}>Edit Profile</button>
              </div>
              <div className="profilePageCartDiv">
                <Link to="/cart">
                  <h3>View cart</h3>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Profile;
