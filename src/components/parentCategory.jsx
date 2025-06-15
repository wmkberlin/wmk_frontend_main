import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/main.css";
import ProductCard from "./ProductCard";
import InfoBottomBar from "./infoBottomBar";
import FillersHomePag2 from "./FillersHomePage2";
import NewsletterSubscription from "./NewsletterSubscription";
import Bestproducts from "./BestProducts";
import StairImage from "./StairImage";
import SubCategoryCard from "./SubCategoryCard";

function ParentCategoriesDetail() {
  const { id } = useParams();
  const [parentCategory, setParentCategory] = useState(null);
  const [subCategories, setSubCategories] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Category Details and Products
  useEffect(() => {
    const fetchCategoryDetails = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://wmk-backend.onrender.com/api/user_product/parent-categories/${id}`
        );
        const data = await response.json();

        setParentCategory(data);
        setSubCategories(data.subCategoriesID || []); // Ensure products are correctly stored
        console.log("Fetched category:", parentCategory);
      } catch (err) {
        setError("Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryDetails();
  }, [id]);

  // Handle Scroll (Placeholder function)
  const handleScroll = (event) => {
    console.log("Scrolling...");
    // Add any required logic for infinite scrolling if necessary
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <>
      {/* Category Section: Image and Description */}
      <div className="categoryMain">
        <div className="categoryHeader">
          <div className="categoryCompleteTitle">
            <span className="categoryTitle">{parentCategory?.title || "Kategorie"}</span>
            <span className="categorySubTitle" dangerouslySetInnerHTML={{ __html: parentCategory?.description }}/>
             
          </div>
          <div className="categoryDescription">
            <img
              src={parentCategory.image[0] || "https://via.placeholder.com/600x300"}
              alt={parentCategory?.title}
              className="categoryImage"
            />
          </div>
        </div>
        <div className="productGrid gridCategory">
        {subCategories.length > 0 ? (
            subCategories.map((subcategory) => (
            <SubCategoryCard key={subcategory.id} subCategory={subcategory} />
            ))
        ) : (
            <div className="noProducts">Derzeit gibt es keine Produkte in dieser Kollektion.</div>
        )}
        </div>
      </div>

      {/* Product Grid */}
<br/><br/><br/>

      <StairImage />
      <Bestproducts />
      <NewsletterSubscription />
    </>
  );
}

export default ParentCategoriesDetail;
