import React, { useEffect, useRef } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { Link } from "react-router-dom";
import "../styles/CartSidebar.css";

const CartSidebar = ({ isOpen, toggleSidebar }) => {
  const {
    cartDetails,
    removeItem,
    incrementItem,
    decrementItem,
  } = useShoppingCart();

  const cartItems = Object.values(cartDetails || {});
  const sidebarRef = useRef(null);

  // Close sidebar when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        toggleSidebar();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleSidebar]);

  const rentalTranslations = {
    "1day": "1 Tag",
    "1week": "1 Woche",
    "1month": "1 Monat",
    "1year": "1 Jahr",
    "2years": "2 Jahre"
  };
  
  const getTranslatedRentalOption = (key) => rentalTranslations[key] || key;

  // Calculate total price manually
  const calculatedTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`} ref={sidebarRef}>
      <div className="cart-header">
        <h2>Ihr Warenkorb</h2>
        <button className="close-btn" onClick={toggleSidebar}>
          ×
        </button>
      </div>
  
      {/* Cart Items */}
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-img" />
              <div className="cart-item-details">
                <h4>{item.title}</h4>
                <p>{parseFloat(item.price).toFixed(2)}€</p>
                {/* Display rent label if the item is rented */}
                {item.isRent && (
                  <div className="rent-label">
                    <span>Miete: {getTranslatedRentalOption(item.rentOption)}</span>
                    <span>{(item.price * item.quantity).toFixed(2)}€</span>
                  </div>
                )}
                {item.shopType == "boatwood" &&
                <span>Inkl. 19% MwSt.</span>
                }
               <div className="quantity-controls">
                <button onClick={() => item.quantity > 1 && decrementItem(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => item.quantity < item.stockAmt && incrementItem(item.id)}
                  disabled={item.quantity >= item.stockAmt} // Disable button if stock limit reached
                >
                  +
                </button>
              </div>

              </div>
              <button className="remove-btn" onClick={() => removeItem(item.id)}>
                Entfernen
              </button>
            </div>
          ))
        ) : (
          <p className="empty-cart">Ihr Warenkorb ist leer!</p>
        )}
      </div>
  
      {/* Footer: Total Price and Checkout Button */}
      <div className="cart-footer">
        <h3>Gesamt: {calculatedTotal.toFixed(2)}€</h3>
        <Link to="/checkout">
          <button className="checkout-btn" onClick={toggleSidebar}>Zur Kasse gehen</button>
        </Link>
      </div>
    </div>
  );
};

export default CartSidebar;