import React from "react";
import NewsletterSubscription from "../components/NewsletterSubscription";
import InfoBottomBar from "../components/infoBottomBar";

function Impressum_footer(){
    return (
        <div>
          
            <div className="text-container">
              <h2>
                Impressum
              </h2>
              <p>
                 Wollen Möbel Kaufen?! GmbH<br/>
                 Frankfurter Allee 35/37<br/>
                10247 Berlin<br/>
                Deutschland
              </p>
              <p>
              Tel.: 030 479 06 823
              E-Mail: info@wmk.berlin
              </p>
              <p>
              Registergericht: Berlin Charlottenburg<br/>
                Registernummer: 205312B</p>
              <p> Geschäftsführerin: Enisa Schwachenwald</p>
              <p>
              Umsatzsteuer-Identifikationsnummer: DE323361009</p>
              <p>Zuständige Aufsichtsbehörde für das Angebot audiovisueller Mediendienste:
              Medienanstalt Berlin-Brandenburg (mabb), Kleine Präsidentenstraße 1, 10178 Berlin, Deutschland</p>
              <p>Plattform der EU-Kommission zur Online-Streitbeilegung: https://ec.europa.eu/odr</p>
              <p>Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.</p>
            </div>
          <InfoBottomBar />
          <NewsletterSubscription />
        </div>
    );
};
    
export default Impressum_footer;