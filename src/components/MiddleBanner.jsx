import React from "react";
import { FaCreditCard, FaShippingFast, FaHeadset, FaShieldAlt } from "react-icons/fa"; // Import icons from Font Awesome
import "../styles/Banner.css";

function MiddleBanner() {
    return (
        <div className="middlebanner">
          <div className="middle-banner-item border-none">
            <div className="middle-banner-item-img">
              <FaCreditCard className="icon" /> {/* Payment icon */}
            </div>
            <div className="middle-banner-item-content">
              {/* <div>Ratenzahlung</div> */}
              <div>Wir bieten Zahlung in Raten an.</div>
            </div>
          </div>
          <div className="middle-banner-item">
            <div className="middle-banner-item-img">
              <FaShieldAlt className="icon" /> {/* Shipping icon */}
            </div>        
            <div className="middle-banner-item-content">
              {/* <div>Weltweiter Versand</div> */}
              <div>Wir akzeptieren Zahlungen über Klarna, PayPal, Visa und MasterCard.</div>
            </div>
          </div>
          <div className="middle-banner-item">
          <div className="middle-banner-item-img">
              <FaShippingFast className="icon" /> {/* Secure shopping icon */}
            </div>        
            <div className="middle-banner-item-content">
              <div>Weltweiter Versand inklusive Versicherung.</div>
            </div>
          </div>
          <div className="middle-banner-item">
            <div className="middle-banner-item-img">
              <FaHeadset className="icon" /> {/* Support icon */}
            </div>        
            <div className="middle-banner-item-content">
              {/* <div>Mehrsprachiger Support</div> */}
              <div>Support verfügbar in Deutsch, Englisch, Italienisch und Kroatisch.</div>
            </div>
          </div>
        </div>
      );
}

export default MiddleBanner;