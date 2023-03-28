import React from "react";

function Profile() {
  return (
    <div className="profile">
      <div className="profileDiv">
        <div className="profilePic"></div>
        <div className="profileDetails">
          <div className="profileID">ID</div>
          <div className="profileName">Name</div>
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
  );
}

export default Profile;
