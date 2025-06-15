import React from "react";
import { Truck, Store, ShoppingCart } from "lucide-react";

import "./theBlackDogpage.css";
import InfoBottomBar from "../components/infoBottomBar";
import NewsletterSubscription from "../components/NewsletterSubscription";

const BlackDog = () => {
  const slidingText =
    "Have you discovered our new SALE page yet? Go there! | Check out our latest collections! | Special discounts available!";

  // Array of gallery images
  const galleryImages = [
    "/blackDogpagePic1.webp",
    "/blackDogpagePic2.webp",
    "/blackDogpagePic3.webp",
    "/blackDogpagePic4.webp",
  ];

  return (
    <div>
    {/* Hauptinhalt */}
    <div className="content" id="TBDP_content">
      {/* Bildbereich */}
      <div className="image-container">
        <img src="/blackDogtopPic.webp" alt="Team-Fauststoß" />
      </div>

      {/* Textbereich */}
      <div className="text-container">
        <h2>Melem bedeutet Wundbalsam</h2>
        <p>
          Hast du das schwarze, pelzige Wesen in unserem Vintage-Shop oder auf unseren
          Fotos gesehen?
        </p>
        <p>Dürfen wir vorstellen? Das ist Melem!</p>
        <p>
          Melem ist 7 Jahre alt, unser Chow-Chow-Rüde und wahrscheinlich der
          süßeste Hund der Welt. Völlig harmlos, freundlich zu jedem, aber
          niemals aufdringlich. Chows sind bekannt für ihren "Katzencharakter".
        </p>
        <p>
          Er macht oft seine vielen Nickerchen und bevorzugt diese wohl am
          liebsten mitten im Raum. Er lässt sich nicht wirklich stören, also
          geh einfach an ihm vorbei.
        </p>
        <p>
          Falls du jedoch mit einem Hund zu uns kommen möchtest, beachte bitte,
          dass er leider draußen bleiben muss.
        </p>
        <p>
          Leider kennen wir deinen Hund nicht, und Melem kennt ihn auch nicht,
          und ein Möbelgeschäft ist nicht der beste Ort, um das zu ändern.
          Wir bitten um dein Verständnis!
        </p>
        <p>
          Vor unserem Laden findest du eine "Hund-Parkzone", und da wir uns in
          einer Passage befinden, bleibt dein Hund trocken. Unsere Passage wird
          zudem von Kameras und Mitarbeitern überwacht, und wenn du mit uns
          sprichst, behalten wir ihn gerne im Auge.
        </p>
        <p>
          Natürlich machen wir eine Ausnahme für Assistenzhunde. Gib uns einfach
          Bescheid und wir nehmen Melem während deines Besuchs mit nach hinten.
        </p>
      </div>
    </div>

    {/* Galerie-Bereich */}
    <div className="gallery">
      {galleryImages.map((src, index) => (
        <img key={index} src={src} alt={`Galerie-Element ${index + 1}`} />
      ))}
    </div>

    {/* Bildbereich in voller Breite */}
    <div className="full-width-image">
      <img
        src="//wmk.berlin/cdn/shop/files/steep-stairs-on-tower.jpg?v=1700780043&width=640"
        alt="Steile Treppe am Turm"
      />
      <div className="full-width-text">
        <h3>Long Story Short:</h3>

        <p>Von einem Keller in Friedrichshain in den Deutschen Bundestag</p>
      </div>
    </div>

    {/* Info-Bereich */}
    <InfoBottomBar />

    <NewsletterSubscription />
  </div>
  );
};

export default BlackDog;

//done
