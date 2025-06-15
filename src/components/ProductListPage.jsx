import React, { useState, useEffect } from 'react';
import ProductDetailPage from './ProductDetailPage'; // Import ProductDetailPage if needed
import { useNavigate } from 'react-router-dom'; // For navigation between pages
import "../styles/ProductList.css";
import ProductCard from './ProductCard';
import { useParams } from "react-router-dom";

const ProductListPage = () => {
  const { type } = useParams();
  // State variables to handle products, loading, and pagination
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const productsPerPage = 20; // Number of products per page
  const navigate = useNavigate(); // To handle navigation to product detail pages

  // Fetch products based on current page
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Show loading indicator while fetching
      try {
        const response = await fetch(`https://wmk-backend.onrender.com/api/user_product/products/list/${type}?page=${currentPage}&limit=${productsPerPage}`);
        const data = await response.json();
        setProducts(data.products);
        setTotalPages(data.totalPages); // Total pages from the API
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage, type]); // Trigger when the page changes

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  // Render loading, error, or product list
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="product-list-page">
      <div className="product-list-header">
        <h1>Shop {type}</h1>
        {/* Pagination controls */}
        <div className="pagination">
          <button 
            onClick={() => handlePageChange(currentPage - 1)} 
            disabled={currentPage === 1}
          >
            Zurück
          </button>
  
          <span>{currentPage} von {totalPages}</span>
  
          <button 
            onClick={() => handlePageChange(currentPage + 1)} 
            disabled={currentPage === totalPages}
          >
            Weiter
          </button>
        </div>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard 
            key={product._id}
            image={product.productImages?.[0] || "https://via.placeholder.com/300x200"} 
            title={product.title} 
            price= {product?.pricing?.comparePrice ? `${product?.pricing?.comparePrice}` : `${product?.pricing?.price}`}
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
};

export default ProductListPage;
