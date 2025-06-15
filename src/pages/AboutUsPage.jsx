import React from "react";
import { Truck, Store, ShoppingCart } from "lucide-react";

import "./aboutusPage.css";
import NewsletterSubscription from "../components/NewsletterSubscription";
import InfoBottomBar from "../components/infoBottomBar";
import StairImage from "../components/StairImage";

const AboutUsPage = () => {
  // Array of gallery images
  const galleryImages = [
    "/aboutUs-img1.webp",
    "/aboutUs-img2.webp",
    "/aboutUs-img3.webp",
    "/aboutUs-img4.webp",
    "/aboutUs-img5.webp",
    "/aboutUs-img6.webp",
    "/aboutUs-img7.webp",
    "/aboutUs-img8.webp",
    "/aboutUs-img9.webp",
    "/aboutUs-img10.webp",
    "/aboutUs-img11.webp",
    "/aboutUs-img12.webp",
    "/aboutUs-img13.webp",
    "/aboutUs-img14.webp",
    "/aboutUs-img15.webp",
    "/aboutUs-img16.jpg",
  ];

  return (
    <div>
      {/* Hauptinhalt */}
      <div className="content">
        {/* Bildabschnitt */}
        <div className="image-container">
          <img
            src="//wmk.berlin/cdn/shop/files/2014-04-23_18.33.11_-_Kopie.jpg?v=1700090300&width=640"
            alt="Vintage Möbel"
          />
        </div>

        {/* Textabschnitt */}
        <div className="text-container">
          <h2>
            Aus einem Friedrichshainer Keller bis in den Deutschen Bundestag
          </h2>
          <p>
            Aus Leidenschaft für die schönen Dinge aus der Vergangenheit machten
            wir 2014 unseren ersten Schritte.
          </p>
          <p>
            Unser allererster Verkauf ist uns natürlich in Erinnerung geblieben.
            Das waren 3 hübsche jedoch ziemlich abgerockte Barhocker die wir
            vorher in unserem sehr kleinem Keller recht aufwendig restauriert
            haben.
          </p>
          <p>
          Heute, 10 Jahre später, haben wir als führender Anbieter den Vintage Möbel Markt nicht nur stark geprägt, wir haben ihn auf einen ganz neuen Level gehoben.
          </p>
          <p> Unsere Möbel stehen heute nicht nur in jedem Bundesland, sie findet man auch in nah zu jeder europäischen Metropole, und selbst nach China und Afrika wurden sie bereits verschifft.
          </p>
          <p>
          Auch sah man sie in vielen Filmen, auf verschiedenen Theaterbühnen und, darauf sind wir natürlich besonders stolz, unsere Möbel haben es sogar bis in den Deutschen Bundestag geschafft.
          </p>
          <p>Zu verdanken haben wir diesen Erfolg unseren fleißigen Mitarbeitern und euch, unseren treuen Kunden. </p>
          <p>Ihr habt unsere Leidenschaft für Nachhaltigkeit, unsere Detailverliebheit und Kompromisslosigkeit beim Service erkannt und unsere Erfolgsstory möglich gemacht.</p>
          <p>Danke dafür.</p>
        </div>
      </div>

      {/* Galerieabschnitt */}
      <div className="gallery">
        {galleryImages.map((src, index) => (
          <img key={index} src={src} alt={`Galerieelement ${index + 1}`} />
        ))}
      </div>

      {/* Vollbreiter Bildabschnitt */}
     <StairImage/>

      <InfoBottomBar />

      {/* Newsletter Abschnitt */}
      <NewsletterSubscription />
    </div>
  );
};

export default AboutUsPage;

// done
