import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/main.css'
function SubCategoryCard({ subCategory }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/category/${subCategory._id}`);
  };

  return (
    <div className="subcategory-card" onClick={handleClick}>
      <img
        src={subCategory.image?.src || "https://via.placeholder.com/300"}
        alt={subCategory.name}
        className="subcategory-image"
      />
      <div className="overlay">
        <span className="subcategory-title">{subCategory.name}</span>
      </div>
    </div>
  );
}

export default SubCategoryCard;
