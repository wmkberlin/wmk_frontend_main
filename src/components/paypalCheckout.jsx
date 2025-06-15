import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const CheckoutFormPaypal = ({amount, orderData, products, country}) => {
  const [paid, setPaid] = useState(false);
  const [error, setError] = useState(null);

  const handleApprove = (orderID) => {
    console.log("Payment successful! Order ID:", orderID);
    setPaid(true);
  };

  const placeOrder = () => {

  }

  const handleError = (err) => {
    console.error("Payment error:", err);
    setError("Payment failed. Please try again.");
  };

  return (
    <PayPalScriptProvider options={{ "client-id": "AfU5bPqddaKTZbXQhmG4OHZk4E1rBHn4r-zqwsZBexxAKEiVEbxodKIfoS-T7PU6JM4DBs9TzcvEyaWN", currency: "EUR" }}>
      <div>
        {paid ? (
          <h2>Payment Successful! 🎉</h2>
        ) : (
          <>
            <h2>Complete Your Payment</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: { value: amount }, // Replace with dynamic total
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                console.log(details);
                return actions.order.capture().then((details) => {
                  handleApprove(details.id);
                });
              }}
              onError={handleError}
            />
          </>
        )}
      </div>
    </PayPalScriptProvider>
  );
};

export default CheckoutFormPaypal;
