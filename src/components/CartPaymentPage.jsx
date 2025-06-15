import React, { useEffect, useState, useRef } from "react";
import { useShoppingCart } from "use-shopping-cart";
import "../styles/CartPaymentPage.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { debounce } from "lodash";
import { useNavigate } from "react-router-dom";
import CouponCode from "./CouponCode";

const availableCountries = [
  { code: "DE", name: "Germany", phoneCode: "+49" },
  { code: "IT", name: "Italy", phoneCode: "+39" },
  { code: "IE", name: "Ireland", phoneCode: "+353" },
  { code: "AT", name: "Austria", phoneCode: "+43" },
  { code: "BE", name: "Belgium", phoneCode: "+32" },
  { code: "BG", name: "Bulgaria", phoneCode: "+359" },
  { code: "CZ", name: "Czechia", phoneCode: "+420" },
  { code: "DK", name: "Denmark", phoneCode: "+45" },
  { code: "EE", name: "Estonia", phoneCode: "+372" },
  { code: "FI", name: "Finland", phoneCode: "+358" },
  { code: "FR", name: "France", phoneCode: "+33" },
  { code: "GR", name: "Greece", phoneCode: "+30" },
  { code: "HU", name: "Hungary", phoneCode: "+36" },
  { code: "LV", name: "Latvia", phoneCode: "+371" },
  { code: "LT", name: "Lithuania", phoneCode: "+370" },
  { code: "NL", name: "Netherlands", phoneCode: "+31" },
  { code: "NO", name: "Norway", phoneCode: "+47" },
  { code: "PL", name: "Poland", phoneCode: "+48" },
  { code: "PT", name: "Portugal", phoneCode: "+351" },
  { code: "RO", name: "Romania", phoneCode: "+40" },
  { code: "SK", name: "Slovakia", phoneCode: "+421" },
  { code: "ES", name: "Spain", phoneCode: "+34" },
  { code: "SE", name: "Sweden", phoneCode: "+46" },
  { code: "CH", name: "Switzerland", phoneCode: "+41" },
  { code: "GB", name: "United Kingdom", phoneCode: "+44" },
];

const countryTranslations = {
  Germany: "Deutschland",
  Italy: "Italien",
  Ireland: "Irland",
  Austria: "Österreich",
  Belgium: "Belgien",
  Bulgaria: "Bulgarien",
  Czechia: "Tschechien",
  Denmark: "Dänemark",
  Estonia: "Estland",
  Finland: "Finnland",
  France: "Frankreich",
  Greece: "Griechenland",
  Hungary: "Ungarn",
  Latvia: "Lettland",
  Lithuania: "Litauen",
  Netherlands: "Niederlande",
  Norway: "Norwegen",
  Poland: "Polen",
  Portugal: "Portugal",
  Romania: "Rumänien",
  Slovakia: "Slowakei",
  Spain: "Spanien",
  Sweden: "Schweden",
  Switzerland: "Schweiz",
  "United Kingdom" : "Vereinigtes Königreich",
};

const translatedCountries = availableCountries.map((country) => {
  return {
    ...country,
    translatedName: countryTranslations[country.name] || country.name,
  };
});

// Store addresses
const storeAddresses = {
  vintage: {
    name: "Wollen Möbel Kaufen?! Vintage Megastore",
    address: "Frankfurter Allee 35-37, 10247 Berlin, Germany",
  },
  boatwood: {
    name: "Boatwood Furniture .Berlin",
    address: "Revaler Straße 99, 10245 Berlin, Germany",
  },
};

