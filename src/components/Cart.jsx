import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCart } from "../api-adapter/login&register";
import { getCarById, removeCarFromCart } from "../api-adapter/index";

function Cart() {
  const [data, setData] = useState([]);
  const [carDataArray, setCarDataArray] = useState([]);
  const [totalSum, setTotalSum] = useState(0);
  const token = localStorage.getItem("token");

  // const totalCost = total;
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

  async function deleteCar(carId) {
    const deletedCar = await removeCarFromCart(token, carId);
    if (deletedCar) {
      window.location.reload();
    }
  }

  function getTotalCost() {
    if (carDataArray.length) {
      let sum = 0;
      carDataArray.forEach((e) => {
        console.log(e);
        sum += e.daily_rate;
      });
      setTotalSum(sum);
    }
  }

  useEffect(() => {
    getCartData();
  }, []);

  useEffect(() => {
    getCarData();
  }, [data]);

  useEffect(() => {
    getTotalCost();
  }, [carDataArray]);

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
              <h4>total: ${totalSum}</h4>
              <Link to="/checkout" state={{ totalSum: totalSum }}>
                <button id="addToCartButton">Checkout</button>
              </Link>
            </div>
          </div>
          <div className="bottomCartDiv">
            <div className="cartContents">
              {carDataArray.length ? (
                carDataArray.map((car, idx) => {
                  console.log(car);
                  return (
                    <div key={`car idx: ${idx}`}>
                      <div>
                        {/* <img src={car.image} alt="car image" /> */}
                        <p>Vehicle: {car.name}</p>
                        <p>daily rate: ${car.daily_rate}</p>
                      </div>
                      <button onClick={() => deleteCar(car.id)}>remove</button>
                    </div>
                  );
                })
              ) : (
                <Link to="/vehicleList">
                  <h3>Add A Vehicle To Cart!</h3>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <Link to="/"> Go Back </Link>
    </>
  );
}

export default Cart;
