import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "use-shopping-cart";
import { useWishlist } from "../context/WishListContext";
import { toast } from "react-toastify";
import RentPopup from "./rentPopup";
import { Heart, Clock, ShoppingCart } from "lucide-react"; // Import icons
import "../styles/ProductCard.css";

function ProductCard({
  image,
  title,
  price,
  discount,
  id,
  currency,
  chargeTax,
  isDiscountApplicable,
  stockAmt,
  shopType,
  isAssemblyService
}) {
  const { addItem, cartDetails } = useShoppingCart();
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [showRentPopup, setShowRentPopup] = useState(false);

  // Track the quantity in cart
  const cartItem = cartDetails[id];
  const itemQuantity = cartItem ? cartItem.quantity : 0;

  // Calculate discounted price if applicable
  const discountPrice = isDiscountApplicable ? discount : price;

  // Calculate discount percentage
  useEffect(() => {
    const discountPercentage = ((price - discountPrice) / price) * 100;
    setDiscountPercentage(Math.round(discountPercentage * 100) / 100);
  }, [price, discountPrice]);

  // Function to handle adding product to the cart
  const handleAddToCart = async (rentFlag = false, rentOption = null) => {
    if (stockAmt <= 0) {
      toast.error("Product is out of stock!", { position: "top-center" });
      return;
    }

    // Check if the product is already in the cart
    const existingCartItem = cartDetails[id];
    const existingQuantity = existingCartItem ? existingCartItem.quantity : 0;

    // Calculate the total quantity after adding the new item
    const newQuantity = existingQuantity + 1; // Assuming you're adding 1 item at a time

    // Check if the new quantity exceeds the available stock
    if (newQuantity > stockAmt) {
      toast.error(`Only ${stockAmt} items available in stock!`, {
        position: "top-center",
      });
      return;
    }

    // Calculate price based on rentFlag and rentOption
    let finalPrice = discountPrice; // Default to discountPrice

    if (rentFlag && rentOption) {
      switch (rentOption) {
        case "1day":
          finalPrice = discountPrice * 0.1;
          break;
        case "1week":
          finalPrice = discountPrice * 0.2;
          break;
        case "1month":
          finalPrice = discountPrice * 0.3;
          break;
        case "1year":
          finalPrice = discountPrice * 0.4;
          break;
        case "2years":
          finalPrice = discountPrice * 0.5;
          break;
        default:
          finalPrice = discountPrice;
          break;
      }
    }

    // if(shopType == "vintage") finalPrice = Number(finalPrice) + Number(finalPrice) * 0.19;
    
  
    // Prepare the cart item
    const cartItem = {
      id,
      title: title,
      price: isAssemblyService ? finalPrice+35 : finalPrice,
      currency: currency,
      image: image,
      isRent: rentFlag,
      rentOption: rentFlag ? rentOption : null,
      stockAmt: stockAmt,
      shopType: shopType,
    };

    // Add the item to the cart
    addItem(cartItem);
    toast.success("Product added to cart!", { position: "top-center" });
    setTimeout(() => {
      toggleCart();
    }, 500);
  };

  // Function to handle Wishlist
  const handleWishlist = async () => {
    if (stockAmt < 1) {
      toast.error("This product is sold out!", {
        position: "top-center",
        pauseOnFocusLoss: false,
      });
      return;
    }

    if (isInWishlist(id)) {
      removeFromWishlist(id);
    } else {
      const wishlistData = {
        productId: id,
        title,
        price: discountPrice,
        image,
      };

      addToWishlist(wishlistData);
      toast.success("Added to wishlist! Buy later", {
        position: "top-center",
        pauseOnFocusLoss: false,
      });
    }
  };

  // Handle Rent Button Click
  const handleRentClick = () => {
    if (stockAmt < 1) {
      toast.error("This product is sold out!", {
        position: "top-center",
        pauseOnFocusLoss: false,
      });
      return;
    }
    setShowRentPopup(true);
  };

  // Handle Rent Option Selection
  const handleRentOptionSelect = (option) => {
    handleAddToCart(true, option);
  };

  return (
    <>
      <div
        className={`product-card ${stockAmt < 1 ? "sold-out" : ""}`}
        title={title}
      >
        <Link to={`/product/${id}`}>
          <img
            src={
              image || "https://placehold.co/400?text=Vorschau+nicht+verfügbar"
            }
            alt={title}
            className="product-image"
            onError={(e) => {
              e.target.src =
                "https://placehold.co/400?text=Vorschau+nicht+verfügbar";
              e.target.classList.add("image-error");
            }}
            loading="lazy"  // Add lazy loading
                    decoding="async" // Async decoding
                    width="800"     // Set intrinsic width
                    height="600"    // Set intrinsic height
          />
        </Link>
        {stockAmt < 1 && <div className="sold-out-overlay">Sold Out</div>}
        <div className="button-group">
          <div className="btn-group-sub">
            <button
              onClick={() => handleAddToCart(false)}
              className="icon-button wishlist-btn"
              aria-label="Add to cart"
            >
              <ShoppingCart stroke="white" />
            </button>
            <button
              onClick={handleRentClick}
              className="icon-button wishlist-btn"
              aria-label="Rent"
            >
              <Clock stroke="white" />
            </button>
            <button
              onClick={handleWishlist}
              className={`icon-button wishlist-btn ${
                isInWishlist(id) ? "wishlist-active" : ""
              }`}
              aria-label="Add to wishlist"
            >
              <Heart
                fill={isInWishlist(id) ? "red" : "none"}
                stroke={isInWishlist(id) ? "red" : "white"}
              />
            </button>
          </div>
          {isDiscountApplicable ? (
            <div className="btnGroup2 price-btn-group">
              <span className="discounted-price">
                {discountPrice && !isNaN(discountPrice)
                  ? Number(discountPrice).toFixed(2)
                  : "0.00"}
                €
              </span>
              <span
                className="original-price"
                style={{ textDecoration: "line-through" }}
              >
                {price}€
              </span>
            </div>
          ) : (
            <div className="price-btn-group">
              <span>{price}€</span>
            </div>
          )}
        </div>
        {isDiscountApplicable && stockAmt > 0 && (
          <div className="discountDiv">
            SPARE <br/> {(price - discountPrice).toFixed(2)}€
          </div>
        )}{" "}
      </div>

      {/* Rent Popup - Placed outside the product card */}
      {showRentPopup && (
        <RentPopup
          price={discountPrice}
          onConfirm={handleRentOptionSelect}
          onClose={() => setShowRentPopup(false)}
          productType={shopType}
        />
      )}
    </>
  );
}

export default ProductCard;
