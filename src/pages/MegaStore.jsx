import React from "react";
import { Truck, Store, ShoppingCart } from "lucide-react";
import "../styles/VerleihPage.css";
import NewsletterSubscription from "../components/NewsletterSubscription";
import InfoBottomBar from "../components/infoBottomBar";
import VerleihPageForm from "../components/VerleihPageForm";

const MegaStorePage = () => {
  // Array of gallery images
  const galleryImages = [
    "/mega1.webp",
    "/mega2.webp",
    "/mega3.webp",
    "/mega4.webp",
    "/mega5.webp",
    "/mega6.webp",
    "/mega7.webp",
    "/mega8.webp",
    "/mega9.webp",
    "/mega10.webp",
    "/mega11.webp",
    "/mega12.webp",
  ];

  return (
    <div>
      {/* Hauptinhalt */}
      <div className="content" >
        {/* Bildabschnitt */}
        <div className="image-container">
          <img
            src="/megaStore.webp"
            alt="verleih"
          />
        </div>

        {/* Textabschnitt */}
        <div className="text-container1">
          <h2>
          Vintage Mega Store
          </h2>
          <p>
          "Habe echt nicht erwartet dass das hier so groß ist..." ist einer der Sätze die wir fast täglich von unseren Kunden hören.</p>
          <p>
          "Was für eine Auswahl..." oder ein schlichtes "Wow!" kommen eben so oft vor.
          </p>
          <p>
          Und genau das war auch der Anspruch an uns selbst:</p>
          <p> 
          Euch zu begeistern!</p>
          <p>
          Ein weiterer Anspruch war es auch für jeden etwas da zu haben:</p>
          <p>
          Für jung wie alt, für weniger oder mehr Betuchte, für Studenten wie für die Designliebhaber.</p>
          <p>Auch wollten wir für jede Wohnung und für jedes Zimmer jeder Wohnung das passende Stück anbieten.</p>
          <p>Und wir finden, das ist uns ziemlich gut gelungen.</p>
        </div>
      </div>

      {/* Galerieabschnitt */}
      <div className="gallery">
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

export default MegaStorePage;

// done
