import React, { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import "../styles/OrderReviewPage.css";
import { useLocation, useNavigate } from "react-router-dom";
import CheckoutFormPaypal from "./paypalCheckout";
import CheckoutForm from "./StripeCheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";

const OrderReview = () => {
  //   const { cartDetails } = useShoppingCart();
  //   const cartItems = Object.values(cartDetails || {});
  const { state } = useLocation();
  const {
    formData,
    phone,
    selectedCountry,
    shipmentCost,
    cartItems,
    calculatedTotalFinal,
    deliveryOption,
  } = state || {};
  const [paymentMethod, setPaymentMethod] = useState("stripe");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { cartDetails, formattedTotalPrice } = useShoppingCart();
  const cartItemDetails = Object.values(cartDetails || {}).map((item) => ({
    id: item.id,
    quantity: item.quantity,
  }));
  const totalTax = Object.values(cartDetails || {}).reduce((total, item) => {
    return total + item.price * item.quantity * (item.chargeTax / 100);
  }, 0);

  const totalPriceWithoutTax = Object.values(cartDetails || {}).reduce((total, item) => {
    return item.price;
  }, 0);

  const stripePromise = loadStripe(
    "pk_test_51Qqtm9GdaDVf6yVqmAeiPcpENFQ2ixjE4NmMkzd5difgFNJtTK3bj7Nd4nkwJeh6FQLkTrsQpQTRc23JhUgStluM004wdRF7ur"
  );

  const boatwoodItem = cartItems.find(item => item.shopType === "boatwood");
  const isBoatwoodPresent = !!boatwoodItem; // Convert to boolean

  const handlePayment = async () => {
    if (!cartItems.length || !deliveryOption) {
      alert("Please select a shipping method and add items to your cart.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://wmk-backend.onrender.com/api/payments/initiate-payment",
        {
          user_id: formData.email, // Replace with logged-in user ID
          shipping_method: {
            deliveryOption: deliveryOption,
            price: shipmentCost,
          },
          order_items: cartItems.map((item) => ({
            product_item_id: item.id,
            qty: item.quantity,
            price: item.price,
            tax: item.chargeTax || 0,
          })),
          phone: phone,
          payment_method: paymentMethod,
          shipmentAdress: formData,
          totalPrice: calculatedTotalFinal,
        }
      );

      if (response.data.paymentUrl) {
        window.location.href = response.data.paymentUrl; // Redirect to PayPal/Stripe
      } else {
        alert("Failed to initiate payment.");
      }
    } catch (error) {
      console.error("Payment Error:", error);
      alert(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="order-review-container">
      <div className="order-review-sub-container">
        <div>
          <h2 className="order-heading">Überprüfen Sie Ihre Bestellung</h2>

          <div className="order-section">
            <h3 className="section-title">Kontaktinformationen</h3>
            <p>
              <strong>E-Mail:</strong> {formData.email}
            </p>
            <p>
              <strong>Telefon:</strong> {phone}
            </p>
          </div>

          <div className="order-section">
            <h3 className="section-title">Lieferdetails</h3>
            <p>
              <strong>Lieferoption:</strong>{" "}
              {deliveryOption === "shipment"
                ? "Versand"
                : "Abholung im Geschäft"}
            </p>
            {deliveryOption === "shipment" && (
              <>
                <p>
                  <strong>Land:</strong> {selectedCountry}
                </p>
                <p>
                  <strong>Adresse:</strong> {formData.address},{" "}
                  {formData.apartment}
                </p>
                <p>
                  <strong>Stadt:</strong> {formData.city}, {formData.postalCode}
                </p>
              </>
            )}
          </div>
        </div>
        <div>
          <div className="order-section order-summary">
            <h3 className="section-title">Bestellübersicht</h3>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.id} className="cart-item-box">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="cart-item-img"
                  />
                  <div className="cart-item-details">
                    <p>{item.title}</p>
                    <span>{item.price}€</span>
                    <p>Menge: {item.quantity}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="empty-cart">Ihr Warenkorb ist leer!</p>
            )}
          </div>
        </div>
      </div>
      <div>
        <div className="cart-total-box">
          <p>
            Zwischensumme:{" "}
            {totalPriceWithoutTax}€
          </p>
          <p>Versandkosten: {shipmentCost}€</p>
          {isBoatwoodPresent &&  <span>Inkl. 19% MwSt</span>}
          <hr />
          <strong>Gesamt: {calculatedTotalFinal.toFixed(2)}€</strong>
        </div>
        <div className="payment-container">
  <h3 className="payment-title">Zahlungsmethode</h3>
  <div className="payment-options">
    <label className="payment-option">
      <input
        type="radio"
        value="stripe"
        checked={paymentMethod === "stripe"}
        onChange={(e) => setPaymentMethod(e.target.value)}
      />
      <span className="payment-method-with-icon">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" 
          alt="Visa" 
          className="payment-icon"
        />
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" 
          alt="Mastercard" 
          className="payment-icon"
        />
        <img 
          src="../../public/klarnaicon.png" 
          alt="Klarna" 
          className="payment-icon klarnaIcon"
        />
      </span>
    </label>
    <label className="payment-option">
  <input
    type="radio"
    value="bank_transfer"
    checked={paymentMethod === "bank_transfer"}
    onChange={() => setPaymentMethod("bank_transfer")}
  />
  <span>🏦 Banküberweisung (Manual)</span>
</label>
    
    <label className="payment-option">
      <input
        type="radio"
        value="paypal"
        checked={paymentMethod === "paypal"}
        onChange={(e) => setPaymentMethod(e.target.value)}
      />
      <span className="payment-method-with-icon">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1280px-PayPal.svg.png" 
          alt="PayPal" 
          className="payment-icon"
        />
      </span>
    </label>
    
      {/* <label className="payment-option">
        <input
          type="radio"
          value="bankDeposit"
          checked={paymentMethod === "bankDeposit"}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <span className="payment-method-with-icon">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Deutsche_Bank_Logo.svg/1280px-Deutsche_Bank_Logo.svg.png" 
            alt="Bank Deposit" 
            className="payment-icon"
          />
          Bank Deposit
        </span>
      </label> */}
  </div>
</div>

{paymentMethod === "sepa_debit" && (
    <div>
      <label>IBAN</label>
      <IbanElement
        supportedCountries={['SEPA']}
        options={{ supportedCountries: ['SEPA'] }}
      />
    </div>
  )}


        <button
          className="review-button"
          onClick={handlePayment}
          disabled={loading}
        >
          {loading ? "Wird verarbeitet..." : "Zur Zahlung fortfahren"}
        </button>
      </div>
    </div>
  );
};

export default OrderReview;
