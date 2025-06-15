import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../styles/Categories.css';

const defaultImage = "https://via.placeholder.com/300x200?text=No+Image+Available";

const vintageOrder = [
  "Kommoden & Sideboards",
  "Lowboards & TV-Möbel",
  "Highboards & Schränke",
  "Regale & Bücherschränke",
  "Vitrinen & Anrichten",
  "Barschränke & Musikkommoden",
  "Sofas & Sitzgarnituren",
  "Sessel  & Hocker",
  "Couchtische & Beistelltische",
  "Stehlampen",
  "Schreibtische",
  "Sekretäre",
  "Schreibtischstühle",
  "Tischlampen",
  "Kleiderschränke",
  "Nachttische",
  "Betten",
  "Wäschekommoden",
  "Spiegelkommoden",
  "Truhen",
  "Nachttischlampen",
  "Esstische",
  "Stühle",
  "Küchenschränke",
  "Küchenlampen",
  "Schuhschränke",
  "Konsolen",
  "Bänke",
  "Hängelampen",
  "Wandlampen",
  "Spiegel",
  "Wandbilder",
  "Bilderrahmen",
  "Vasen",
  "Diverses",
];

const boatwoodOrder = [
  "Kommoden und Sideboards",
  "Lowboards und TV-Möbel",
  "Highboards und Schränke",
  "Regale und Bücherschranke",
  "Vitrinen und Anrichten",
  "Bars und Weinregale",
  "Sofas und Sitzgarnituren",
  "Sessel & Hocker",
  "Couchtische und Beistelltische",
  "Schreibtische und Konsolen",
  "Kleiderschränke",
  "Nachttische",
  "Betten",
  "Wäschekommoden",
  "Esstische",
  "Stühle",
  "Bänke",
  "Küchenschränke",
  "Accessoires",
  "Spiegel",
  "Wandbilder",
  "Garderoben",
  "Vasen",
  "Bars",
  "Bartische",
  "Barhocker",
];



const sortCategories = (categories, orderList) => {
  return categories.sort((a, b) => {
    const indexA = orderList.indexOf(a.name);
    const indexB = orderList.indexOf(b.name);

    if (indexA === -1 && indexB === -1) return 0; // Keep original order for unknown categories
    if (indexA === -1) return 1; // Move categories not in orderList to the end
    if (indexB === -1) return -1; // Keep ordered categories at the top

    return indexA - indexB; // Sort known categories based on orderList
  });
};



function ViewAllCategories() {
  const { type } = useParams();
  const [categoryList, setCategoryList] = useState([]);
  const [boatwoodCategories, setBoatwoodCategories] = useState([]);
  const [vintageCategories, setVintageCategories] = useState([]);

  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://wmk-backend.onrender.com/api/user_product/categories");
        const data = await response.json();
        setCategoryList(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    setVintageCategories(sortCategories(categoryList.filter(category => category.shopType === "vintage"), vintageOrder));
    setBoatwoodCategories(sortCategories(categoryList.filter(category => category.shopType === "boatwood"), boatwoodOrder));
  }, [categoryList]);

  return (
    <div className="categories-section">
      <div className="categories-header">
        <h1 className="categories-title">Alle Kategorien</h1>
        <p className="categories-subtitle">Entdecken Sie unsere Kollektionen</p>
      </div>
      

      {/* Trennlinie */}
      <div className="categoryFlexbox">
                  {/* Vintage-Bereich */}
        <div>
          <h2 className="category-heading">Vintage-Kategorien</h2>
          <div className="category-grid">
            {vintageCategories.map((category, index) => (
              <div className="category-item" key={index}>
                <Link to={`/category/${category._id}`}>
                  <img src={category.image?.src || defaultImage} alt={category.name} />
                  <div className="overlay"><span className="category-name">{category.name}</span></div>
                </Link>
              </div>
            ))}
          </div>
          </div>
          <div>
          <h2 className="category-heading">Boatwood-Kategorien</h2>
          <div className="category-grid">
            {boatwoodCategories.map((category, index) => (
              <div className="category-item" key={index}>
                <Link to={`/category/${category._id}`}>
                  <img src={category.image?.src || defaultImage} alt={category.name} />
                  <div className="overlay"><span className="category-name">{category.name}</span></div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default ViewAllCategories;
