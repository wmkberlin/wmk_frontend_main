import React from "react";
import { Truck, Store, ShoppingCart } from "lucide-react";

import "./ourTeamPage.css";
import InfoBottomBar from "../components/infoBottomBar";
import NewsletterSubscription from "../components/NewsletterSubscription";

const OurTeam = () => {
  const slidingText =
    "Have you discovered our new SALE page yet? Go there! | Check out our latest collections! | Special discounts available!";

  // Array of gallery images
  const galleryImages = [
    "/outTeam-img1.webp",
    "/outTeam-img2.webp",
    "/outTeam-img3.webp",
    "/outTeam-img4.webp",
    "/outTeam-img5.webp",
    "/outTeam-img6.webp",
    "/outTeam-img7.webp",
    "/outTeam-img8.webp",
  ];

  // Last row images
  const lastRowImages = [
    "/outTeam-img9.webp",
    "/outTeam-img10.webp",
    "/outTeam-img11.webp",
  ];

  return (
    <div>

      {/* Main Content */}
      <div className="content">
        {/* Image Section */}
        <div className="image-container">
          <img src="/our-team main div pic.webp" alt="Team fist Bump" />
        </div>

        {/* Text Section */}
        <div className="text-container">
          <h2>Das WMK Team</h2>
          <p>Guter Service ist kein Zufall. Es bedürft eines guten Teams.</p>
          <p>
          Und wir haben das Glück das netteste und das fleißigste Team zu haben. Und das Humorvollste wohl auch.
          </p>
          <p>
          Bei einem Team kommt es auch auf guten Mix an. So besteht unser Team aus Frauen und Männern aus 6 verschiedenen Ländern und wir sprechen insgesamt 8 Sprachen.
          </p>
          <p>
          Diese Vielfalt bereichert unser Unternehmen, und spiegelt auch unsere sehr bunte Kundschaft wieder.
          </p>
          <p>Zum Vorteil aller.</p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery">
        {galleryImages.map((src, index) => (
          <img key={index} src={src} alt={`Gallery item ${index + 1}`} />
        ))}
      </div>

      {/* New Full-Width Last Row */}
      <div className="last-row-gallery">
        {lastRowImages.map((src, index) => (
          <img key={index} src={src} alt={`Last row item ${index + 1}`} />
        ))}
      </div>

      {/* Full-Width Image Section */}
      <div className="full-width-image">
        <img
          src="/ourTeamFullLength.webp"
          alt="Steep Stairs on Tower"
        />
        <div className="full-width-text">
          <h3>Ein Team ist mehr als Summe seiner Mitglieder</h3>
         
        </div>
      </div>
        <InfoBottomBar/>
        <NewsletterSubscription/>
    </div>
  );
};

export default OurTeam;

// done
