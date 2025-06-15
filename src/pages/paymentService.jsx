import React from "react";
import { Truck, Store, ShoppingCart } from "lucide-react";

import "./theBlackDogpage.css";
import InfoBottomBar from "../components/infoBottomBar";
import NewsletterSubscription from "../components/NewsletterSubscription";
import { Link } from "react-router-dom";

const OurPaymentService = () => {
  const slidingText =
    "Have you discovered our new SALE page yet? Go there! | Check out our latest collections! | Special discounts available!";

  // Array of gallery images
  const galleryImages = [
    "d4ba8bac-2a0a-4a53-9bf5-1bef2e96da1d.webp",
    "/2.webp",
  ];

  return (
    <div>
      {/* Hauptinhalt */}
      <div className="content">
        {/* Bildbereich */}
        <div className="image-container">
          <img
            src="/bright-red-chairs-and-white-table.webp"
            alt="Team-Fauststoß"
          />
        </div>

        {/* Textbereich */}
        <div className="text-container">
          <h2>
            Ratenzahlungen oder Zahlungen in 30 Tagen sind bei WMK zinsfrei!
          </h2>
          <br />
          <span>
            Ja, wir haben dich gehört, und ab sofort kannst du deine Zahlungen in
            Raten über PayPal oder Klarna vereinbaren oder innerhalb von 30
            Tagen bezahlen.
          </span>
          <br />
          <br />
          Und das völlig zinsfrei! Du zahlst nur den Kaufpreis und wir kümmern
          uns um den Rest.
          <br />
          <br />
          Natürlich erhältst du die Möbel sofort.
          <br />
          <br />
          Falls du Fragen hast, helfen wir dir gerne weiter. Schreib uns, ruf
          uns an – wir sind für dich da!
          <br />
          <br />
          <Link to="/contact-us">
            <button className="info-button">
              <span>MEHR DAZU</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Bildbereich in voller Breite */}
      <div className="full-width-image">
        <img
          src="//wmk.berlin/cdn/shop/files/steep-stairs-on-tower.jpg?v=1700780043&width=640"
          alt="Steile Treppe am Turm"
        />
        <div className="full-width-text">
          <h3>Lange Geschichte kurz:</h3>
          <p>Von einem Keller in Friedrichshain in den Deutschen Bundestag</p>
        </div>
      </div>

      {/* Info-Bereich */}
      <InfoBottomBar />

      <NewsletterSubscription />
    </div>

  );
};

export default OurPaymentService;

//done
