import React from "react";

function Profile() {
  return (
    <div className="profile">
      <div className="profileDiv">
        <div className="profilePic">
          <p>Pic</p>
        </div>
        <div className="profileDetails">
          <p>details</p>
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
