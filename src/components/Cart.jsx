import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getCart } from "../api-adapter/login&register";
import { getCarById } from "../api-adapter/index";

function Cart() {
  const [data, setData] = useState([]);
  const [carData, setCarData] = useState({});
  const token = localStorage.getItem("token");

  async function getCartData() {
    const cartData = await getCart(token);
    setData(cartData);
  }

  async function getCarData(id) {
    const carData = await getCarById(id);
    console.log(carData);
    setCarData(carData);
  }

  useEffect(() => {
    getCartData();
    getCarData(1);
  }, []);
  console.log(data);

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
              <p>Cart!</p>
            </div>
            <div className="cartCheckout">
              <Link>
                <button id="addToCartButton">Checkout</button>
              </Link>
            </div>
          </div>
          <div className="bottomCartDiv">
            <div className="cartContents">
              {data.length
                ? data.map((car, idx) => {
                    return (
                      <div key={`car idx: ${idx}`}>
                        <p>CarId:{car.carId}</p>
                        <p>Daily Rate: {car.price}</p>
                        <p>quantity: {car.quantity} </p>
                        <button>remove</button>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
      <Link to="/"> Go Back </Link>
    </>
  );
}

export default Cart;
