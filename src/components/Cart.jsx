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
    // let newArray = [];
    if (data.length) {
      // newArray = data.map((e) => {
      //   return getCarById(e.carId);
      // });
      const carDataPromises = [];
      for (let i = 0; i < data.length; i++) {
        carDataPromises.push(await getCarById(data[i].carId));
      }
      // const carDataPromises = await Promise.all(newArray);
      setCarDataArray(carDataPromises);
    }
  }

  async function deleteCar(carId) {
    const deletedCar = await removeCarFromCart(token, carId);
    console.log(deletedCar, " ///deletedCar///");
    const cartCopy = [...carDataArray];
    console.log(cartCopy, " ///cartCopy///");
    const filteredCart = cartCopy.filter((car) => {
      if (car.id !== carId) {
        return true;
      } else {
        return false;
      }
    });
    console.log(filteredCart, " ///filteredCart///");
    setCarDataArray(filteredCart);
  }

  function getTotalCost() {
    if (carDataArray.length) {
      let sum = 0;
      carDataArray.forEach((e) => {
        sum += e.daily_rate;
      });
      setTotalSum(sum);
    } else {
      setTotalSum(0);
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
      <div className="cartPage">
        <div className="allVehiclesPage">
          <div className="topCartDiv">
            <div className="cartTitle">
              <div className="cartLinkDiv">
                <h2 className="cartText">Cart</h2>
                <Link to="/vehicleList" id="cartLink">
                  Click here to shop for more vehicles.
                </Link>
              </div>
              <img
                className="checkoutCartImg"
                src="./images/Cart.png"
                alt="cart"
              />
            </div>
            <div className="cartCheckout">
              <h4 className="cartText">Total: ${totalSum}</h4>
              <Link to="/checkout" state={{ totalSum: totalSum }}>
                <button class="button-92" role="button">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
          <div className="allVehiclesBottomDiv">
            {carDataArray.length ? (
              carDataArray.map((car, idx) => {
                return (
                  <div className="vehicleListing" key={`car idx: ${idx}`}>
                    <div className="vehicleImgBox">
                      <img
                        className="vehicleImg"
                        src={car.image}
                        alt={car.name}
                      />
                      <div className="vehicleName">
                        <h3>{car.name}</h3>
                      </div>
                    </div>
                    <div className="vehicleDescription">
                      <h3 className="vehicleDetails">Vehicle information:</h3>
                      <h4 className="vehicleDetails">{car.description}</h4>
                      <br />
                      <h3 className="vehicleDetails">Daily rate:</h3>
                      <h4 className="vehicleDetails">${car.daily_rate}</h4>
                      <br />
                      <h3 className="vehicleDetails">Hub location:</h3>
                      <h4 className="vehicleDetails">{car.hubLocation}</h4>
                      <br />
                    </div>
                    <button onClick={() => deleteCar(car.id)} id="removeBtn">
                      Remove
                    </button>
                  </div>
                );
              })
            ) : (
              <Link to="/vehicleList">
                <h3 id="cartAddBtn">Add A Vehicle To Cart!</h3>
              </Link>
            )}
          </div>
          <Link id="back-button" to="/">
            {" "}
            Go Back{" "}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Cart;
