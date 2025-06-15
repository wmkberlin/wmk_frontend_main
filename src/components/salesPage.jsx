import React, { useState, useEffect } from "react";
import "../styles/bestSeller.css";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const SalesPageHome = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchBestProducts = async () => {
      try {
        // You can pass the limit as a query parameter
        const limit = 7; // Example: Get only 5 products
        const response = await fetch(`https://wmk-backend.onrender.com/api/user_product/products/section?productPlace=sales&limit=${limit}`);
        const result = await response.json();
  
        if (response.ok) {
          setData(result);
        } else {
          setError(result.message || "Failed to fetch data");
        }
      } catch (err) {
        setError("Something went wrong!");
      } finally {
        setLoading(false);
      }
    };
  
    fetchBestProducts();
  }, []);

  if (loading) return <div className="loading-text">Loading...</div>;
  if (error) return <div className="error-text">{error}</div>;
  const visibleProducts = data.slice(0, 7);
  return (
    <div className="bestproduct-container">
      <div className="product-grid">
        {/* First box: Sales Text */}
        <div className="sales-text-box">
        <Link to="sales">
          <h1 className="bestproduct-title">SALE</h1>
          <p className="bestproduct-subtitle">Günstiger wird´s nicht!</p>
        </Link>
        </div>

        {/* Display Products */}
        {visibleProducts.map((product) => (
          <ProductCard 
            key={product._id}
            image={product.productImages?.[0] || "https://via.placeholder.com/300x200"} 
            title={product.title} 
            price={product?.pricing?.comparePrice ? `${product?.pricing?.comparePrice}` : `${product?.pricing?.price}`}
            discount={product?.pricing?.price ? `${product?.pricing?.price}` : "Kein Rabatt"} 
            id={product?.productId || product._id}
            chargeTax={product.chargeTax}
            isDiscountApplicable={true}
            shopType = {product.shopType}
            stockAmt = {product.stockAmt}
            isAssemblyService = {product.assemblyService}
          />
        ))}
      </div>
    </div>
  );
};

export default SalesPageHome;
