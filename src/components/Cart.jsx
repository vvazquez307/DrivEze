import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getCart } from "../api-adapter/login&register";
import { getCarById } from "../api-adapter/index";

function Cart() {
  const [data, setData] = useState([]);
  const [carDataArray, setCarDataArray] = useState([]);
  const token = localStorage.getItem("token");

  async function getCartData() {
    const cartData = await getCart(token);
    setData(cartData);
  }

  async function getCarData() {
    let newArray = [];
    if (data.length) {
      newArray = data.map((e) => {
        console.log(e);
        return getCarById(e.carId);
      });
      const carDataPromises = await Promise.all(newArray);
      setCarDataArray(carDataPromises);
    }
  }

  useEffect(() => {
    getCartData();
  }, []);

  useEffect(() => {
    getCarData();
  }, [data]);
  console.log(data);
  console.log(carDataArray);
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
              {carDataArray.length
                ? carDataArray.map((car, idx) => {
                    console.log(car);
                    return (
                      <div key={`car idx: ${idx}`}>
                        {/* {getCarData(car.carId)} */}
                        <div>
                          <p>{car.name}</p>
                          <p>{car.description}</p>
                          <p>{car.daily_rate}</p>
                          <p>{car.hubLocation}</p>
                        </div>
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
