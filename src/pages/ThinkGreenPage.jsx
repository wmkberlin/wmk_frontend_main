import React from "react";
import { Truck, Store, ShoppingCart } from "lucide-react";

import "./aboutusPage.css";
import NewsletterSubscription from "../components/NewsletterSubscription";
import InfoBottomBar from "../components/infoBottomBar";
import StairImage from "../components/StairImage";

const ThinkGreenPage = () => {
  return (
    <div>
      {/* Hauptinhalt */}
      <div className="content">
        {/* Bildabschnitt */}
        <div className="image-container">
          <img src="/thinkGreenPagePic.webp" alt="Vintage Möbel" />
        </div>

        {/* Textabschnitt */}
        <div className="text-container">
          <h2>Nachhaltiger geht's nicht!</h2>
          <p>
            Auch wenn es in den letzten Jahren fast in allen Branchen große
            Bemühungen die Umwelt zu schonen gibt, für die Möbelbranche gilt es
            leider immer noch:
          </p>
          <p>Wirklich nachhaltig sind nur Vintage Möbel.</p>
          <p>
            Mit dem Kauf eines gebrauchten Möbelstücks werden nicht nur diese
            schönen Gegenstände für die Nachwelt erhalten, es werden auch
            wertvolle Ressourcen eingespart, und eine ganze Menge CO2 Ausstoßes
            verhindert.
          </p>
          <p>
            {" "}
            So werden, nach dem Lt. Thünen Report 31, aus dem Jahr 2015, in
            Deutschland pro 1 kg neu hergestellter Holzmöbel, 8 kg CO₂
            verursacht. Bei importierten Möbel, z.B. aus dem Fernost, sieht die
            Bilanz noch schlechter aus, zudem der Transport dieser Möbel auch
            eine nicht unwesentliche Rolle spielt.
          </p>
          <p>
            Wir sind nicht naiv, oder gar größenwahnsinnig, und wir glauben
            nicht daran dass gebrauchte Möbel der entscheidende Faktor beim
            Umweltschutz sind oder jemals sein werden. Da bedarf es viel mehr
            Anstrengungen von uns allen und zwar in allen Bereichen des Lebens.
          </p>
          <p>
            Doch beim Möbeleinkauf ist es vergleichbar sehr einfach
            umweltbewusst zu handeln. Du hast mit deinem Besuch unserer Seite
            doch schon den ersten Schritt gemacht.
          </p>
          <p>
            Den Schritt in die richtige Richtung:
            <h3>
              Unsere Kunden sparen jedes Jahr mehr als 1000 Tonnen* CO2 ein.
            </h3>
          </p>
          <p>
            * Berechnung nach allgemein anerkannten Lt. Thünen Report 31 aus
            2015
          </p>
        </div>
      </div>

      {/* Vollbreiter Bildabschnitt */}
      <StairImage/>


      <InfoBottomBar />

      {/* Newsletter Abschnitt */}
      <NewsletterSubscription />
    </div>
  );
};

export default ThinkGreenPage;

// done
