import React from "react";
import { Truck, Store, ShoppingCart } from "lucide-react";
import "../pages/aboutusPage.css";
import { Link } from "react-router-dom";

const InfoBottomBar = () => {
  return (
    <div>
      <div className="info-section">
        <div className="info-card">
          <Truck strokeWidth={1} className="info-icon" />
          <h3>Versand</h3>
          <p>
            Wir versenden unsere Möbel in die ganze Welt. 
            Zu dir aber am liebsten!
          </p>
          {/* Updated button with a <span> inside */}
          <Link to='/versand'>
          <button className="info-button">
            <span>MEHR DAZU</span>
          </button>
          </Link>
        </div>

        <div className="info-card">
          <Store strokeWidth={1} className="info-icon" />
          <h3>Abholung</h3>
          <p>
            Klar kannst du deine neuen Möbel auch bei uns abholen. 
            Wir helfen dir gerne!
          </p>
          {/* Updated button with a <span> inside */}
          <Link to='/contact-us'>
          <button className="info-button">
            <span>MEHR DAZU</span>
          </button>
          </Link>
        </div>

        <div className="info-card">
          <ShoppingCart strokeWidth={1} className="info-icon" />
          <h3>Ratenzahlung</h3>
          <p>
            Ja, dank PayPal kannst du bei uns auch in Raten zahlen.
          </p>
          <Link to="ratenzahlung-bei-wmk">
          {/* Updated button with a <span> inside */}
          <button className="info-button">
            <span>MEHR DAZU</span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoBottomBar;
