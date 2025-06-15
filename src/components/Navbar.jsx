import React, { useState, useEffect, useRef } from "react"; // Add useRef
import { NavLink, Link } from "react-router-dom";
import { useShoppingCart } from "use-shopping-cart";
import { Heart, Search } from "lucide-react"; // Import the Heart icon AND Search icon
import CategoryDropdown from "./CategoryDropdown";
import "../styles/Navbar.css";
import { useWishlist } from "../context/WishListContext";
import Dropdown from "./Dropdown"; // Import the Dropdown component
import LanguageTranslation from "./LanguageTranslation";
import NestedDropdown from "./NestedDropdown";

function Navbar({ toggleCart, toggleWishlist, welcomeText }) {
  const token = localStorage.getItem("token");
  const userData = JSON.parse(localStorage.getItem("userProfile"));
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState({
    categories: [],
    products: [],
  });
  const [showResults, setShowResults] = useState(false);
  const [showResultsmobile, setShowResultsmobile] = useState(false);

  const [isPopupVisible, setPopupVisible] = useState(false);
  const popupRef = useRef(null); // Ref for the popup content

  const { cartCount } = useShoppingCart();
  const { wishlist } = useWishlist();
  let wishlistCount = wishlist.length;
  const [shopType1, setShopType1] = useState([]);
  const [shopType2, setShopType2] = useState([]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobileSearchVisible, setMobileSearchVisible] = useState(false); // State for mobile search visibility

  const aboutUsItems = {
    mainRoute: "/about-us",
    items: [
      { label: "Die WMK Story", route: "/about-us" },
      { label: "Unser Team", route: "/our-team" },
      { label: "Der schwarze Hund", route: "/melem" }, // Assuming "Black Dog" is a proper noun and doesn't need translation
      { label: "Ankauf", route: "/ankauf" }, // Already in German
      { label: "Verleih", route: "/verleih" }, // Already in German
      { label: "Wo kommen unsere Möbel her?", route: "/wo-kommen-unsere-mobel-her" },
      { label: "Der Firmenname", route: "/firmenname" },
      { label: "WMK For Ukraine", route: "/wmk-for-ukraine" },
      {label: "Versand", route: "/versand"}
    ],
  };

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults({ categories: [], products: [] });
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const response = await fetch(
          `https://wmk-backend.onrender.com/api/user_product/search?query=${encodeURIComponent(
            searchQuery
          )}`
        );
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close popup only if clicked outside the popup content
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopupVisible(false);
      }
    };

    // Attach the event listener when the popup is open
    if (isPopupVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener when the popup closes or component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopupVisible]);

  const [parentCategories, setParentCategories] = useState([]);

  // Fetch all parent categories on component mount
  useEffect(() => {
    const fetchParentCategories = async () => {
      try {
        const response = await fetch(
          "https://wmk-backend.onrender.com/api/user_product/parent-categories"
        );
        const data = await response.json();

        const vintageData = data.filter(
          (category) => category.type === "vintage"
        );
        const boatWoodData = data.filter(
          (category) => category.type === "boatwood"
        );

        setShopType1(vintageData);
        setShopType2(boatWoodData);
      } catch (error) {
        console.error("Error fetching parent categories:", error);
      }
    };
    fetchParentCategories();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://wmk-backend.onrender.com/api/user_product/categories"
        );
        // console.log(response);
        const data = await response.json(); // Convert response to JSON

        const vintageCategories = data
          .filter((category) => category.shopType === "vintage")
          .map((category) => category.name);

        const boatwoodCategories = data
          .filter((category) => category.shopType === "boatwood")
          .map((category) => category.name);

        // console.log(vintageCategories, "v");
        // console.log(boatwoodCategories, "bw");
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // useEffect(() => {
  //   const priorityCategories = [
  //     "Wohnzimmer",
  //     "Kommoden & Sideboards",
  //     "Lowboards & TV-Möbel1",
  //     "Highboards & Schränke",
  //     "Regale & Bücherschränke",
  //     "Vitrinen & Anrichten",
  //     "Bars & Weinregale",
  //     "Sofas & Liegen",
  //     "Sessel & Hocker",
  //     "Couchtische & Beistelltische",
  //     "Schreibtische & Konsolen",
  //     "Schlafzimmer",
  //     "Kleiderschränke",
  //     "Nachttische",
  //     "Betten",
  //     "Wäschekommoden",
  //     "Küche & Esszimmer",
  //     "Esstische",
  //     "Stühle",
  //     "Bänke",
  //     "Küchenschränke",
  //     "Dekoration",
  //     "Accessoires",
  //     "Spiegel",
  //     "Wandbilder",
  //     "Garderoben",
  //     "Vasen",
  //     "Gastro",
  //     "Bars",
  //     "Bartische",
  //     "Barhocker"
  //   ];

  //   // Check if shopType1 is defined and is an array
  //   if (Array.isArray(shopType1)) {
  //     const sortedVintageCategories = [...shopType1].sort((a, b) => {
  //       // Ensure a.name and b.name are defined
  //       const aName = a?.name || '';
  //       const bName = b?.name || '';

  //       const aPriority = priorityCategories.indexOf(aName);
  //       const bPriority = priorityCategories.indexOf(bName);

  //       // If both are in the priority list, sort by their order in the list
  //       if (aPriority !== -1 && bPriority !== -1) {
  //         return aPriority - bPriority;
  //       }
  //       // If only 'a' is in the priority list, it comes first
  //       if (aPriority !== -1) {
  //         return -1;
  //       }
  //       // If only 'b' is in the priority list, it comes first
  //       if (bPriority !== -1) {
  //         return 1;
  //       }
  //       // If neither is in the priority list, maintain the original order
  //       return 0;
  //     });

  //     // Update state only if the sorted array is different from the current state
  //     if (JSON.stringify(sortedVintageCategories) !== JSON.stringify(shopType1)) {
  //       setShopType1(sortedVintageCategories);
  //     }
  //   }
  // }, [shopType1]); // Add other dependencies if needed

  const vintageItems = {
    mainRoute: "/shop/vintage",
    items: shopType1.map((category) => ({
      label: category.name,
      route: `/category/${category._id}`,
    })),
  };

  const mappedParentCategory = {
    mainRoute: "/categories/all",
    items: parentCategories.map((parentCategory) => ({
      label: parentCategory.title,
      route: `/parent-category/${parentCategory._id}`,
      subItems: parentCategory?.subCategoriesID?.map((subCategory) => ({
        label: subCategory.name,
        route: `/category/${subCategory._id}`,
      })),
    })),
  };

  const boatwoodParentCategories = {
    mainRoute: "/shop/boatwood",
    items: shopType2.map((parentCategory) => ({
      label: parentCategory.title,
      route: `/parent-category/${parentCategory._id}`,
      subItems: parentCategory?.subCategoriesID?.map((subCategory) => ({
        label: subCategory.name,
        route: `/category/${subCategory._id}`,
      })),
    })),
  };

  const vintageParentCategories = {
    mainRoute: "/shop/vintage",
    items: shopType1.map((parentCategory) => ({
      label: parentCategory.title,
      route: `/parent-category/${parentCategory._id}`,
      subItems: parentCategory?.subCategoriesID?.map((subCategory) => ({
        label: subCategory.name,
        route: `/category/${subCategory._id}`,
      })),
    })),
  };

  console.log(mappedParentCategory);

  const boatwoodItems = {
    mainRoute: "/shop/boatwood",
    items: shopType2.map((category) => ({
      label: category.name,
      route: `/category/${category._id}`,
    })),
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userProfile");
    window.location.reload();
  };

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const toggleMobileSearch = () => {
    setMobileSearchVisible(!isMobileSearchVisible); // Toggle mobile search visibility
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <p dangerouslySetInnerHTML={{ __html: welcomeText }} />
      </div>

      <nav className="navbar">
        {/* Top Navbar */}
        <div className="topNavbar"></div>

        {/* Middle Navbar */}
        <div className="midNavbar">
          <NavLink to="/">
            <div className="navbar-brand">
              <img
                src="https://wmk.berlin/cdn/shop/files/LOGOSCHWARZ_AUF_WEIss_freigelegt_JPEG_f6e50c31-198f-4a14-b531-08c9889b6d12.jpg?v=1700050389"
                className="logo"
                alt="Logo"
                width={150}
              />
            </div>
          </NavLink>
          <div className="searchCompleteDiv">
            <input
              type="text"
              className="navbar-search"
              placeholder="Produkte hier suchen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowResults(true)}
            />
            <div className="languageTranslationDiv">
              <LanguageTranslation />{" "}
              {/*Language translate via Google Translator*/}
            </div>
          </div>
          {showResults &&
            (searchResults.categories.length > 0 ||
              searchResults.products.length > 0) && (
              <div
                className="search-results"
                onMouseDown={(e) => e.preventDefault()}
              >
                {/* Categories Section */}
                {searchResults.categories.length > 0 && (
                  <div className="search-section">
                    <h4>Shop By Kategorien</h4>
                    {searchResults.categories.map((category) => (
                      <Link
                        key={category._id}
                        to={`/category/${category._id}`}
                        className="search-item"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Products Section */}
                {searchResults.products.length > 0 && (
                  <div className="search-section">
                    <h4>Produkte</h4>
                    {searchResults.products.map((product) => (
                      <Link
                        key={product._id}
                        to={`/product/${product._id}`}
                        className="search-item"
                      >
                        <img
                          src={product.productImages[0]}
                          alt="img"
                          className="search-product-image"
                        />
                        <span className="search-product-title">
                          {product.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          <div className="IconNavbarRight">
            <span className="loginRightDiv">
              {!token ? (
                <NavLink className="loginDivNav" to="/login">
                  <img
                    src="/user-login.png"
                    alt="Login/Register"
                    className="user-icon"
                  />
                </NavLink>
              ) : (
                <span onClick={togglePopup} title={userData?.name}>
                  <img
                    src="/user-login.png"
                    alt="User Profile"
                    className="user-icon"
                  />
                </span>
              )}
            </span>
              <div className="cart-icon-container">
            {/* MOBILE SEARCH ICON */}
            <Search
              className="mobile-search-icon"
              onClick={toggleMobileSearch} // Toggle mobile search visibility
            />
            </div>

            <span className="cart-icon-container" onClick={toggleWishlist}>
              {/* <img src="/wishlist.png" alt="Wunschliste" /> */}
              <Heart strokeWidth={1.2} className="wishlist-icon" />
              {wishlistCount > 0 && (
                <span className="cart-badge">{wishlistCount}</span>
              )}
            </span>


            <span className="cart-icon-container" onClick={toggleCart}>
              <img src="/shoppingCart_icon.png " alt="Warenkorb" />
              {cartCount > 0 && <span className="cart-badge cartIconCount">{cartCount}</span>}
            </span>
            {/* Hamburger Icon */}
            <span
              className="hamburger-icon"
              onClick={() => setSidebarOpen(!isSidebarOpen)}
            >
              &#9776; {/* Unicode for hamburger icon */}
            </span>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isMobileSearchVisible && (
          <div className="mobile-search-bar">
            <input
              type="text"
              placeholder="Produkte hier suchen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowResultsmobile(true)}
            />
            {showResultsmobile &&
              (searchResults.categories.length > 0 ||
                searchResults.products.length > 0) && (
                <div
                  className="search-results"
                  onMouseDown={(e) => e.preventDefault()}
                >
                  {/* Categories Section */}
                  {searchResults.categories.length > 0 && (
                    <div className="search-section">
                      <h4>Shop By Kategorien</h4>
                      {searchResults.categories.map((category) => (
                        <Link
                          key={category._id}
                          to={`/category/${category._id}`}
                          className="search-item"
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Products Section */}
                  {searchResults.products.length > 0 && (
                    <div className="search-section">
                      <h4>Produkte</h4>
                      {searchResults.products.map((product) => (
                        <Link
                          key={product._id}
                          to={`/product/${product._id}`}
                          className="search-item"
                        >
                          <img
                            src={product.productImages[0]}
                            alt="img"
                            className="search-product-image"
                          />
                          <span className="search-product-title">
                            {product.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
          </div>
        )}

        {/* Bottom Navbar */}
        <div className="bottomNavbar">
          <ul className="navbar-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Startseite
              </NavLink>
            </li>
            <CategoryDropdown
              data1={vintageParentCategories}
              data2={boatwoodParentCategories}
            />
            <li>
              <NavLink
                to="/categories/all"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Katalog
              </NavLink>
            </li>
            <NestedDropdown title="Vintage" data={vintageParentCategories} />
            <NestedDropdown title="Boatwood" data={boatwoodParentCategories} />
            <li>
              <NavLink to="/sales">Sale</NavLink>
            </li>
            <li>
              <NavLink to="/verleih">Rental</NavLink>
            </li>
            <li>
              <NavLink to="/ankauf">Ankauf</NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Kontakt
              </NavLink>
            </li>
            <Dropdown title="Über uns" data={aboutUsItems} />
          </ul>
        </div>

        {/* Sidebar */}
        {isSidebarOpen && (
          <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
            <div className="sidebar-content">
              <span
                className="close-sidebar"
                onClick={() => setSidebarOpen(false)}
              >
                &times; {/* Unicode for close icon */}
              </span>
              <div className="bottomNavbar">
                <ul className="navbar-links">
                  <LanguageTranslation />{" "}
                  {/*Language translate via Google Translator*/}
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      Startseite
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/categories/all"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      Katalog
                    </NavLink>
                  </li>
                  <NestedDropdown
                    title="Vintage"
                    data={vintageParentCategories}
                  />
                  <NestedDropdown
                    title="Boatwood"
                    data={boatwoodParentCategories}
                  />
                  <li>
                    <NavLink
                      to="/contact-us"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      Kontakt
                    </NavLink>
                  </li>
                  <Dropdown title="Über uns" data={aboutUsItems} />
                  <li>
                    <NavLink to="/login">
                      <span>Anmelden/Registrieren</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Popup for user details and logout */}
        {isPopupVisible && (
          <div className="popup">
            <div className="popup-content" ref={popupRef}>
              <span className="close-popup closeBtnPopup" onClick={togglePopup}>
                &times;
              </span>
              <h2>Benutzerdetails</h2>
              <p>
                <strong>Name:</strong> {userData?.name}
              </p>
              <p>
                <strong>E-Mail:</strong> {userData?.email_address}
              </p>
              <p>
                <strong>Telefonnummer:</strong> {userData?.phone_number}
              </p>
              <button onClick={handleLogout} className="logout-btn">
                Abmelden
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
