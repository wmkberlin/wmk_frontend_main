// src/components/WishlistSidebar.jsx
import React from "react";
import "../styles/WishlistSidebar.css"; // Optional: Add styling
import { useWishlist } from "../context/WishListContext";

function WishlistSidebar({ isOpen, toggleSidebar }) {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className={`wishlist-sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <h2>Wunschliste</h2>
        <button onClick={toggleSidebar} className="close-btn">  
          ✕
        </button>
      </div>
      <div className="wishlist-items">
        {wishlist.length > 0 ? (
          wishlist.map((item) => (
            <div key={item.id} className="wishlist-item">
              <img src={item.image} alt={item.title} className="wishlist-item-image" />
              <div className="wishlist-item-details">
                <h3>{item.title}</h3>
                <p>{item.price}€</p>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="remove-wishlist-btn"
                >
                  Entfernen
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Ihre Wunschliste ist leer.</p>
        )}
      </div>
    </div>
  );
}

export default WishlistSidebar;
