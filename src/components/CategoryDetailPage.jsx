import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/main.css';
import ProductCard from "./ProductCard";
import InfoBottomBar from "./infoBottomBar";
import FillersHomePag2 from "./FillersHomePage2";
import NewsletterSubscription from "./NewsletterSubscription";
import Bestproducts from "./BestProducts";
import StairImage from "./StairImage";

function CategoriesDetail() {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]); // Store unique products in an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    setProducts([]);  // Reset products to prevent stale data
    setPage(1);       // Reset pagination
    setHasMore(true); // Allow more products to load
  }, [id]);

  // Fetch Category Details and Products
  useEffect(() => {
    const fetchCategoryDetails = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`https://wmk-backend.onrender.com/api/user_product/categories/${id}/products?page=${page}`);
        const data = await response.json();

        if (response.ok) {
          if (page === 1) {
            setCategory(data.category); // Only set category on the first load
          }
          console.log(data.products);
          

          if (data.products?.length > 0) {
            setProducts((prevProducts) => {
              const newProducts = new Map(prevProducts.map(p => [p._id || p.productId, p])); // Fallback to _id
              data.products.forEach((product) => {
                const key = product._id || product.productId; // Ensure uniqueness
                newProducts.set(key, product);
              });
              return Array.from(newProducts.values());
            });
          } else {
            setHasMore(false);
          }
        } else {
          setError(data.message || "Failed to fetch data");
        }
      } catch (err) {
        setError("Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryDetails();
  }, [id, page]);

  useEffect(() => {
   console.log(products);
   
  }, [products])
  

  // Handle Scroll to Load More Products
  const handleScroll = (e) => {
    if (e.target.scrollHeight === e.target.scrollTop + e.target.clientHeight && hasMore && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (loading && page === 1) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <>
      {/* Category Section: Image and Description */}
      <div className="categoryMain">
        <div className="categoryHeader">
          <div className="categoryCompleteTitle">
          <span className="categoryTitle">{category?.name || "Kategorie"}</span>
          {!category.description &&  <span className="categorySubTitle">Transform your space with our handpicked designs.</span>}
          {category.description && <span className="categorySubTitle" dangerouslySetInnerHTML={{ __html: category.description}} />}
          </div>
          <div className="categoryDescription">
            <div>
            <img
              src={category?.image?.src || "https://via.placeholder.com/600x300"}
              alt={category?.name}
              className="categoryImage"
            />
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="productGridContainer" onScroll={handleScroll}>
        <div className="productGrid">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard 
                key={product._id}
                image={product.productImages?.[0] || "https://placehold.co/400"} 
                title={product.title} 
                price= {product?.pricing?.comparePrice ? `${product?.pricing?.comparePrice}` : `${product?.pricing?.price}`}
                discount={product?.pricing?.price ? `${product?.pricing?.price}` : "Kein Rabatt"} 
                id={product?.productId || product._id}
                chargeTax={product.chargeTax}
                stockAmt = {product.stockAmt}
                shopType = {product.shopType}
                isAssemblyService = {product.assemblyService}
              />
            ))
          ) : (
            <div className="noProducts">Derzeit gibt es keine Produkte in dieser Kollektion.</div>
          )}
          {loading && <div className="loading-text">Weitere Produkte werden geladen...</div>}
        </div>
      </div>
      <StairImage/>
      <Bestproducts />
      <NewsletterSubscription />
    </>
  );
}

export default CategoriesDetail;
