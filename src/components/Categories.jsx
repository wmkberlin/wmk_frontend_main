import React, { useEffect, useState } from "react";
import "../styles/Categories.css"; // Import the CSS file
import { Link } from "react-router-dom";
import Bestproducts from "./BestProducts";


// Default image URL
const defaultImage =
  "https://via.placeholder.com/300x200?text=No+Image+Available";

function Categories() {
  const [categoryList, setCategoryList] = useState([]);

  // Define the API endpoint
  const apiUrl = "https://wmk-backend.onrender.com/api/user_product/categories";

  // Fetch categories from the API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCategoryList(data); // Update the state with the fetched data
        console.log(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Limit the number of categories to 6
  const displayedCategories = categoryList.slice(0, 5);

  return (
    <>
      <div className="categories-section">
        {/* Title and Subtitle */}
        <div className="categories-header">
          <h1 className="categories-title">Nach Kategorien shoppen</h1>
          <p className="categories-subtitle">
            Entdecken Sie Möbel für jedes Zimmer und jeden Stil
          </p>
        </div>

        <div className="category-grid1">
          {displayedCategories.map((category, index) => (
            <div className="category-item" key={index}>
              <Link to={`/category/${category._id}`}>
                {/* Use default image if category.image.src is not available */}
                <img
                  src={category.image?.src || defaultImage}
                  alt={category.name}
                />
                <div className="overlay">
                  <span className="category-name">{category.name}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="last-view-all">
          <button onClick={() => (window.location.href = "/categories/all")}>
            Alle anzeigen
          </button>
        </div>
      </div>

      {/* Highlights */}
      <Bestproducts />

      <div className="bannermiddle1">
        <div>
          <span className="span1middleBanner">
            Hauptsache, es ist nachhaltig!
          </span>
          <span className="span2middleBanner">
            Bei uns haben Sie die Wahl und die Auswahl
          </span>
          <span className="span3middleBanner">
            Entdecken Sie unsere Boatwood-Möbel
          </span>
          <div className="boatwoodFurniture">
            <Link to="/shop/boatwood">
              <button>Boatwood</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
