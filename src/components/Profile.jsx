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
        </div>
        <div className="cartDiv">
          <div className="topCartDiv">
            <div className="cartTitle">
              <p>Cart Title</p>
            </div>
            <div className="cartCheckout">
              <p>Cart Checkout</p>
            </div>
          </div>
          <div className="bottomCartDiv">
            <div className="cartContents">
              <p>Cart contents</p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/"> Go Back </Link>
    </>
  );
}

export default Profile;
