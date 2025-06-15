import React, { useState, useEffect } from "react";
import "../styles/CategoryDropdown.css";
import { Link } from "react-router-dom";

const ITEMS_PER_COLUMN = 10; // Max categories per column

const CategoryDropdown = ({ data1, data2 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shopType1, setShopType1] = useState([]);
  const [shopType2, setShopType2] = useState([]);
  const [allCategories, setAllCategories] = useState([]);

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://wmk-backend.onrender.com/api/user_product/categories"
        );
        const data = await response.json();

        const vintageData = data.filter(
          (category) => category.shopType === "vintage"
        );
        const boatWoodData = data.filter(
          (category) => category.shopType === "boatwood"
        );

        setShopType1(vintageData);
        setShopType2(boatWoodData);
        setAllCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const priorityCategories = [
      "Wohnzimmer",
      "Kommoden & Sideboards",
      "Lowboards & TV-Möbel1",
      "Highboards & Schränke",
      "Regale & Bücherschränke",
      "Vitrinen & Anrichten",
      "Bars & Weinregale",
      "Sofas & Liegen",
      "Sessel & Hocker",
      "Couchtische & Beistelltische",
      "Schreibtische & Konsolen",
      "Schlafzimmer",
      "Kleiderschränke",
      "Nachttische",
      "Betten",
      "Wäschekommoden",
      "Küche & Esszimmer",
      "Esstische",
      "Stühle",
      "Bänke",
      "Küchenschränke",
      "Dekoration",
      "Accessoires",
      "Spiegel",
      "Wandbilder",
      "Garderoben",
      "Vasen",
      "Gastro",
      "Bars",
      "Bartische",
      "Barhocker",
    ];

    // Check if shopType1 is defined and is an array
    if (Array.isArray(shopType1)) {
      const sortedVintageCategories = [...shopType1].sort((a, b) => {
        // Ensure a.name and b.name are defined
        const aName = a?.name || "";
        const bName = b?.name || "";

        const aPriority = priorityCategories.indexOf(aName);
        const bPriority = priorityCategories.indexOf(bName);

        // If both are in the priority list, sort by their order in the list
        if (aPriority !== -1 && bPriority !== -1) {
          return aPriority - bPriority;
        }
        // If only 'a' is in the priority list, it comes first
        if (aPriority !== -1) {
          return -1;
        }
        // If only 'b' is in the priority list, it comes first
        if (bPriority !== -1) {
          return 1;
        }
        // If neither is in the priority list, maintain the original order
        return 0;
      });

      // Update state only if the sorted array is different from the current state
      if (
        JSON.stringify(sortedVintageCategories) !== JSON.stringify(shopType1)
      ) {
        setShopType1(sortedVintageCategories);
      }
    }
  }, [shopType1]); // Add other dependencies if needed

  // Show only limited categories
  const displayedVintage = shopType1;
  const displayedBoatwood = shopType2;
  const shopByAll = allCategories;

  return (
    <div
      className="category-container"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Group "All Categories" and logo */}
      <div className="navbar-categories">
        Shop{" "}
        <svg
          width="11"
          height="7"
          viewBox="0 0 11 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.06067 4L1.06066 0L0 1.06066L4 5.06067L5.06066 6.12132L6.12132 5.06066L10.1213 1.06067L9.06066 8.79169e-06L5.06067 4Z"
            fill="black"
          ></path>
        </svg>
        {/* <img src="/chart.png" alt="Kategorien" /> */}
      </div>

      {isOpen && (
        <div className="category-dropdown">
          <div>
            <div className="category-columns">
              {/* Vintage Furniture Column */}
              <div className="category-group grouped_main_cat">
                <div className="vertical-text">VINTAGE</div>{" "}
                {/* Vertical Text */}
                <div className="category-column">
                  {data1.items.map((category, index) => (
                    <div key={index} className="div-parentCategoy">
                      <Link to={category.route}>
                        <div className="parent-category">{category.label}</div>
                      </Link>
                      <div className="sub-categoryDrop">
                        {category.subItems.map((subCategory, subIndex) => (
                          <div className="category" key={subIndex}>
                            <Link to={subCategory.route}>
                              <span>{subCategory.label}</span>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Boatwood Furniture Column */}
              <div className="category-group grouped_main_cat">
                <div className="vertical-text">BOATWOOD</div>{" "}
                {/* Vertical Text */}
                <div className="category-column">
                  {data2.items.map((category, index) => (
                    <div key={index} className="div-parentCategoy">
                      <Link to={category.route}>
                        <div className="parent-category">{category.label}</div>
                      </Link>
                      <div className="sub-categoryDrop">
                        {category.subItems.map((subCategory, subIndex) => (
                          <div className="category" key={subIndex}>
                            <Link to={subCategory.route}>
                              <span>{subCategory.label}</span>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
