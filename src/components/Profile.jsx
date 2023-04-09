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
                  <h4>
                    <label userId="">User ID:</label>
                  </h4>
                  <h5>
                    <div> {user.id}</div>
                  </h5>
                </div>
                <div className="profileName">
                  <h4>
                    <label userName="">User Name:</label>
                  </h4>
                  <h5>
                    <div>{user.username}</div>
                  </h5>
                </div>
                <div className="profileEmail">
                  <h4>
                    <label userEmail="">User Email:</label>
                  </h4>
                  <h5>
                    <div>{user.email}</div>
                  </h5>
                </div>
                <div className="profileLocation">
                  <h4>
                    <label userLocation="">User Location:</label>
                  </h4>
                  <h5>
                    <div>{user.location}</div>
                  </h5>
                </div>
                <div className="profileActive">
                  <h4>
                    <label userActive="">Active :</label>
                  </h4>
                  <h5>
                    <div>{`${active}`}</div>
                  </h5>
                </div>
                <br />
                <button className="editProfileBtn" onClick={handleEditClick}>
                  Edit Profile
                </button>
              </div>
              <div className="profilePageCartDiv">
                <Link className="viewCartLink" to="/cart">
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
