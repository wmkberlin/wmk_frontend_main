import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/main.css';
import ProductCard from "./ProductCard";
import InfoBottomBar from "./infoBottomBar";
import FillersHomePag2 from "./FillersHomePage2";
import NewsletterSubscription from "./NewsletterSubscription";
import Bestproducts from "./BestProducts";

function NewHitsPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  // Fetch Category Details and Products
  useEffect(() => {
    const fetchBestProducts = async () => {
      try {
        const response = await fetch("https://wmk-backend.onrender.com/api/user_product/products/section?productPlace=new");
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
  // Handle Scroll to Load More Products

  if (loading) return <div className="loading-text">Loading...</div>;
  if (error) return <div className="error-text">{error}</div>;

  return (
    <div className="bestproduct-container">
      <div className="product-grid">
        {/* First box: Sales Text */}
        <div className="sales-text-box">
          <h1 className="bestproduct-title">Neuheiten</h1>
          <p className="bestproduct-subtitle">Täglich grüßt das Möbeltier</p>
        </div>

        {/* Display Products */}
        {data.map((product) => (
          <ProductCard 
            key={product._id}
            image={product.productImages?.[0] || "https://via.placeholder.com/300x200"} 
            title={product.title} 
            price={product?.pricing?.comparePrice ? `${product?.pricing?.comparePrice}` : `${product?.pricing?.price}`}
            discount={product?.pricing?.price ? `${product?.pricing?.price}` : "Kein Rabatt"} 
            id={product?.productId || product._id}
            chargeTax={product.chargeTax}
            stockAmt = {product.stockAmt}
            shopType = {product.shopType}
            isAssemblyService = {product.assemblyService}
          />
        ))}
      </div>
    </div>
  );
}

export default NewHitsPage;
