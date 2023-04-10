import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Checkout() {
  const [name, setName] = useState("");
  const [ccNumber, setCCNumber] = useState("");
  const [securityNumber, setSecurityNumber] = useState("");

  function checkName() {
    if (name.length < 6) {
      //   return <p>name is too short</p>;
      return false;
    } else {
      return true;
    }
  }
  function checkCCNumber() {
    if (ccNumber.length < 16) {
      //   return <p>Credit Cart Number is too short</p>;
      return false;
    } else {
      return true;
    }
  }
  function checkSecurityNumber() {
    if (securityNumber.length < 3 || securityNumber.length > 3) {
      //   return <p>Invalid Security Number</p>;
      return false;
    } else {
      return true;
    }
  }
  function checkAllInputs() {
    if (checkName() && checkCCNumber() && checkSecurityNumber()) {
      console.log("inputs are all true");
      return true;
    } else {
      return false;
    }
  }

  //   useEffect(() => {
  //     checkAllInputs();
  //   }, [name, ccNumber, securityNumber]);
  return (
    <div id="checkout-container">
      <h1>Payment Proccess</h1>
      <div id="credit-card-name-input">
        <label>Name: </label>
        <input
          type="text"
          name="credit-card-name"
          placeholder="John Wick"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div id="credit-card-#-input">
        <label>Credit card #: </label>
        <input
          type="number"
          name="credit-card-number"
          placeholder="1111-2222-3333-4444"
          value={ccNumber}
          onChange={(event) => setCCNumber(event.target.value)}
        />
      </div>
      <div id="credit-card-security-input">
        <label>security # </label>
        <input
          type="number"
          name="credit-card-security"
          placeholder="123"
          value={securityNumber}
          onChange={(event) => setSecurityNumber(event.target.value)}
        />
      </div>
      <h1>Order Summary</h1>
      <h3>Total: $100</h3>
      {checkAllInputs() ? (
        //will link you to a thank you for your purchase page
        <Link>
          <button id="order-button-green">Complete Order</button>
        </Link>
      ) : (
        <button id="order-button-red">Complete Order</button>
      )}
    </div>
  );
}

export default Checkout;
