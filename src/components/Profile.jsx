import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../api-adapter/profile";

function Profile() {
  const [user, setUser] = useState("");
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

  return (
    <>
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
          </div>
        </div>
      </div>
      <Link to="/"> Go Back </Link>
    </>
  );
}

export default Profile;
