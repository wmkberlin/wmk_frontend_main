import React from "react";
import { Truck, Store, ShoppingCart } from "lucide-react";
import NewsletterSubscription from "../components/NewsletterSubscription";
import InfoBottomBar from "../components/infoBottomBar";
import "./contactUsPage.css";

const RentPage = () => {
  const slidingText = "Have you discovered our new SALE page yet? Go there!";

  return (
    <div>
      {/* Main Content */}
      <div className="content">
        {/* Image Section */}
        <div className="image-container">
          <img
            src="/contact_page_img.webp"
            alt="Vintage Furniture"
          />
        </div>

        {/* Text Section */}
        <div className="text-container">
          <h2>Der WMK Verleihservice</h2>
          <p>Du kannst jedes unserer Möbelstücke auch ausleihen!</p>
          <p>
          Für kleine Events wie Geburtstagsfeier, Fotoshootings, Film, Theater, Talkrunden, oder einfach nur mal so…
          </p>
          <p>
          Oder für große Veranstaltungen wie Hochzeiten, Firmenfeier, Messen, Partys… 
          </p>
          <p>
          Ob nur für einen Tag, eine Woche, einen Monat oder auch für längere Zeit…
          </p>
          <p>Fast Alles ist möglich!</p>
          <h3>Ihre Vorteile mit uns als Verleih-Partner:</h3>
          <ul>
            <li>10 Jahre Erfahrung</li>
            <li>24-Stunden-Service </li>
            <li>Verlieh schon ab 10% des Verkaufswertes</li>
            <li>ständig mehr als 1000 Möbelstücke verleihbereit</li>
            <li>Günstiger Liefer- und Abholservice</li>
            <li>maximale Flexibilität</li>
          </ul>
          <h3>Zu unseren Kunden zählen: </h3>
          <ul>
            <li>Der Berliner Senat</li>                             
              <li>Die Grünen</li>
              <li>YOU Messe</li>
              <li>UFA</li>
              <li>Festival of Animation</li>
              <li>BUNTFILM</li>
              <li>Sommerhaus GmbH</li>
              <li>Akzente Film</li>
              <li>Letterbox Filmproduction</li>
              <li>Full Production Service</li>
              <li>GmbH</li>
              <li>Promote Iceland</li>
              <li>Firma Riedl</li>
              <li>Firma Metz</li>
              <li>Uvm.</li>
          </ul>
          <p>
          Bei Fragen zum Verleih steht Ihnen Herr Radakovic zu Verfügung.  
          </p>
          <p>
            Call: 0173 848 00 84 <br /> Mail: info@wmk.berlin
          </p>
        </div>
      </div>

      {/* Info Section */}
      <InfoBottomBar/>
      

      {/* Newsletter section */}
      <NewsletterSubscription/>
    </div>
  );
};

export default RentPage;