const CartCheckout = () => {
  const [deliveryOption, setDeliveryOption] = useState("shipment");
  const [selectedCountry, setSelectedCountry] = useState("DE");
  const [phone, setPhone] = useState("");
  const [shipmentCost, setShipmentCost] = useState(0);
  const [loading, setLoading] = useState(false);
  const suggestionRef = useRef(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    apartment: "",
  });
  const [errors, setErrors] = useState({});
  const [addressSuggestions, setAddressSuggestions] = useState([]);
  const [coupon, setCoupon] = useState(null);
  const [couponCode, setCouponCode] = useState("");

  const { cartDetails, formattedTotalPrice } = useShoppingCart();

  const cartItems = Object.values(cartDetails || {});
  const cartItemDetails = Object.values(cartDetails || {}).map((item) => ({
    id: item.id,
    quantity: item.quantity,
  }));
  const totalTax =
    cartItems.reduce((total, item) => {
      return total + item.price * item.quantity * (item.chargeTax / 100);
    }, 0) || 0;
  const calculatedTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const boatwoodItem = cartItems.find((item) => item.shopType === "boatwood");
  const isBoatwoodPresent = !!boatwoodItem;

  const calculatedTotalFinal = parseFloat(
    (calculatedTotal + totalTax + shipmentCost).toFixed(2)
  );

  // Calculate discount and new total
  const discount = coupon
    ? coupon.type === "percent"
      ? (calculatedTotalFinal * coupon.value) / 100
      : coupon.value
    : 0;
  const totalAfterDiscount = Math.max(0, calculatedTotalFinal - discount);

  // Determine the store address based on shopType
  const getStoreAddress = () => {
    if (isBoatwoodPresent) {
      return storeAddresses.boatwood;
    }
    return storeAddresses.vintage;
  };

  const fetchShipmentCost = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://wmk-backend.onrender.com/api/payments/getShippingCharges", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          country: selectedCountry,
          Useraddress: formData,
          products: cartItemDetails,
        }),
      });
      const data = await response.json();
      if (response.ok) setShipmentCost(data.shippingCharge);
    } catch (error) {
      console.error("Error fetching shipment cost", error);
    } finally {
      setLoading(false);
    }
  };

  const debouncedFetchShipmentCost = debounce(fetchShipmentCost, 500);

  useEffect(() => {
    const requiredFieldsFilled =
      formData.email &&
      formData.firstName &&
      formData.lastName &&
      formData.address &&
      formData.postalCode;

    if (deliveryOption === "shipment" && requiredFieldsFilled) {
      debouncedFetchShipmentCost();
    } else if (deliveryOption === "pickup") {
      // Set shipment cost to 0 for pickup
      setShipmentCost(0);
    }
  
  }, [deliveryOption, formData]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (suggestionRef.current && !suggestionRef.current.contains(event.target)) {
        setAddressSuggestions([]);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fetchAddressSuggestions = async (query) => {
    if (!query) return;
    const country = availableCountries.find((c) => c.code === selectedCountry)?.name;
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${query},${country}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setAddressSuggestions(data.map((item) => item.display_name));
    } catch (error) {
      console.error("Error fetching address suggestions:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "address") {
      fetchAddressSuggestions(value);
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.postalCode) newErrors.postalCode = "Postal code is required";
    if (!phone) newErrors.phone = "Phone number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Proceeding to order review");
      navigate("/order-review", {
        state: {
          formData,
          phone,
          selectedCountry,
          shipmentCost,
          cartItems,
          calculatedTotalFinal: totalAfterDiscount,
          deliveryOption,
        },
      });
    }
  };

  const handleApplyCoupon = (couponObj, code) => {
    setCoupon(couponObj);
    setCouponCode(code);
    setLanguage(getCurrentLanguage());
  };

  // Helper to get current language
  const getCurrentLanguage = () => {
    const select = document.querySelector('.goog-te-combo');
    if (select && select.value) return select.value;
    return navigator.language || document.documentElement.lang || 'de';
  };

  const [language, setLanguage] = useState(getCurrentLanguage());

  // Listen for language changes and for the dropdown appearing
  useEffect(() => {
    let observer;
    const updateLanguage = () => setLanguage(getCurrentLanguage());

    // Listen for changes to the dropdown
    const tryAttachListener = () => {
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        select.addEventListener('change', updateLanguage);
        updateLanguage();
        return true;
      }
      return false;
    };

    // Try immediately
    if (!tryAttachListener()) {
      // If not present, observe DOM for it
      observer = new MutationObserver(() => {
        if (tryAttachListener() && observer) {
          observer.disconnect();
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      const select = document.querySelector('.goog-te-combo');
      if (select) select.removeEventListener('change', updateLanguage);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div className="container">
      <div className="left-section">
        <div className="contact-section">
          <h2>Kontakt</h2>
          <input
            name="email"
            type="text"
            placeholder="E-Mail"
            value={formData.email}
            onChange={handleInputChange}
          />
          <div className="checkbox-container">
            <input type="checkbox" id="newsletter" />
            <label htmlFor="newsletter">Benachrichtigen Sie mich über Neuigkeiten und Angebote</label>
          </div>
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="delivery-section">
          <h2>Lieferung</h2>
          <div className="delivery-options">
            <label className={`delivery-label ${deliveryOption === "shipment" ? "selected" : ""}`}>
              <input
                type="radio"
                name="delivery"
                value="shipment"
                checked={deliveryOption === "shipment"}
                onChange={(e) => setDeliveryOption(e.target.value)}
              />
              Lieferung <span className="icon">🚚</span>
            </label>
            <label className={`delivery-label ${deliveryOption === "pickup" ? "selected" : ""}`}>
              <input
                type="radio"
                name="delivery"
                value="pickup"
                checked={deliveryOption === "pickup"}
                onChange={(e) => setDeliveryOption(e.target.value)}
              />
              Abholung im Geschäft <span className="icon">🏪</span>
            </label>
          </div>

          {/* Display store address for pickup */}
          {deliveryOption === "pickup" && (
            <div className="store-address">
              <h3>Abholadresse</h3>
              <div className="storeDiv"><p>
                <strong>{getStoreAddress().name}</strong>
              </p>
              <p>{getStoreAddress().address}</p>
            </div>            </div>

          )}
        </div>

        <div className="user-info">
          <div className="dropdown-container">
            <label htmlFor="country">Land / Region</label>
            <div className="custom-dropdown">
              <select
                id="country"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                {translatedCountries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.translatedName}
                  </option>
                ))}
              </select>
              <span className="dropdown-icon">▼</span>
            </div>
          </div>

          <div className="double-input">
            <input
              type="text"
              name="firstName"
              placeholder="Vorname"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Nachname"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
          </div>

          <input type="text" placeholder="Firma (optional)" onChange={handleInputChange} />
          <div className="autocomplete-container" ref={suggestionRef}>
            <input
              type="text"
              name="address"
              placeholder="Adresse"
              value={formData.address}
              onChange={handleInputChange}
            />
            {errors.address && <span className="error">{errors.address}</span>}
            {addressSuggestions.length > 0 && (
              <ul className="suggestions-list">
                {addressSuggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setFormData({ ...formData, address: suggestion });
                      setAddressSuggestions([]);
                    }}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <input
            type="text"
            placeholder="Wohnung, Zimmer, etc."
            value={formData.apartment}
            name="apartment"
            onChange={handleInputChange}
          />
          <div className="double-input">
            <input
              type="text"
              placeholder="Postleitzahl"
              value={formData.postalCode}
              name="postalCode"
              onChange={handleInputChange}
            />
            {errors.postalCode && <span className="error">{errors.postalCode}</span>}
            <input
              type="text"
              placeholder="Stadt"
              value={formData.city}
              name="city"
              onChange={handleInputChange}
            />
            {errors.city && <span className="error">{errors.city}</span>}
          </div>
          <PhoneInput country={selectedCountry.toLowerCase()} value={phone} onChange={setPhone} />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <button
          className="review-button"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Calculating shipment cost..." : "Bestellung überprüfen"}
        </button>
      </div>

      <div className="right-section">
        <h2>Bestellübersicht</h2>

        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} loading="lazy"  // Add lazy loading
                    decoding="async" // Async decoding
                    width="800"     // Set intrinsic width
                    height="600"    // Set intrinsic height
              />
              <div className="cart-item-details">
                <p>{item.title}</p>
                <span>{item.price}€</span>
                <p>Menge: {item.quantity}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="empty-cart">Ihr Warenkorb ist leer!</p>
        )}

        {/* Coupon input directly under cart items */}
        <CouponCode onApply={handleApplyCoupon} />

        <div className="cart-total">
          <p>
            Zwischensumme ({cartItems.length} Artikel): {calculatedTotal.toLocaleString(language, { style: 'currency', currency: 'EUR' })}
          </p>
          <p>
            Lieferung: {loading ? "Calculating..." : shipmentCost.toLocaleString(language, { style: 'currency', currency: 'EUR' })}
          </p>
          {isBoatwoodPresent && <span>Inkl. 19% MwSt</span>}
          {coupon && (
            <p style={{ color: 'green' }}>
              Gutschein ({couponCode}): -{discount.toLocaleString(language, { style: 'currency', currency: 'EUR' })}
            </p>
          )}
          <hr />
          <strong>
            Gesamt: {totalAfterDiscount.toLocaleString(language, { style: 'currency', currency: 'EUR' })}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;