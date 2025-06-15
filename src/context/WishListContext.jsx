import React, { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from localStorage when the component mounts
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist"));
    if (storedWishlist) {
      setWishlist(storedWishlist);
    }
  }, []);

  const saveWishlistToLocalStorage = (newWishlist) => {
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
  };

  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.find((item) => item.id === product.id)) {
        return prevWishlist;
      }
      const updatedWishlist = [...prevWishlist, product];
      saveWishlistToLocalStorage(updatedWishlist);
      return updatedWishlist;
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.filter((item) => item.id !== productId);
      saveWishlistToLocalStorage(updatedWishlist);
      return updatedWishlist;
    });
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
