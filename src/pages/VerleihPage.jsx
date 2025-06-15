import React from "react";
import { Truck, Store, ShoppingCart } from "lucide-react";
import "../styles/VerleihPage.css";
import NewsletterSubscription from "../components/NewsletterSubscription";
import InfoBottomBar from "../components/infoBottomBar";
import VerleihPageForm from "../components/VerleihPageForm";

const VerleihPage = () => {
  // Array of gallery images
  const galleryImages = [
    "/verleih_image1.webp",
    "/verleih_image2.webp",
    "/verleih_image3.webp",
  ];

  return (
    <div>
      {/* Hauptinhalt */}
      <div className="content" >
        {/* Bildabschnitt */}
        <div className="image-container">
          <img
            src="/verleih.webp"
            alt="verleih"
          />
        </div>

        {/* Textabschnitt */}
        <div className="text-container1">
          <h2>
          Der WMK Verleihservice

          </h2>
          <p>
          Du kannst jedes unserer Möbelstücke auch ausleihen!
          </p>
          <p>
          Für kleine Events wie Geburtstagsfeier, Fotoshootings, Film, Theater, Talkrunden, oder einfach nur mal so…
          </p>
          <p>
          Oder für große Veranstaltungen wie Hochzeiten, Firmenfeier, Messen, Partys… </p>
          <p> 
          Ob nur für einen Tag, eine Woche, einen Monat oder auch für längere Zeit…</p>
          <p>
          Fast Alles ist möglich!</p>
          <p>
          Ihre Vorteile mit uns als Verleih-Partner:</p>
          <ul>
            <li>10 Jahre Erfahrung</li>
            <li>24-Stunden-Service</li>
            <li>Verlieh schon ab 10% des Verkaufswertes</li>
            <li>Ständig mehr als 1000 Möbelstücke verleihbereit</li>
            <li>Günstiger Liefer- und Abholservice</li>
            <li>Maximale Flexibilität</li>
          </ul>
          <p>Zu unseren Kunden zählen: </p>
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
          <li>Full Production Service GmbH</li>
          <li>Promote Iceland</li>
          <li>Firma Riedl</li>
          <li>Firma Metz</li>
          <li>Uvm.</li>
        </ul>
          <p>Bei Fragen zum Verleih steht Ihnen Herr Radakovic zu Verfügung.    </p>
          <p>
Call:  0173 848 00 84    Mail:  info@wmk.berlin</p>
        </div>
      </div>

      {/* Galerieabschnitt */}
      <div className="gallery gallery-3">
        {galleryImages.map((src, index) => (
          <img key={index} src={src} alt={`Galerieelement ${index + 1}`} />
        ))}
      </div>

      {/* <VerleihPageForm/> */}

      <div className="full-width-image">
        <img
          src="/verleih_Full_image_last.webp"
          alt="Steile Treppen am Turm"
        />
        <div className="full-width-text">
          <h3>Bei kleinen wie großen Projekten kommt es auf verlässliche Partner an.</h3>
        </div>
      </div>

      <InfoBottomBar />

      {/* Newsletter Abschnitt */}
      <NewsletterSubscription />
    </div>
  );
};

export default VerleihPage;

// done
