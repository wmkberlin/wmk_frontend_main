import React from "react";
import NewsletterSubscription from "../components/NewsletterSubscription";
import InfoBottomBar from "../components/infoBottomBar";

function WithdrawalFooterPage() {
  return (
    <div>
      <div className="text-container">
        <style>
          {`
           h1{
          font-weight: bold; }
            .heading {
              font-size: 2rem; 
              font-weight: 900; 
            }
            h2:not(.heading) {
              font-size: 1.8rem; 
              font-weight: normal;
            }
            p {
              font-weight: normal;
            }
          `}
        </style>

        <h1>Widerrufsbelehrung &amp; Widerrufsformular</h1>

        {/* Make sure to use className, not classname */}
        <h2 className="heading">A. Widerrufsbelehrung</h2>

        <h2>Einleitung</h2>
        <p>
          Verbrauchern steht ein Widerrufsrecht nach folgender Maßgabe zu, wobei
          Verbraucher jede natürliche Person ist, die ein Rechtsgeschäft zu
          Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch
          ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können:
        </p>

        <h2>Widerrufsrecht</h2>
        <p>
          Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
          diesen Vertrag zu widerrufen.
        </p>
        <p>
          Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder
          ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die
          letzte Ware in Besitz genommen haben bzw. hat.
        </p>
        <p>
          Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Wollen Möbel Kaufen?!
          GmbH, Frankfurter Allee 35/37, 10247 Berlin, Deutschland, Tel.: 030
          479 06 823, E-Mail: info@wmk.berlin) mittels einer eindeutigen
          Erklärung (z. B. ein mit der Post versandter Brief oder E-Mail) über
          Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie
          können dafür das beigefügte Muster-Widerrufsformular verwenden, das
          jedoch nicht vorgeschrieben ist.
        </p>
        <p>
          Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung
          über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist
          absenden.
        </p>

        <h2 className="heading">Folgen des Widerrufs</h2>
        <p>
          Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen,
          die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit
          Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie
          eine andere Art der Lieferung als die von uns angebotene, günstigste
          Standardlieferung gewählt haben), unverzüglich und spätestens binnen
          vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über
          Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese
          Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der
          ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen
          wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden
          Ihnen wegen dieser Rückzahlung Entgelte berechnet. Wir können die
          Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben
          oder bis Sie den Nachweis erbracht haben, dass Sie die Waren
          zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist.
        </p>
        <p>
          Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen
          vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses
          Vertrags unterrichten, an uns zurückzusenden oder zu übergeben. Die
          Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von
          vierzehn Tagen absenden.
        </p>
        <p>
          Sie müssen für einen etwaigen Wertverlust der Waren nur aufkommen,
          wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit,
          Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang
          mit ihnen zurückzuführen ist.
        </p>

        <h2 className="heading">
          Ausschluss bzw. vorzeitiges Erlöschen des Widerrufsrechts
        </h2>
        <p>
          Das Widerrufsrecht besteht nicht bei Verträgen zur Lieferung von
          Waren, die nicht vorgefertigt sind und für deren Herstellung eine
          individuelle Auswahl oder Bestimmung durch den Verbraucher maßgeblich
          ist oder die eindeutig auf die persönlichen Bedürfnisse des
          Verbrauchers zugeschnitten sind.
        </p>
        <p>
          Das Widerrufsrecht gilt nicht für Verbraucher, die zum Zeitpunkt des
          Vertragsschlusses keinem Mitgliedstaat der Europäischen Union
          angehören und deren alleiniger Wohnsitz und Lieferadresse zum
          Zeitpunkt des Vertragsschlusses außerhalb der Europäischen Union
          liegen.
        </p>

        <h2>Verbundene/finanzierte Geschäfte</h2>
        <p>
          Wenn Sie diesen Vertrag durch ein Darlehen finanzieren und ihn später
          widerrufen, sind Sie auch an den Darlehensvertrag nicht mehr gebunden,
          sofern beide Verträge eine wirtschaftliche Einheit bilden. Dies ist
          insbesondere dann anzunehmen, wenn wir gleichzeitig Ihr Darlehensgeber
          sind oder wenn sich Ihr Darlehensgeber im Hinblick auf die
          Finanzierung unserer Mitwirkung bedient. Wenn uns das Darlehen bei
          Wirksamwerden des Widerrufs oder bei der Rückgabe der Ware bereits
          zugeflossen ist, tritt Ihr Darlehensgeber im Verhältnis zu Ihnen
          hinsichtlich der Rechtsfolgen des Widerrufs oder der Rückgabe in
          unsere Rechte und Pflichten aus dem finanzierten Vertrag ein.
          Letzteres gilt nicht, wenn der vorliegende Vertrag den Erwerb von
          Finanzinstrumenten (z.B. von Wertpapieren, Devisen oder Derivaten) zum
          Gegenstand hat. Wollen Sie eine vertragliche Bindung so weitgehend wie
          möglich vermeiden, machen Sie von Ihrem Widerrufsrecht Gebrauch und
          widerrufen Sie zudem den Darlehensvertrag, wenn Ihnen auch dafür ein
          Widerrufsrecht zusteht.
        </p>

        <h2>Allgemeine Hinweise</h2>
        <p>
          1) Bitte vermeiden Sie Beschädigungen und Verunreinigungen der Ware.
          Senden Sie die Ware bitte in Originalverpackung mit sämtlichem Zubehör
          und mit allen Verpackungsbestandteilen an uns zurück. Verwenden Sie
          ggf. eine schützende Umverpackung. Wenn Sie die Originalverpackung
          nicht mehr besitzen, sorgen Sie bitte mit einer geeigneten Verpackung
          für einen ausreichenden Schutz vor Transportschäden.
        </p>
        <p>2) Senden Sie die Ware bitte nicht unfrei an uns zurück.</p>
        <p>
          3) Bitte beachten Sie, dass die vorgenannten Ziffern 1-2 nicht
          Voraussetzung für die wirksame Ausübung des Widerrufsrechts sind.
        </p>

        <h2 className="heading">B. Widerrufsformular</h2>
        <p>
          Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses
          Formular aus und senden es zurück.
        </p>
        <p>An</p>
        <p>Wollen Möbel Kaufen?! GmbH</p>
        <p>Frankfurter Allee 35/37</p>
        <p>10247 Berlin</p>
        <p>Deutschland</p>
        <p>E-Mail: info@wmk.berlin</p>
        <p>
          Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen
          Vertrag über den Kauf der folgenden Waren (*)/die Erbringung der
          folgenden Dienstleistung (*)
        </p>
        <p>_______________________________________________________</p>
        <p>Bestellt am (*) ____________ / erhalten am (*) __________________</p>
        <p>________________________________________________________</p>
        <p>Name des/der Verbraucher(s)</p>
        <p>________________________________________________________</p>
        <p>Anschrift des/der Verbraucher(s)</p>
        <p>________________________________________________________</p>
        <p>Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)</p>
        <p>_________________________</p>
        <p>Datum</p>
        <p>(*) Unzutreffendes streichen</p>
      </div>
      <InfoBottomBar />
      <NewsletterSubscription />
    </div>
  );
}

export default WithdrawalFooterPage;
