import React from "react";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
      <div className="profile">
        <div className="profileCartDiv">
          <div className="profileDetails">
            <label userName="">User Name:</label>
            <div className="profileName">John Doe</div>
            <label userLocation="">Shipping Address:</label>
            <div className="profileLocation">
              1234 Generic Address, State USA 12345
            </div>
            <Link to="/profile">
              <button id="button">Edit Address</button>
            </Link>
          </div>
        </div>
        <div className="cartDiv">
          <div className="topCartDiv">
            <div className="cartTitle">
              <p>Cart Title</p>
            </div>
            <div className="cartCheckout">
              <Link>
                <button id="addToCartButton">Checkout</button>
              </Link>
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

export default Cart;
