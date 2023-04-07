import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <>
      <div className="profile">
        <div className="profileDiv">
          <div className="profilePic"></div>
          <div className="profileDetails">
            <label userId="">User ID:</label>
            <div className="profileID">ID</div>
            <label userName="">User Name:</label>
            <div className="profileName">Name</div>
            <label userLocation="">User Location:</label>
            <div className="profileLocation">Location</div>
          </div>
      <Link to="/" id="back-button"> Go Back </Link>
        </div>
      </div>
    </>
  );
}

export default Profile;
