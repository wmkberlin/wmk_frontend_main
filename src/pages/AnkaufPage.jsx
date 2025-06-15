"use client";

import { useState } from "react";
import { Truck, Store, ShoppingCart } from "lucide-react";
import NewsletterSubscription from "../components/NewsletterSubscription";
import InfoBottomBar from "../components/infoBottomBar";
import AnkaufPageForm from "../components/AnkaufPageForm";
// import "../styles/AnkaufPage.css";

const AnkaufPage = () => {
  return (
    <div>
      {/* Hauptinhalt */}
      <div className="content">
        {/* Bildabschnitt */}
        <div className="image-container">
          <img
            src="/ankaufPagePic.webp"
            alt="Vintage Möbel"
          />
        </div>

        {/* Textabschnitt */}
        <div className="text-container">
            <p>Unkompliziert, schnell und fair:</p>
          <h2>
          Der WMK Möbelankauf 
          </h2>
          <p>
          Sie haben Vintage oder antike Möbel zu verkaufen? Dann sind Sie bei uns genau richtig!
          </p>
          <p>
          Wir garantieren Ihnen unkomplizierte Abwicklung, zeitnahe Abholung und faire Preise. 
          </p>
          <p>
          Bevor Sie uns kontaktieren bitte folgendes beachten:
          </p>
          <p>- <b>wir handeln ausschließlich mit vintage Möbel</b> - bitte bieten Sie uns keine moderne Möbel an, das kaufen wir nicht an.</p>
          <p>- wir sitzen in Berlin und wir kaufen in Berlin und Umgebung an - Deutschlandweite Abholungen sind zwar auch möglich, diese lohnen sich jedoch nur wenn es sich um viele Möbel handelt.</p>
          <p>Bitte füllen Sie das folgende Formular aus oder senden Sie uns Fotos von den Sachen die Sie verkaufen möchten und Ihre Preisvorstellung einfach per Email an: </p>
          <p>
          info@wmk.berlin 
          </p>
          <p>
          Wir melden uns kurzfristig zurück. 
          </p>
          <p>
          Danke!
          </p>
        </div>
      </div>

    
    <AnkaufPageForm/>
      <InfoBottomBar />

      {/* Newsletter Abschnitt */}
      <NewsletterSubscription />
    </div>
  );
};

export default AnkaufPage;

// done
