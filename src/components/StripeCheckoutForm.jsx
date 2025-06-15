import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutFormStripe = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error(error);
    } else {
      console.log("Payment successful", paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay Now
      </button>
    </form>
  );
};

export default CheckoutFormStripe;
