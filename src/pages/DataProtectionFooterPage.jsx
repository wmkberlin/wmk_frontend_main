import React from "react";
import NewsletterSubscription from "../components/NewsletterSubscription";
import InfoBottomBar from "../components/infoBottomBar";

function DataProtectionFooterPage() {
  return (
    <div>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <style>
          {`
        h2 {
          font-size: 1.8rem;
          font-weight: 700; /* Make h2 big and bold */
        }
        p,li,a,h3,h4,h5,h6 {
          font-weight: 400; 
        }
        a {
          text-decoration: underline;
        }
        
      `}
        </style>
        <h1>Datenschutzerklärung</h1>

        <h2>1) Einleitung und Kontaktdaten des Verantwortlichen</h2>
        <p>
          1.1 Wir freuen uns, dass Sie unsere Website besuchen und bedanken uns
          für Ihr Interesse. Im Folgenden informieren wir Sie über den Umgang
          mit Ihren personenbezogenen Daten bei der Nutzung unserer Website.
          Personenbezogene Daten sind hierbei alle Daten, mit denen Sie
          persönlich identifiziert werden können.
        </p>
        <p>
          1.2 Verantwortlicher für die Datenverarbeitung auf dieser Website im
          Sinne der Datenschutz-Grundverordnung (DSGVO) ist Wollen Möbel
          Kaufen?! GmbH, Frankfurter Allee 35/37, 10247 Berlin, Deutschland,
          Tel.: 030 479 06 823, E-Mail: info@wmk.berlin. Der für die
          Verarbeitung von personenbezogenen Daten Verantwortliche ist diejenige
          natürliche oder juristische Person, die allein oder gemeinsam mit
          anderen über die Zwecke und Mittel der Verarbeitung von
          personenbezogenen Daten entscheidet.
        </p>

        <h2>2) Datenerfassung beim Besuch unserer Website</h2>
        <p>
          2.1 Bei der bloß informatorischen Nutzung unserer Website, also wenn
          Sie sich nicht registrieren oder uns anderweitig Informationen
          übermitteln, erheben wir nur solche Daten, die Ihr Browser an den
          Seitenserver übermittelt (sog. „Server-Logfiles“). Wenn Sie unsere
          Website aufrufen, erheben wir die folgenden Daten, die für uns
          technisch erforderlich sind, um Ihnen die Website anzuzeigen:
        </p>
        <ul>
          <li>Unsere besuchte Website</li>
          <li>Datum und Uhrzeit zum Zeitpunkt des Zugriffes</li>
          <li>Menge der gesendeten Daten in Byte</li>
          <li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li>
          <li>Verwendeter Browser</li>
          <li>Verwendetes Betriebssystem</li>
          <li>Verwendete IP-Adresse (ggf. in anonymisierter Form)</li>
        </ul>
        <p>
          Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis
          unseres berechtigten Interesses an der Verbesserung der Stabilität und
          Funktionalität unserer Website. Eine Weitergabe oder anderweitige
          Verwendung der Daten findet nicht statt. Wir behalten uns allerdings
          vor, die Server-Logfiles nachträglich zu überprüfen, sollten konkrete
          Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.
        </p>
        <p>
          2.2 Diese Website nutzt aus Sicherheitsgründen und zum Schutz der
          Übertragung personenbezogener Daten und anderer vertraulicher Inhalte
          (z.B. Bestellungen oder Anfragen an den Verantwortlichen) eine
          SSL-bzw. TLS-Verschlüsselung. Sie können eine verschlüsselte
          Verbindung an der Zeichenfolge „https://“ und dem Schloss-Symbol in
          Ihrer Browserzeile erkennen.
        </p>

        <h2>3) Hosting &amp; Content-Delivery-Network</h2>
        <p>
          <strong>Shopify</strong>
          <br />
          Für das Hosting unserer Website und die Darstellung der Seiteninhalte
          nutzen wir das System des folgenden Anbieters: Shopify International
          Limited, Victoria Buildings, 2. Etage, 1-2 Haddington Road, Dublin 4,
          D04 XN32, Irland („Shopify“)
        </p>
        <p>
          Daten werden zudem übertragen an: Shopify Inc., 150 Elgin St, Ottawa,
          ON K2P 1L4, Kanada
        </p>
        <p>
          Sämtliche auf unserer Website erhobenen Daten werden auf den Servern
          des Anbieters verarbeitet. Wir haben mit dem Anbieter einen
          Auftragsverarbeitungsvertrag geschlossen, der den Schutz der Daten
          unserer Seitenbesucher sicherstellt und eine unberechtigte Weitergabe
          an Dritte untersagt.
        </p>
        <p>
          Bei einer Datenübermittlung nach Kanada ist ein angemessenes
          Datenschutzniveau durch einen Angemessenheitsbeschluss der
          Europäischen Kommission gewährleistet.
        </p>

        <h2>4) Cookies</h2>
        <p>
          Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung
          bestimmter Funktionen zu ermöglichen, verwenden wir Cookies, also
          kleine Textdateien, die auf Ihrem Endgerät abgelegt werden. Teilweise
          werden diese Cookies nach Schließen des Browsers automatisch wieder
          gelöscht (sog. „Session-Cookies“), teilweise verbleiben diese Cookies
          länger auf Ihrem Endgerät und ermöglichen das Speichern von
          Seiteneinstellungen (sog. „persistente Cookies“). Im letzteren Fall
          können Sie die Speicherdauer der Übersicht zu den Cookie-Einstellungen
          Ihres Webbrowsers entnehmen.
        </p>
        <p>
          Sofern durch einzelne von uns eingesetzte Cookies auch
          personenbezogene Daten verarbeitet werden, erfolgt die Verarbeitung
          gemäß Art. 6 Abs. 1 lit. b DSGVO entweder zur Durchführung des
          Vertrages, gemäß Art. 6 Abs. 1 lit. a DSGVO im Falle einer erteilten
          Einwilligung oder gemäß Art. 6 Abs. 1 lit. f DSGVO zur Wahrung unserer
          berechtigten Interessen an der bestmöglichen Funktionalität der
          Website sowie einer kundenfreundlichen und effektiven Ausgestaltung
          des Seitenbesuchs.
        </p>
        <p>
          Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
          Cookies informiert werden und einzeln über deren Annahme entscheiden
          oder die Annahme von Cookies für bestimmte Fälle oder generell
          ausschließen können.
        </p>
        <p>
          Bitte beachten Sie, dass bei Nichtannahme von Cookies die
          Funktionalität unserer Website eingeschränkt sein kann.
        </p>

        <h2>5) Kontaktaufnahme</h2>

        <h3>5.1 Eigene Bewertungserinnerung</h3>
        <p>
          Ausschließlich auf Basis Ihrer ausdrücklichen Einwilligung gemäß Art.
          6 Abs. 1 lit. a DSGVO verwenden wir Ihre E-Mailadresse zur einmaligen
          Erinnerung an die Abgabe einer Bewertung Ihrer Bestellung. Sie können
          Ihre Einwilligung jederzeit durch eine Nachricht an den für die
          Datenverarbeitung Verantwortlichen widerrufen.
        </p>

        <h3>5.2 Google Calendar</h3>
        <p>
          Für die Bereitstellung einer Online-Terminbuchungsfunktion nutzen wir
          die Dienste des folgenden Anbieters: Google Ireland Limited, Gordon
          House, 4 Barrow St, Dublin, D04 E5W5, Irland
        </p>
        <p>Daten können zudem übertragen werden an: Google LLC, USA</p>
        <p>
          Zum Zwecke der Terminvergabe werden gemäß Art. 6 Abs. 1 lit. b DSGVO
          Vor- und Zuname sowie Mailadresse (und ggf. die Telefonnummer, sofern
          ein telefonischer Termin gewünscht ist) erhoben und gemäß Art. 6 Abs.
          1 lit. f DSGVO auf Basis unseres berechtigten Interesses an einem
          effektiven Kundenmanagement und einer effizienten Terminverwaltung an
          den Anbieter übermittelt und dort für die Terminorganisation
          gespeichert.
        </p>
        <p>
          Nach Abhaltung des Termins bzw. nach Ablauf des vereinbarten
          Terminzeitraums werden Ihre Daten vom Anbieter gelöscht.
        </p>
        <p>
          Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag
          geschlossen, der den Schutz der Daten unserer Seitenbesucher
          sicherstellt und eine unberechtigte Weitergabe an Dritte untersagt.
        </p>
        <p>
          Für Datenübermittlungen in die USA hat sich der Anbieter dem
          EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen,
          das auf Basis eines Angemessenheitsbeschlusses der Europäischen
          Kommission die Einhaltung des europäischen Datenschutzniveaus
          sicherstellt.
        </p>

        <h3>5.3 WhatsApp-Business</h3>
        <p>
          Wir bieten Besuchern unserer Webseite die Möglichkeit, mit uns über
          den Nachrichtendienst WhatsApp der WhatsApp Ireland Limited, 4 Grand
          Canal Square, Grand Canal Harbour, Dublin 2, Irland, in Kontakt zu
          treten. Hierfür verwenden wir die sog. „Business-Version“ von
          WhatsApp.
        </p>
        <p>
          Sofern Sie uns anlässlich eines konkreten Geschäfts (beispielsweise
          einer getätigten Bestellung) per WhatsApp kontaktieren, speichern und
          verwenden wir die von Ihnen bei WhatsApp genutzte Mobilfunknummer
          sowie – falls bereitgestellt – Ihren Vor- und Nachnamen gemäß Art. 6
          Abs. 1 lit. b. DSGVO zur Bearbeitung und Beantwortung Ihres Anliegens.
          Auf Basis derselben Rechtsgrundlage werden wir Sie per WhatsApp
          gegebenenfalls um die Bereitstellung weiterer Daten (Bestellnummer,
          Kundennummer, Anschrift oder E-Mailadresse) bitten, um Ihre Anfrage
          einem bestimmten Vorgang zuordnen zu können.
        </p>
        <p>
          Nutzen Sie unseren WhatsApp-Kontakt für allgemeine Anfragen (etwa zum
          Leistungsspektrum, zu Verfügbarkeiten oder zu unserem
          Internetauftritt) speichern und verwenden wir die von Ihnen bei
          WhatsApp genutzte Mobilfunknummer sowie – falls bereitgestellt – Ihren
          Vor- und Nachnamen gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres
          berechtigten Interesses an der effizienten und zeitnahen
          Bereitstellung der gewünschten Informationen.
        </p>
        <p>
          Ihre Daten werden stets nur zur Beantwortung Ihres Anliegens per
          WhatsApp verwendet. Eine Weitergabe an Dritte findet nicht statt.
        </p>
        <p>
          Bitte beachten Sie, dass WhatsApp Business Zugriff auf das Adressbuch
          des von uns hierfür verwendeten mobilen Endgeräts erhält und im
          Adressbuch gespeicherte Telefonnummern automatisch an einen Server des
          Mutterkonzerns Meta Platforms Inc. in den USA überträgt. Für den
          Betrieb unseres WhatsApp-Business-Kontos verwenden wir ein mobiles
          Endgerät, in dessen Adressbuch ausschließlich die
          WhatsApp-Kontaktdaten solcher Nutzer gespeichert werden, die mit uns
          per WhatsApp auch in Kontakt getreten sind.
        </p>
        <p>
          Hierdurch wird sichergestellt, dass jede Person, deren
          WhatsApp-Kontaktdaten in unserem Adressbuch gespeichert sind, bereits
          bei erstmaliger Nutzung der App auf seinem Gerät durch Akzeptanz der
          WhatsApp-Nutzungsbedingungen in die Übermittlung seiner
          WhatsApp-Telefonnummer aus den Adressbüchern seiner Chat-Kontakte
          gemäß Art. 6 Abs. 1 lit. a DSGVO eingewilligt hat. Eine Übermittlung
          von Daten solcher Nutzer, die WhatsApp nicht verwenden und/oder uns
          nicht über WhatsApp kontaktiert haben, wird insofern ausgeschlossen.
        </p>
        <p>
          Zweck und Umfang der Datenerhebung und die weitere Verarbeitung und
          Nutzung der Daten durch WhatsApp sowie Ihre diesbezüglichen Rechte und
          Einstellungsmöglichkeiten zum Schutz Ihrer Privatsphäre entnehmen Sie
          bitte den Datenschutzhinweisen von WhatsApp:&nbsp;
          <a
            href="https://www.whatsapp.com/legal/?eea=1#privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.whatsapp.com/legal/?eea=1#privacy-policy
          </a>
        </p>
        <p>
          Im Rahmen der oben genannten Verarbeitungen kann es zu
          Datenübertragungen an Server von Meta Platforms Inc. in den USA
          kommen.
        </p>
        <p>
          Für Datenübermittlungen in die USA hat sich der Anbieter dem
          EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen,
          das auf Basis eines Angemessenheitsbeschlusses der Europäischen
          Kommission die Einhaltung des europäischen Datenschutzniveaus
          sicherstellt.
        </p>

        <h3>5.4 Funktion für Preisvorschläge</h3>
        <p>
          Auf unserer Website bieten wir Kunden bei ausgewählten Artikeln die
          Möglichkeit, uns über ein elektronisches Formular einen Preisvorschlag
          zu unterbreiten, zu dem sie den Artikel erwerben würden.
        </p>
        <p>
          Gemäß Art. 6 Abs. 1 lit. b DSGVO erheben und speichern wir im Zuge der
          elektronischen Übermittlung des Formulars gewisse personenbezogene
          Daten des Anfragenden (etwa Name und Mailadresse) für die Bearbeitung
          des Preisvorschlags und verwenden diese, um den Anfragenden im
          Anschluss über eine Ablehnung oder Annahme des Vorschlags zu
          informieren oder ihm einen Gegenvorschlag zu unterbreiten. Die über
          das Formular bereitgestellten Daten werden streng zweckgebunden zur
          Erhebung und Zuordnung des Preisvorschlags sowie für eine Entscheidung
          über dessen Annahme zur etwaigen Vorbereitung eines Vertragsschlusses
          verwendet. Nach abschließender Bearbeitung einer
          Preisvorschlagsanfrage werden die personenbezogenen Daten gelöscht,
          sofern keine gesetzlichen Aufbewahrungsfristen entgegenstehen.
        </p>

        <h3>5.5 Weitere Kontaktaufnahme</h3>
        <p>
          Im Rahmen der Kontaktaufnahme mit uns (z.B. per Kontaktformular oder
          E-Mail) werden – ausschließlich zum Zweck der Bearbeitung und
          Beantwortung Ihres Anliegens und nur im dafür erforderlichen Umfang –
          personenbezogene Daten verarbeitet.
        </p>
        <p>
          Rechtsgrundlage für die Verarbeitung dieser Daten ist unser
          berechtigtes Interesse an der Beantwortung Ihres Anliegens gemäß Art.
          6 Abs. 1 lit. f DSGVO. Zielt Ihre Kontaktierung auf einen Vertrag ab,
          so ist zusätzliche Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1
          lit. b DSGVO. Ihre Daten werden gelöscht, wenn sich aus den Umständen
          entnehmen lässt, dass der betroffene Sachverhalt abschließend geklärt
          ist und sofern keine gesetzlichen Aufbewahrungspflichten
          entgegenstehen.
        </p>

        <h2>6) Kommentarfunktion</h2>
        <p>
          Im Rahmen der Kommentarfunktion auf dieser Website werden neben Ihrem
          Kommentar auch Angaben zum Zeitpunkt der Erstellung des Kommentars und
          der von Ihnen gewählte Kommentatorenname gespeichert und auf dieser
          Website veröffentlicht. Ferner wird Ihre IP-Adresse mitprotokolliert
          und gespeichert. Diese Speicherung der IP-Adresse erfolgt aus
          Sicherheitsgründen und für den Fall, dass die betroffene Person durch
          einen abgegebenen Kommentar die Rechte Dritter verletzt oder
          rechtswidrige Inhalte postet. Ihre E-Mailadresse benötigen wir, um mit
          Ihnen in Kontakt zu treten, falls ein Dritter Ihren veröffentlichten
          Inhalt als rechtswidrig beanstanden sollte.
        </p>
        <p>
          Rechtsgrundlagen für die Speicherung Ihrer Daten sind die Art. 6 Abs.
          1 lit. b und f DSGVO. Wir behalten uns vor, Kommentare zu löschen,
          wenn sie von Dritten als rechtswidrig beanstandet werden.
        </p>

        <h2>7) Datenverarbeitung bei Eröffnung eines Kundenkontos</h2>
        <p>
          Gemäß Art. 6 Abs. 1 lit. b DSGVO werden personenbezogene Daten im
          jeweils erforderlichen Umfang weiterhin erhoben und verarbeitet, wenn
          Sie uns diese bei der Eröffnung eines Kundenkontos mitteilen. Welche
          Daten für die Kontoeröffnung erforderlich sind, entnehmen Sie der
          Eingabemaske des entsprechenden Formulars auf unserer Website.
        </p>
        <p>
          Eine Löschung Ihres Kundenkontos ist jederzeit möglich und kann durch
          eine Nachricht an die o.g. Adresse des Verantwortlichen erfolgen. Nach
          Löschung Ihres Kundenkontos werden Ihre Daten gelöscht, sofern alle
          darüber geschlossenen Verträge vollständig abgewickelt sind, keine
          gesetzlichen Aufbewahrungsfristen entgegenstehen und unsererseits kein
          berechtigtes Interesse an der Weiterspeicherung fortbesteht.
        </p>

        <h2>8) Nutzung von Kundendaten zur Direktwerbung</h2>

        <h3>8.1 Anmeldung zu unserem E-Mail-Newsletter</h3>
        <p>
          Wenn Sie sich zu unserem E-Mail Newsletter anmelden, übersenden wir
          Ihnen regelmäßig Informationen zu unseren Angeboten. Pflichtangabe für
          die Übersendung des Newsletters ist allein Ihre E-Mailadresse. Die
          Angabe weiterer Daten ist freiwillig und wird verwendet, um Sie
          persönlich ansprechen zu können. Für den Newsletter-Versand verwenden
          wir das sog. Double Opt-in Verfahren, mit dem sichergestellt wird,
          dass Sie Newsletter erst erhalten, wenn Sie uns durch Betätigung eines
          an die angegebene Mailadresse versandten Verifizierungslinks
          ausdrücklich Ihre Einwilligung in den Newsletterempfang bestätigt
          haben.
        </p>
        <p>
          Mit der Aktivierung des Bestätigungslinks erteilen Sie uns Ihre
          Einwilligung für die Nutzung Ihrer personenbezogenen Daten gemäß Art.
          6 Abs. 1 lit. a DSGVO. Hierbei speichern wir Ihre vom Internet
          Service-Provider (ISP) eingetragene IP-Adresse sowie das Datum und die
          Uhrzeit der Anmeldung, um einen möglichen Missbrauch Ihrer
          E-Mail-Adresse zu einem späteren Zeitpunkt nachvollziehen zu können.
          Die von uns bei der Anmeldung zum Newsletter erhobenen Daten werden
          streng zweckgebunden verwendet.
        </p>
        <p>
          Sie können den Newsletter jederzeit über den dafür vorgesehenen Link
          im Newsletter oder durch entsprechende Nachricht an den eingangs
          genannten Verantwortlichen abbestellen. Nach erfolgter Abmeldung wird
          Ihre E-Mailadresse unverzüglich in unserem Newsletter-Verteiler
          gelöscht, soweit Sie nicht ausdrücklich in eine weitere Nutzung Ihrer
          Daten eingewilligt haben oder wir uns eine darüberhinausgehende
          Datenverwendung vorbehalten, die gesetzlich erlaubt ist und über die
          wir Sie in dieser Erklärung informieren.
        </p>

        <h3>8.2 Shopify Email</h3>
        <p>
          Der Versand unserer E-Mail-Newsletter erfolgt über diesen Anbieter:
          Shopify International Limited, Victoria Buildings, 2. Etage, 1-2
          Haddington Road, Dublin 4, D04 XN32, Irland
        </p>
        <p>
          Daten werden zudem übertragen an: Shopify Inc., 150 Elgin St, Ottawa,
          ON K2P 1L4, Kanada
        </p>
        <p>
          Auf Basis unseres berechtigten Interesses an einem effektiven und
          nutzerfreundlichen Newsletter-Marketing geben wir Ihre bei der
          Newsletter-Anmeldung bereitgestellten Daten gem. Art. 6 Abs. 1 lit. f
          DSGVO an diesen Anbieter weiter, damit dieser den Newsletterversand in
          unserem Auftrag übernimmt.
        </p>
        <p>
          Vorbehaltlich Ihrer ausdrücklichen Einwilligung gem. Art. 6 Abs. 1
          lit. a DSGVO führt der Anbieter darüber hinaus eine statistische
          Erfolgsauswertung von Newsletter-Kampagnen mittels Web Beacons bzw.
          Zählpixel in den versendeten E-Mails durch, die Öffnungsraten und
          spezifische Interaktionen mit den Inhalten des Newsletters messen
          können. Dabei werden auch Endgeräteinformationen (z.B. Zeitpunkt des
          Aufrufs, IP-Adresse, Browsertyp und Betriebssystem) erhoben und
          ausgewertet, aber nicht mit anderen Datenbeständen zusammengeführt.
        </p>
        <p>
          Ihre Einwilligung zum Newsletter-Tracking können Sie jederzeit mit
          Wirkung für die Zukunft widerrufen.
        </p>
        <p>
          Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag
          geschlossen, der die Daten unserer Seitenbesucher schützt und eine
          Weitergabe an Dritte untersagt.
        </p>
        <p>
          Bei einer Datenübermittlung nach Kanada ist ein angemessenes
          Datenschutzniveau durch einen Angemessenheitsbeschluss der
          Europäischen Kommission gewährleistet.
        </p>

        <h3>8.3 Warenkorb-Erinnerungen per E-Mail</h3>
        <p>
          Im Falle des Abbruchs Ihres Einkaufs bei uns vor Abschluss der
          Bestellung haben Sie die Möglichkeit, per E-Mail einmalig an den
          Inhalt Ihres virtuellen Warenkorbs erinnert zu werden.
        </p>
        <p>
          Pflichtangabe für die Übersendung dieser Erinnerung ist allein Ihre
          E-Mailadresse. Die Angabe weiterer Daten ist freiwillig und wird ggf.
          verwendet, um Sie persönlich ansprechen zu können. Für den Mailversand
          verwenden wir das sog. Double Opt-in Verfahren, mit dem sichergestellt
          wird, dass Sie eine Benachrichtigung erst erhalten, wenn Sie uns durch
          Betätigung eines an die angegebene Mailadresse versandten
          Verifizierungslinks ausdrücklich Ihre diesbezügliche Einwilligung
          bestätigt haben.
        </p>
        <p>
          Mit der Aktivierung des Bestätigungslinks erteilen Sie uns Ihre
          Einwilligung für die Nutzung Ihrer personenbezogenen Daten gemäß Art.
          6 Abs. 1 lit. a DSGVO für die Versendung einer Warenkorb-Erinnerung.
          Hierbei speichern wir Ihre vom Internet Service-Provider (ISP)
          eingetragene IP-Adresse sowie das Datum und die Uhrzeit der Anmeldung,
          um einen möglichen Missbrauch Ihrer E-Mail-Adresse zu einem späteren
          Zeitpunkt nachvollziehen zu können. Die von uns bei der Anmeldung zu
          unserem E-Mail-Benachrichtigungsdienst erhobenen Daten werden streng
          zweckgebunden verwendet.
        </p>
        <p>
          Sie können die Warenkorb-Erinnerungen jederzeit durch entsprechende
          Nachricht an den eingangs genannten Verantwortlichen abbestellen. Nach
          erfolgter Abmeldung wird Ihre E-Mailadresse unverzüglich aus unserem
          hierfür eingerichteten Verteiler gelöscht, soweit Sie nicht
          ausdrücklich in eine weitere Nutzung Ihrer Daten eingewilligt haben
          oder wir uns eine darüber hinausgehende Datenverwendung vorbehalten,
          die gesetzlich erlaubt ist und über die wir Sie in dieser Erklärung
          informieren.
        </p>

        <h2>9) Datenverarbeitung zur Bestellabwicklung</h2>

        <h3>
          9.1 Übermittlung von Bilddateien zur Bestellabwicklung per E-Mail
        </h3>
        <p>
          Auf unserer Website bieten wir Kunden die Möglichkeit, durch die
          Übermittlung von Bilddateien per E-Mail die Personalisierung von
          Produkten zu beauftragen. Dabei wird das eingereichte Bildmotiv als
          Vorlage für die Personalisierung des gewählten Produktes verwendet.
        </p>
        <p>
          Über die auf der Website mitgeteilte Mailadresse kann der Kunde eine
          oder mehrere Bilddateien aus dem Speicher des verwendeten Endgerätes
          an uns übermitteln. Wir erfassen, speichern und verwenden die so
          übermittelten Dateien daraufhin ausschließlich zur Anfertigung des
          personalisierten Produktes im Sinne der jeweiligen
          Leistungsbeschreibung auf unserer Website. Sofern die übermittelten
          Bilddateien zur Anfertigung und Abwicklung der Bestellung an spezielle
          Dienstleister weitergegeben werden, werden Sie hierüber in den
          folgenden Absätzen explizit informiert. Eine darüberhinausgehende
          Weitergabe erfolgt nicht. Sofern die übermittelten Dateien bzw. die
          digitalen Motive personenbezogene Daten (insbesondere Abbildungen von
          identifizierbaren Personen) enthalten, erfolgen sämtliche soeben
          benannten Verarbeitungsvorgänge ausschließlich zum Zwecke der
          Abwicklung Ihrer Online-Bestellung gemäß Art. 6 Abs. 1 lit. b DSGVO.
        </p>
        <p>
          Nach abschließender Abwicklung der Bestellung werden die übermittelten
          Bilddateien automatisch und vollständig gelöscht.
        </p>

        <h3>
          9.2 Weitergabe von personenbezogenen Daten an Transportunternehmen und
          Kreditinstitute
        </h3>
        <p>
          Soweit für die Vertragsabwicklung zu Liefer- und Zahlungszwecken
          erforderlich, werden die von uns erhobenen personenbezogenen Daten
          gemäß Art. 6 Abs. 1 lit. b DSGVO an das beauftragte
          Transportunternehmen und das beauftragte Kreditinstitut weitergegeben.
        </p>
        <p>
          Sofern wir Ihnen auf Grundlage eines entsprechenden Vertrages
          Aktualisierungen für Waren mit digitalen Elementen oder für digitale
          Produkte schulden, verarbeiten wir die von Ihnen bei der Bestellung
          übermittelten Kontaktdaten (Name, Anschrift, Mailadresse), um Sie im
          Rahmen unserer gesetzlichen Informationspflichten gemäß Art. 6 Abs. 1
          lit. c DSGVO auf geeignetem Kommunikationsweg (etwa postalisch oder
          per Mail) über anstehende Aktualisierungen im gesetzlich vorgesehenen
          Zeitraum persönlich zu informieren. Ihre Kontaktdaten werden hierbei
          streng zweckgebunden für Mitteilungen über von uns geschuldete
          Aktualisierungen verwendet und zu diesem Zweck durch uns nur insoweit
          verarbeitet, wie dies für die jeweilige Information erforderlich ist.
        </p>
        <p>
          Zur Abwicklung Ihrer Bestellung arbeiten wir ferner mit dem / den
          nachstehenden Dienstleister(n) zusammen, die uns ganz oder teilweise
          bei der Durchführung geschlossener Verträge unterstützen. An diese
          Dienstleister werden nach Maßgabe der folgenden Informationen gewisse
          personenbezogene Daten übermittelt.
        </p>

        <h3>9.3 Zusammenarbeit mit externen Versandpartnern</h3>
        <p>
          Zur Erfüllung unserer vertraglichen Pflichten unseren Kunden gegenüber
          arbeiten wir mit externen Versandpartnern zusammen. Wir geben Ihren
          Namen sowie Ihre Lieferadresse und, soweit für die Lieferung
          erforderlich Ihre Telefonnummer, ausschließlich zu Zwecken der
          Warenlieferung Art. 6 Abs. 1 lit. b DSGVO an einen von uns
          ausgewählten Versandpartner weiter.
        </p>

        <h3>9.4 SendCloud</h3>
        <p>
          Für die Bestellabwicklung nutzen wir den folgenden Anbieter: SendCloud
          GmbH, Kanalstr. 10, 80538 München, Deutschland
        </p>
        <p>
          Name, Anschrift sowie gegebenenfalls weitere personenbezogene Daten
          werden gemäß Art. 6 Abs. 1 lit. b DSGVO ausschließlich zum Zwecke der
          Abwicklung der Online-Bestellung an den Anbieter weitergegeben. Die
          Weitergabe Ihrer Daten erfolgt hierbei nur, soweit dies für die
          Abwicklung der Bestellung tatsächlich erforderlich ist.
        </p>

        <h3>9.5 Weitergabe personenbezogener Daten an Versanddienstleister</h3>
        <p>
          - Als Transportdienstleister nutzen wir den nachstehenden Anbieter:
          Cargoboard GmbH &amp; Co. KG, Technologiepark 22, 33100 Paderborn
        </p>
        <p>
          Wir geben Ihre E-Mail-Adresse und/oder Telefonnummer gemäß Art. 6 Abs.
          1 lit. a DSGVO vor der Zustellung der Ware zum Zweck der Abstimmung
          eines Liefertermins bzw. zur Lieferankündigung an den Anbieter weiter,
          sofern Sie hierfür im Bestellprozess Ihre ausdrückliche Einwilligung
          erteilt haben. Anderenfalls geben wir zum Zwecke der Zustellung gemäß
          Art. 6 Abs. 1 lit. b DSGVO nur den Namen des Empfängers und die
          Lieferadresse an den Anbieter weiter. Die Weitergabe erfolgt nur,
          soweit dies für die Warenlieferung erforderlich ist. In diesem Fall
          ist eine vorherige Abstimmung des Liefertermins mit dem Anbieter bzw.
          die Lieferankündigung nicht möglich.
        </p>
        <p>
          Die Einwilligung kann jederzeit mit Wirkung für die Zukunft gegenüber
          dem oben bezeichneten Verantwortlichen oder gegenüber dem Anbieter
          widerrufen werden.
        </p>
        <p>- DHL Paket GmbH, Sträßchensweg 10, 53113 Bonn, Deutschland</p>
        <p>
          Wir geben Ihre E-Mail-Adresse und/oder Telefonnummer gemäß Art. 6 Abs.
          1 lit. a DSGVO vor der Zustellung der Ware zum Zweck der Abstimmung
          eines Liefertermins bzw. zur Lieferankündigung an den Anbieter weiter,
          sofern Sie hierfür im Bestellprozess Ihre ausdrückliche Einwilligung
          erteilt haben. Anderenfalls geben wir zum Zwecke der Zustellung gemäß
          Art. 6 Abs. 1 lit. b DSGVO nur den Namen des Empfängers und die
          Lieferadresse an den Anbieter weiter. Die Weitergabe erfolgt nur,
          soweit dies für die Warenlieferung erforderlich ist. In diesem Fall
          ist eine vorherige Abstimmung des Liefertermins mit dem Anbieter bzw.
          die Lieferankündigung nicht möglich.
        </p>
        <p>
          Die Einwilligung kann jederzeit mit Wirkung für die Zukunft gegenüber
          dem oben bezeichneten Verantwortlichen oder gegenüber dem Anbieter
          widerrufen werden.
        </p>
        <p>
          - DHL Express Germany GmbH, Heinrich-Brüning-Str. 5, 53113 Bonn,
          Deutschland
        </p>
        <p>
          Wir geben Ihre E-Mail-Adresse und/oder Telefonnummer gemäß Art. 6 Abs.
          1 lit. a DSGVO vor der Zustellung der Ware zum Zweck der Abstimmung
          eines Liefertermins bzw. zur Lieferankündigung an den Anbieter weiter,
          sofern Sie hierfür im Bestellprozess Ihre ausdrückliche Einwilligung
          erteilt haben. Anderenfalls geben wir zum Zwecke der Zustellung gemäß
          Art. 6 Abs. 1 lit. b DSGVO nur den Namen des Empfängers und die
          Lieferadresse an den Anbieter weiter. Die Weitergabe erfolgt nur,
          soweit dies für die Warenlieferung erforderlich ist. In diesem Fall
          ist eine vorherige Abstimmung des Liefertermins mit dem Anbieter bzw.
          die Lieferankündigung nicht möglich.
        </p>
        <p>
          Die Einwilligung kann jederzeit mit Wirkung für die Zukunft gegenüber
          dem oben bezeichneten Verantwortlichen oder gegenüber dem Anbieter
          widerrufen werden.
        </p>
        <p>
          - DPD Deutschland GmbH, Wailandtstraße 1, 63741 Aschaffenburg,
          Deutschland
        </p>
        <p>
          Wir geben Ihre E-Mail-Adresse und/oder Telefonnummer gemäß Art. 6 Abs.
          1 lit. a DSGVO vor der Zustellung der Ware zum Zweck der Abstimmung
          eines Liefertermins bzw. zur Lieferankündigung an den Anbieter weiter,
          sofern Sie hierfür im Bestellprozess Ihre ausdrückliche Einwilligung
          erteilt haben. Anderenfalls geben wir zum Zwecke der Zustellung gemäß
          Art. 6 Abs. 1 lit. b DSGVO nur den Namen des Empfängers und die
          Lieferadresse an den Anbieter weiter. Die Weitergabe erfolgt nur,
          soweit dies für die Warenlieferung erforderlich ist. In diesem Fall
          ist eine vorherige Abstimmung des Liefertermins mit dem Anbieter bzw.
          die Lieferankündigung nicht möglich.
        </p>
        <p>
          Die Einwilligung kann jederzeit mit Wirkung für die Zukunft gegenüber
          dem oben bezeichneten Verantwortlichen oder gegenüber dem Anbieter
          widerrufen werden.
        </p>
        <p>
          - General Logistics Systems Germany GmbH &amp; Co. OHG, GLS
          Germany-Straße 1–7, 36286 Neuenstein
        </p>
        <p>
          Wir geben Ihre E-Mail-Adresse und/oder Telefonnummer gemäß Art. 6 Abs.
          1 lit. a DSGVO vor der Zustellung der Ware zum Zweck der Abstimmung
          eines Liefertermins bzw. zur Lieferankündigung an den Anbieter weiter,
          sofern Sie hierfür im Bestellprozess Ihre ausdrückliche Einwilligung
          erteilt haben. Anderenfalls geben wir zum Zwecke der Zustellung gemäß
          Art. 6 Abs. 1 lit. b DSGVO nur den Namen des Empfängers und die
          Lieferadresse an den Anbieter weiter. Die Weitergabe erfolgt nur,
          soweit dies für die Warenlieferung erforderlich ist. In diesem Fall
          ist eine vorherige Abstimmung des Liefertermins mit dem Anbieter bzw.
          die Lieferankündigung nicht möglich.
        </p>
        <p>
          Die Einwilligung kann jederzeit mit Wirkung für die Zukunft gegenüber
          dem oben bezeichneten Verantwortlichen oder gegenüber dem Anbieter
          widerrufen werden.
        </p>
        <p>
          - Hermes Logistik Gruppe Deutschland GmbH, Essener Straße 89, 22419
          Hamburg, Deutschland
        </p>
        <p>
          Wir geben Ihre E-Mail-Adresse und/oder Telefonnummer gemäß Art. 6 Abs.
          1 lit. a DSGVO vor der Zustellung der Ware zum Zweck der Abstimmung
          eines Liefertermins bzw. zur Lieferankündigung an den Anbieter weiter,
          sofern Sie hierfür im Bestellprozess Ihre ausdrückliche Einwilligung
          erteilt haben. Anderenfalls geben wir zum Zwecke der Zustellung gemäß
          Art. 6 Abs. 1 lit. b DSGVO nur den Namen des Empfängers und die
          Lieferadresse an den Anbieter weiter. Die Weitergabe erfolgt nur,
          soweit dies für die Warenlieferung erforderlich ist. In diesem Fall
          ist eine vorherige Abstimmung des Liefertermins mit dem Anbieter bzw.
          die Lieferankündigung nicht möglich.
        </p>
        <p>
          Die Einwilligung kann jederzeit mit Wirkung für die Zukunft gegenüber
          dem oben bezeichneten Verantwortlichen oder gegenüber dem Anbieter
          widerrufen werden.
        </p>

        <h3>9.6 Verwendung von Paymentdienstleistern (Zahlungsdiensten)</h3>
        <p>
          - Paypal (Europe) S.a.r.l. et Cie, S.C.A., 22-24 Boulevard Royal,
          L-2449 Luxemburg
        </p>
        <p>
          Bei Auswahl einer Zahlungsart des Anbieters, bei der Sie in
          Vorleistung gehen, werden an diesen Ihre im Rahmen des Bestellvorgangs
          mitgeteilten Zahlungsdaten (darunter Name, Anschrift, Bank- und
          Zahlkarteninformationen, Währung und Transaktionsnummer) sowie
          Informationen über den Inhalt Ihrer Bestellung gemäß Art. 6 Abs. 1
          lit. b DSGVO weitergegeben. Die Weitergabe Ihrer Daten erfolgt in
          diesem Falle ausschließlich zum Zweck der Zahlungsabwicklung mit dem
          Anbieter und nur insoweit, als sie hierfür erforderlich ist.
        </p>
        <p>
          Bei Auswahl einer Zahlungsart, bei der wir in Vorleistung gehen,
          werden Sie im Bestellablauf auch aufgefordert, bestimmte persönliche
          Daten (Vor- und Nachname, Straße, Hausnummer, Postleitzahl, Ort,
          Geburtsdatum, E-Mail-Adresse, Telefonnummer, ggf. Daten zu einem
          alternativen Zahlungsmittel) anzugeben.
        </p>
        <p>
          Um in solchen Fällen unser berechtigtes Interesse an der Feststellung
          Ihrer Zahlungsfähigkeit zu wahren, werden diese Daten von uns gemäß
          Art. 6 Abs. 1 lit. f DSGVO zum Zwecke einer Bonitätsprüfung an den
          Anbieter weitergeleitet. Der Anbieter prüft auf Basis der von Ihnen
          angegebenen persönlichen Daten sowie weiterer Daten (wie etwa
          Warenkorb, Rechnungsbetrag, Bestellhistorie, Zahlungserfahrungen), ob
          die von Ihnen ausgewählte Zahlungsmöglichkeit im Hinblick auf
          Zahlungs- und/oder Forderungsausfallrisiken gewährt werden kann.
        </p>
        <p>
          Die Bonitätsauskunft kann Wahrscheinlichkeitswerte enthalten (sog.
          Score-Werte). Soweit Score-Werte in das Ergebnis der Bonitätsauskunft
          einfließen, haben sie ihre Grundlage in einem wissenschaftlich
          anerkannten mathematisch-statistischen Verfahren. In die Berechnung
          der Score-Werte fließen unter anderem, aber nicht ausschließlich,
          Anschriftendaten ein.
        </p>
        <p>
          Sie können dieser Verarbeitung Ihrer Daten jederzeit durch eine
          Nachricht an uns oder gegenüber dem Anbieter widersprechen. Jedoch
          bleibt der Anbieter ggf. weiterhin berechtigt, Ihre personenbezogenen
          Daten zu verarbeiten, sofern dies zur vertragsgemäßen
          Zahlungsabwicklung erforderlich ist.
        </p>
        <p>- Paypal Checkout</p>
        <p>
          Diese Website nutzt PayPal Checkout, ein Online-Zahlungssystem von
          PayPal, das sich aus PayPal-eigenen Zahlungsarten und lokalen
          Zahlmethoden von Drittanbietern zusammensetzt.
        </p>
        <p>
          Bei Zahlung via PayPal, Kreditkarte via PayPal, Lastschrift via PayPal
          oder – falls angeboten – „Später Bezahlen“ via PayPal geben wir Ihre
          Zahlungsdaten im Rahmen der Zahlungsabwicklung an die PayPal (Europe)
          S.a.r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxemburg
          (nachfolgend "PayPal"), weiter. Die Weitergabe erfolgt gemäß Art. 6
          Abs. 1 lit. b DSGVO und nur insoweit, als dies für die
          Zahlungsabwicklung erforderlich ist.
        </p>
        <p>
          PayPal behält sich für die Zahlungsmethoden Kreditkarte via PayPal,
          Lastschrift via PayPal oder – falls angeboten – „Später bezahlen“ via
          PayPal – die Durchführung einer Bonitätsauskunft vor. Hierfür werden
          Ihre Zahlungsdaten gegebenenfalls gemäß Art. 6 Abs. 1 lit. f DSGVO auf
          Basis des berechtigten Interesses von PayPal an der Feststellung Ihrer
          Zahlungsfähigkeit an Auskunfteien weitergegeben. Das Ergebnis der
          Bonitätsprüfung in Bezug auf die statistische
          Zahlungsausfallwahrscheinlichkeit verwendet PayPal zum Zweck der
          Entscheidung über die Bereitstellung der jeweiligen Zahlungsmethode.
          Die Bonitätsauskunft kann Wahrscheinlichkeitswerte enthalten (sog.
          Score-Werte). Soweit Score-Werte in das Ergebnis der Bonitätsauskunft
          einfließen, haben sie ihre Grundlage in einem wissenschaftlich
          anerkannten mathematisch-statistischen Verfahren. In die Berechnung
          der Score-Werte fließen unter anderem, aber nicht ausschließlich,
          Anschriftendaten ein. Sie können dieser Verarbeitung Ihrer Daten
          jederzeit durch eine Nachricht an PayPal widersprechen. Jedoch bleibt
          PayPal ggf. weiterhin berechtigt, Ihre personenbezogenen Daten zu
          verarbeiten, sofern dies zur vertragsgemäßen Zahlungsabwicklung
          erforderlich ist.
        </p>
        <p>
          Bei Verfügbarkeit und Auswahl der PayPal-Zahlungsart „Rechnungskauf“
          werden Ihre Zahlungsdaten zur Vorbereitung der Zahlung zunächst an
          PayPal übermittelt, woraufhin PayPal diese zur Durchführung der
          Zahlung an die Ratepay GmbH, Franklinstraße 28-29, 10587 Berlin
          ("Ratepay") weiterleitet. Rechtsgrundlage ist jeweils Art. 6 Abs. 1
          lit. b DSGVO. In diesem Fall führt RatePay im eigenen Namen eine
          Identitäts- und Bonitätsprüfung zur Feststellung der Zahlungsfähigkeit
          entsprechend dem oben bereits genannten Prinzip durch und gibt Ihre
          Zahlungsdaten aufgrund des berechtigten Interesses an der Feststellung
          der Zahlungsfähigkeit gemäß Art. 6 Abs. 1 lit. f DSGVO an Auskunfteien
          weiter. Eine Liste der Auskunfteien, auf die Ratepay zurückgreifen
          kann, findet sich hier:
          <a
            href="https://www.ratepay.com/legal-payment-creditagencies/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.ratepay.com/legal-payment-creditagencies/
          </a>
        </p>
        <p>
          Bei Nutzung der Zahlungsart eines lokalen Drittanbieters werden Ihre
          Zahlungsdaten zur Vorbereitung der Zahlung zunächst gemäß Art. 6 Abs.
          1 lit. b DSGVO an PayPal weitergegeben. Abhängig von Ihrer Auswahl
          einer verfügbaren lokalen Zahlungsart übermittelt PayPal Ihre
          Zahlungsdaten zur Durchführung der Zahlung sodann gemäß Art. 6 Abs. 1
          lit. b DSGVO an den entsprechenden Anbieter:
        </p>
        <ul>
          <li>
            Apple Pay (Apple Distribution International (Apple), Hollyhill
            Industrial Estate, Hollyhill, Cork, Irland)
          </li>
          <li>
            Google Pay (Google Ireland Limited, Gordon House, 4 Barrow St,
            Dublin, D04 E5W5, Irland)
          </li>
          <li>
            Sofort (SOFORT GmbH, Theresienhöhe 12, 80339 München, Deutschland)
          </li>
          <li>
            iDeal (Currence Holding BV, Beethovenstraat 300 Amsterdam,
            Niederlande)
          </li>
          <li>
            bancontact (Bancontact Payconiq Company, Rue d'Arlon 82, 1040
            Brüssel, Belgien)
          </li>
          <li>
            blik (Polski Standard Płatności sp. z o.o., ul. Czerniakowska 87A,
            00-718 Warschau, Polen)
          </li>
          <li>
            eps (PSA Payment Services Austria GmbH, Handelskai 92, Gate 2, 1200
            Wien, Österreich)
          </li>
          <li>
            MyBank (PRETA S.A.S, 40 Rue de Courcelles, F-75008 Paris,
            Frankreich)
          </li>
          <li>Przelewy24 (PayPro SA, Kanclerska 15A, 60-326 Poznań, Polen)</li>
        </ul>
        <p>
          Weitere datenschutzrechtliche Informationen entnehmen Sie bitte der
          Datenschutzerklärung von PayPal:&nbsp;
          <a
            href="https://www.paypal.com/de/webapps/mpp/ua/privacy-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.paypal.com/de/webapps/mpp/ua/privacy-full
          </a>
        </p>
        <p>- Shopify Payments</p>
        <p>
          Auf dieser Website stehen eine oder mehrere Online-Zahlungsarten des
          folgenden Anbieters zur Verfügung: Shopify International Limited,
          Victoria Buildings, 1-2 Haddington Road, Dublin 4, D04 XN32, Irland
        </p>
        <p>
          Bei Auswahl einer Zahlungsart des Anbieters, bei der Sie in
          Vorleistung gehen (etwa Kreditkartenzahlung), werden an diesen Ihre im
          Rahmen des Bestellvorgangs mitgeteilten Zahlungsdaten (darunter Name,
          Anschrift, Bank- und Zahlkarteninformationen, Währung und
          Transaktionsnummer) sowie Informationen über den Inhalt Ihrer
          Bestellung gemäß Art. 6 Abs. 1 lit. b DSGVO weitergegeben. Die
          Weitergabe Ihrer Daten erfolgt in diesem Falle ausschließlich zum
          Zweck der Zahlungsabwicklung mit dem Anbieter und nur insoweit, als
          sie hierfür erforderlich ist.
        </p>
        <h2>10) Online-Marketing</h2>
        <h3>Google AdSense</h3>
        <p>
          Diese Website benutzt Google AdSense, einen Webanzeigendienst Google
          Ireland Limited, Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland
          ("Google"). Google AdSense verwendet sog. Cookies, also Textdateien,
          die auf Ihrem Computer gespeichert werden und die eine Analyse der
          Benutzung der Website durch Sie ermöglichen. Darüber hinaus verwendet
          Google AdSense zur Sammlung von Informationen auch sog. "Web-Beacons"
          (kleine unsichtbare Grafiken), durch deren Verwendung einfache
          Aktionen wie der Besucherverkehr auf der Website aufgezeichnet,
          gesammelt und ausgewertet werden können. Die durch das Cookie und/
          oder Web-Beacon erzeugten Informationen (einschließlich Ihrer
          IP-Adresse) über Ihre Benutzung dieser Website werden in der Regel an
          einen Server von Google übertragen und dort gespeichert. Hierbei kann
          es auch zu einer Übermittlung an die Server der Google LLC. in den USA
          kommen.
        </p>
        <p>
          Google benutzt die so erhaltenen Informationen, um eine Auswertung
          Ihres Nutzungsverhaltens im Hinblick auf die AdSense-Anzeigen
          durchzuführen. Die im Rahmen von Google AdSense von Ihrem Browser
          übermittelte IP-Adresse wird nicht mit anderen Daten von Google
          zusammengeführt. Die von Google erhobenen Informationen werden unter
          Umständen an Dritte übertragen, sofern dies gesetzlich vorgeschrieben
          ist und/ oder soweit Dritte diese Daten im Auftrag von Google
          verarbeiten.
        </p>
        <p>
          Alle oben beschriebenen Verarbeitungen, insbesondere Auslesen von
          Informationen auf dem verwendeten Endgerät über Cookies und/oder
          Web-Beacons, werden nur dann vollzogen, wenn Sie uns gemäß Art. 6 Abs.
          1 lit. a DSGVO dazu Ihre ausdrückliche Einwilligung erteilt haben.
          Ohne diese Einwilligungserteilung unterbleibt der Einsatz von Google
          AdSense während Ihres Seitenbesuchs.
        </p>
        <p>
          Sie können Ihre erteilte Einwilligung jederzeit mit Wirkung für die
          Zukunft widerrufen, indem Sie diesen Dienst in dem auf der Webseite
          bereitgestellten „Cookie-Consent-Tool“ deaktivieren.
        </p>
        <p>
          Für Datenübermittlungen in die USA hat sich der Anbieter dem
          EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen,
          das auf Basis eines Angemessenheitsbeschlusses der Europäischen
          Kommission die Einhaltung des europäischen Datenschutzniveaus
          sicherstellt.
        </p>
        <p>
          Googles Datenschutzbestimmungen sind hier einsehbar:&nbsp;
          <a
            href="https://www.google.de/policies/privacy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.google.de/policies/privacy/
          </a>
        </p>

        <h2>11) Webanalysedienste</h2>
        <h3>Google (Universal) Analytics</h3>
        <p>
          Diese Website benutzt Google (Universal) Analytics, einen
          Webanalysedienst der Google Ireland Limited, Gordon House, 4 Barrow
          St, Dublin, D04 E5W5, Irland ("Google"), der eine Analyse Ihrer
          Benutzung unserer Website ermöglicht.
        </p>
        <p>
          Standardmäßig werden beim Besuch der Website durch Google (Universal)
          Analytics Cookies gesetzt, die als kleine Textbausteine auf Ihrem
          Endgerät abgelegt werden und bestimmte Informationen erheben. Zum
          Umfang dieser Informationen gehört auch Ihre IP-Adresse, die
          allerdings von Google um die letzten Ziffern gekürzt wird, um eine
          direkte Personenbeziehbarkeit auszuschließen.
        </p>
        <p>
          Die Informationen werden an Server von Google übertragen und dort
          weiterverarbeitet. Dabei sind auch Übermittlungen an Google LLC mit
          Sitz in den USA möglich.
        </p>
        <p>
          Google nutzt die erhobenen Informationen in unserem Auftrag, um Ihre
          Nutzung der Website auszuwerten, Reports über die Websiteaktivitäten
          für uns zusammenzustellen und um weitere mit der Websitenutzung und
          der Internetnutzung verbundene Dienstleistungen zu erbringen. Die im
          Rahmen von Google Analytics von Ihrem Browser übermittelte und
          gekürzte IP-Adresse wird nicht mit anderen Daten von Google
          zusammengeführt. Die im Rahmen der Nutzung von Google (Universal)
          Analytics erhobenen Daten werden für die Dauer von zwei Monaten
          gespeichert und anschließend gelöscht.
        </p>
        <p>
          Alle vorstehend beschriebenen Verarbeitungen, insbesondere das Setzen
          von Cookies auf dem verwendeten Endgerät, erfolgen nur, wenn Sie uns
          hierfür Ihre ausdrückliche Einwilligung gem. Art. 6 Abs. 1 lit. a
          DSGVO erteilt haben.
        </p>
        <p>
          Ohne Ihre Einwilligung unterbleibt der Einsatz von Google (Universal)
          Analytics während Ihres Seitenbesuchs. Sie können Ihre erteilte
          Einwilligung mit Wirkung für die Zukunft jederzeit widerrufen. Um Ihr
          Widerrufsrecht auszuüben, deaktivieren Sie bitte diesen Dienst über
          das auf der Website bereitgestellte „Cookie-Consent-Tool“.
        </p>
        <p>
          Wir haben mit Google einen Auftragsverarbeitungsvertrag geschlossen,
          der den Schutz der Daten unserer Seitenbesucher sicherstellt und eine
          unberechtigte Weitergabe an Dritte untersagt.
        </p>
        <p>
          Weitere rechtliche Hinweise zu Google (Universal) Analytics finden Sie
          unter&nbsp;
          <a
            href="https://policies.google.com/privacy?hl=de&gl=de"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://policies.google.com/privacy?hl=de&amp;gl=de
          </a>
          &nbsp;und unter&nbsp;
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://policies.google.com/technologies/partner-sites
          </a>
          .
        </p>
        <h4>Demografische Merkmale</h4>
        <p>
          Google (Universal) Analytics nutzt die spezielle Funktion
          „demografische Merkmale“ und kann darüber Statistiken erstellen, die
          Aussagen über das Alter, Geschlecht und Interessen von Seitenbesuchern
          treffen. Dies geschieht durch die Analyse von Werbung und
          Informationen von Drittanbietern. Dadurch können Zielgruppen für
          Marketingaktivitäten identifiziert werden. Die gesammelten Daten
          können jedoch keiner bestimmten Person zugeordnet werden und werden
          nach einer Speicherung für die Dauer von zwei Monaten gelöscht.
        </p>
        <h4>Google Signals</h4>
        <p>
          Als Erweiterung zu Google (Universal) Analytics kann auf dieser
          Website Google Signals verwendet werden, um geräteübergreifende
          Berichte erstellen zu lassen. Wenn Sie personalisierte Anzeigen
          aktiviert haben und Ihre Geräte mit Ihrem Google-Konto verknüpft
          haben, kann Google vorbehaltlich Ihrer Einwilligung zur Nutzung von
          Google Analytics gem. Art. 6 Abs. 1 lit. a DSGVO Ihr Nutzungsverhalten
          geräteübergreifend analysieren und Datenbankmodelle, unter anderem zu
          geräteübergreifenden Conversions, erstellen. Wir erhalten keine
          personenbezogenen Daten von Google, sondern nur Statistiken. Wenn Sie
          die geräteübergreifende Analyse stoppen möchten, können Sie die
          Funktion "Personalisierte Werbung" in den Einstellungen Ihres
          Google-Kontos deaktivieren. Folgen Sie dazu den Anweisungen auf dieser
          Seite:&nbsp;
          <a
            href="https://support.google.com/ads/answer/2662922?hl=de"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://support.google.com/ads/answer/2662922?hl=de
          </a>
          &nbsp;Weitere Informationen zu Google Signals finden Sie unter
          folgendem Link:&nbsp;
          <a
            href="https://support.google.com/analytics/answer/7532985?hl=de"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://support.google.com/analytics/answer/7532985?hl=de
          </a>
          .
        </p>
        <h4>UserIDs</h4>
        <p>
          Als Erweiterung zu Google (Universal) Analytics kann auf dieser
          Website die Funktion "UserIDs" verwendet werden. Wenn Sie in die
          Nutzung von Google (Universal) Analytics gem. Art. 6 Abs. 1 lit. a
          DSGVO eingewilligt, ein Konto auf dieser Website eingerichtet haben
          und sich auf verschiedenen Geräten mit diesem Konto anmelden, können
          Ihre Aktivitäten, darunter auch Conversions, geräteübergreifend
          analysiert werden.
        </p>
        <p>
          Für Datenübermittlungen in die USA hat sich der Anbieter dem
          EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen,
          das auf Basis eines Angemessenheitsbeschlusses der Europäischen
          Kommission die Einhaltung des europäischen Datenschutzniveaus
          sicherstellt.
        </p>

        <h2>12) Retargeting/ Remarketing und Conversion-Tracking</h2>
        <h3>12.1 Meta Pixel mit erweitertem Datenabgleich</h3>
        <p>
          Innerhalb unseres Online-Angebots verwenden wir im Modus des
          erweiterten Datenabgleichs den Dienst "Meta Pixel" des folgenden
          Anbieters: Meta Platforms Ireland Limited, 4 Grand Canal Quare, Dublin
          2, Irland ("Meta")
        </p>
        <p>
          Klickt ein Nutzer auf eine von uns auf Facebook oder Instagram
          geschaltete Werbeanzeige, wird mithilfe von "Meta Pixel" die URL
          unserer verlinkten Seite um einen Parameter erweitert. Dieser
          URL-Parameter wird dann nach der Weiterleitung durch ein Cookie, das
          unsere verlinkte Seite selbst setzt, in den Browser des Nutzers
          eingetragen. Darüber hinaus erfasst dieses Cookie spezifische
          Kundendaten wie z.B. die E-Mail-Adresse, die wir auf unserer mit der
          Facebook- oder Instagram-Anzeige verknüpften Webseite bei Vorgängen
          wie Kaufabschlüssen, Kontoanmeldungen oder Registrierungen erheben
          (erweiterter Datenabgleich). Das Cookie wird dann ausgelesen und
          ermöglicht die Übermittlung der Daten einschließlich der spezifischen
          Kundendaten an Meta.
        </p>
        <p>
          Wir verwenden "Meta Pixel" mit erweitertem Datenabgleich, um unsere
          Werbeanzeigen (sog. "Ads") auf Facebook und/oder Instagram effektiver
          zu gestalten und sicherzustellen, dass sie den Interessen der Nutzer
          entsprechen oder bestimmte Merkmale aufweisen (z.B. Interessen an
          bestimmten Themen oder Produkten, die anhand der besuchten Webseiten
          ermittelt werden), die wir an Meta übermitteln (sog. "Custom
          Audiences").
        </p>
        <p>
          Darüber hinaus analysieren wir die Wirksamkeit unserer Werbeanzeigen,
          indem wir verfolgen, ob Nutzer nach dem Anklicken einer Werbeanzeige
          auf unsere Webseite weitergeleitet wurden (Conversion). Im Vergleich
          zur Standardvariante von "Meta Pixel" hilft uns die Funktion des
          erweiterten Datenabgleichs, die Wirksamkeit unserer Werbekampagnen
          besser zu messen, indem mehr zugeordnete Conversions erfasst werden.
        </p>
        <p>
          Alle übermittelten Daten werden von Meta gespeichert und verarbeitet,
          so dass eine Zuordnung zum jeweiligen Nutzerprofil möglich ist und
          Meta die Daten für eigene Werbezwecke gemäß den
          Datenverwendungsrichtlinien von Meta (
          <a
            href="https://www.facebook.com/about/privacy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.facebook.com/about/privacy/
          </a>
          ) verwenden kann. Die Daten können es Meta sowie seinen Partnern
          ermöglichen, Anzeigen auf und außerhalb von Facebook zu schalten.
        </p>
        <p>
          Alle oben beschriebenen Verarbeitungen, insbesondere das Setzen von
          Cookies für das Auslesen von Informationen auf dem verwendeten
          Endgerät, werden nur dann vollzogen, wenn Sie uns gemäß Art. 6 Abs. 1
          lit. a DSGVO dazu Ihre ausdrückliche Einwilligung erteilt haben. Sie
          können Ihre erteilte Einwilligung jederzeit mit Wirkung für die
          Zukunft widerrufen, indem Sie diesen Dienst in dem auf der Webseite
          bereitgestellten „Cookie-Consent-Tool“ deaktivieren.
        </p>
        <p>
          Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag
          geschlossen, der den Schutz der Daten unserer Seitenbesucher
          sicherstellt und eine unberechtigte Weitergabe an Dritte untersagt.
        </p>
        <p>
          Die durch Meta erzeugten Informationen werden in der Regel an einen
          Server von Meta übertragen und dort gespeichert; in diesem
          Zusammenhang kann es auch zu einer Übertragung an Server von Meta
          Platforms Inc. in den USA kommen.
        </p>
        <p>
          Für Datenübermittlungen in die USA hat sich der Anbieter dem
          EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen,
          das auf Basis eines Angemessenheitsbeschlusses der Europäischen
          Kommission die Einhaltung des europäischen Datenschutzniveaus
          sicherstellt.
        </p>

        <h3>12.2 Google Ads Conversion-Tracking</h3>
        <p>
          Diese Website nutzt das Online-Werbeprogramm "Google Ads" und im
          Rahmen von Google Ads das Conversion-Tracking der Google Ireland
          Limited, Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland
          („Google“).
        </p>
        <p>
          Wir nutzen das Angebot von Google Ads, um mit Hilfe von Werbemitteln
          (sogenannten Google Adwords) auf externen Webseiten auf unsere
          attraktiven Angebote aufmerksam zu machen. Wir können in Bezug zu den
          Daten der Werbekampagnen ermitteln, wie erfolgreich die einzelnen
          Werbemaßnahmen sind. Wir verfolgen damit das Anliegen, Ihnen Werbung
          anzuzeigen, die für Sie von Interesse ist, unsere Website für Sie
          interessanter zu gestalten und eine faire Berechnung der anfallenden
          Werbekosten zu erreichen.
        </p>
        <p>
          Das Cookie für Conversion-Tracking wird gesetzt, wenn ein Nutzer auf
          eine von Google geschaltete Ads-Anzeige klickt. Bei Cookies handelt es
          sich um kleine Textdateien, die auf Ihrem Endgerät abgelegt werden.
          Diese Cookies verlieren in der Regel nach 30 Tagen ihre Gültigkeit und
          dienen nicht der persönlichen Identifizierung. Besucht der Nutzer
          bestimmte Seiten dieser Website und ist das Cookie noch nicht
          abgelaufen, können Google und wir erkennen, dass der Nutzer auf die
          Anzeige geklickt hat und zu dieser Seite weitergeleitet wurde. Jeder
          Google Ads-Kunde erhält ein anderes Cookie. Cookies können somit nicht
          über die Websites von Google Ads-Kunden nachverfolgt werden. Die
          mithilfe des Conversion-Cookies eingeholten Informationen dienen dazu,
          Conversion-Statistiken für Google Ads-Kunden zu erstellen, die sich
          für Conversion-Tracking entschieden haben. Die Kunden erfahren die
          Gesamtanzahl der Nutzer, die auf ihre Anzeige geklickt haben und zu
          einer mit einem Conversion-Tracking-Tag versehenen Seite
          weitergeleitet wurden. Sie erhalten jedoch keine Informationen, mit
          denen sich Nutzer persönlich identifizieren lassen.
        </p>
        <p>
          Im Rahmen der Nutzung von Google Ads kann es auch zu einer
          Übermittlung von personenbezogenen Daten an die Server der Google LLC.
          in den USA kommen.
        </p>
        <p>
          Details zu den durch Google Ads Conversion Tracking angestoßenen
          Verarbeitungen und zum Umgang Googles mit Daten von Websites finden
          Sie hier:&nbsp;
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://policies.google.com/technologies/partner-sites
          </a>
        </p>
        <p>
          Alle oben beschriebenen Verarbeitungen, insbesondere das Setzen von
          Cookies für das Auslesen von Informationen auf dem verwendeten
          Endgerät, werden nur dann vollzogen, wenn Sie uns gemäß Art. 6 Abs. 1
          lit. a DSGVO dazu Ihre ausdrückliche Einwilligung erteilt haben. Sie
          können Ihre erteilte Einwilligung jederzeit mit Wirkung für die
          Zukunft widerrufen, indem Sie diesen Dienst in dem auf der Webseite
          bereitgestellten „Cookie-Consent-Tool“ deaktivieren.
        </p>
        <p>
          Sie können dem Setzen von Cookies durch Google Ads Conversion-Tracking
          darüber hinaus dauerhaft widersprechen, indem Sie das unter folgendem
          Link verfügbare Browser-Plug-in von Google herunterladen und
          installieren:&nbsp;
          <a
            href="https://www.google.com/settings/ads/plugin?hl=de"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.google.com/settings/ads/plugin?hl=de
          </a>
        </p>
        <p>
          Um Nutzern, deren Daten wir im Rahmen von geschäftlichen oder
          geschäftsähnlichen Beziehungen erhalten haben, noch
          interessengerechter werblich anzusprechen, nutzen wir im Rahmen von
          Google Ads eine Funktion zum Kundenabgleich. Hierzu übermitteln wir
          eine oder mehrere Dateien mit aggregierten Kundendaten (vor allem
          Mailadressen und Telefonnummern) auf elektronischem Weg an Google.
          Google erhält hierbei keinen Zugriff auf Klardaten, sondern
          verschlüsselt die Informationen in den Kundendateien im Wege des
          Übermittlungsprozesses automatisch mittels eines speziellen
          Algorithmus. Die verschlüsselten Informationen können von Google
          sodann lediglich verwendet werden, um sie bestehenden Google-Konten
          zuzuordnen, die die Betroffenen eingerichtet haben. Dies ermöglicht
          ein Ausspielen von personalisierter Werbung über alle mit dem
          jeweiligen Google-Konto verknüpften Google-Dienste.
        </p>
        <p>
          Die Übermittlung von Kundendaten an Google erfolgt ausschließlich,
          wenn Sie uns hierzu eine ausdrückliche Einwilligung gemäß Art. 6 Abs.
          1 lit. a DSGVO erteilt haben. Diese Einwilligung können Sie uns
          gegenüber jederzeit mit Wirkung für die Zukunft widerrufen. Weitere
          Informationen zu den Datenschutzmaßnahmen von Google in Bezug auf die
          Kundenabgleichs-Funktion finden sich hier:&nbsp;
          <a
            href="https://support.google.com/google-ads/answer/6334160?hl=de&ref_topic=10550182"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://support.google.com/google-ads/answer/6334160?hl=de&amp;ref_topic=10550182
          </a>
          .
        </p>
        <p>
          Googles Datenschutzbestimmungen sind hier einsehbar:&nbsp;
          <a
            href="https://www.google.de/policies/privacy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.google.de/policies/privacy/
          </a>
        </p>
        <p>
          Für Datenübermittlungen in die USA hat sich der Anbieter dem
          EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen,
          das auf Basis eines Angemessenheitsbeschlusses der Europäischen
          Kommission die Einhaltung des europäischen Datenschutzniveaus
          sicherstellt.
        </p>

        <h3>12.3 Google Ads Conversion-Tracking ohne Cookies</h3>
        <p>
          Diese Website nutzt das Online-Werbeprogramm "Google Ads" und im
          Rahmen von Google Ads das Conversion-Tracking der Google Ireland
          Limited, Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland
          („Google“).
        </p>
        <p>
          Wir nutzen das Angebot von Google Ads, um mit Hilfe von Werbemitteln
          (sogenannten Google Adwords) auf externen Webseiten auf unsere
          attraktiven Angebote aufmerksam zu machen. Wir können in Bezug zu den
          Daten der Werbekampagnen ermitteln, wie erfolgreich die einzelnen
          Werbemaßnahmen sind. Wir verfolgen damit das Anliegen, Ihnen Werbung
          anzuzeigen, die für Sie von Interesse ist, unsere Website für Sie
          interessanter zu gestalten und eine faire Berechnung der anfallenden
          Werbekosten zu erreichen.
        </p>
        <p>
          Diese Website verwendet das Google Ads Conversion Tracking
          ausschließlich ohne den Einsatz von Cookies, was bedeutet, dass der
          Dienst zu keinem Zeitpunkt Cookies auf Ihrem Endgerät setzt.
        </p>
        <p>
          Stattdessen wird der lokale Speicher Ihres Browsers genutzt, um dort
          eine individuelle, von Google vergebene ID zu hinterlegen, welche eine
          Analyse Ihrer Nutzung der Website ermöglicht. Hierfür werden über die
          ID bestimmte Nutzerinformationen verarbeitet.
        </p>
        <p>
          Die ID wird gesetzt, wenn ein Nutzer auf eine von Google geschaltete
          Ads-Anzeige klickt. Besucht der Nutzer bestimmte Seiten dieser
          Website, können Google und wir erkennen, dass der Nutzer auf die
          Anzeige geklickt hat und zu dieser Seite weitergeleitet wurde. Jeder
          Google Ads-Kunde erhält ein anderes Cookie. Cookies können somit nicht
          über die Websites von Google Ads-Kunden nachverfolgt werden. Die so
          eingeholten Informationen dienen dazu, Conversion-Statistiken für
          Google Ads-Kunden zu erstellen, die sich für Conversion-Tracking
          entschieden haben. Die Kunden erfahren die Gesamtanzahl der Nutzer,
          die auf ihre Anzeige geklickt haben und zu einer mit einem
          Conversion-Tracking-Tag versehenen Seite weitergeleitet wurden.
        </p>
        <p>
          Sie erhalten jedoch keine Informationen, mit denen sich Nutzer
          persönlich identifizieren lassen. Im Rahmen der Nutzung von Google Ads
          kann es auch zu einer Übermittlung von personenbezogenen Daten an die
          Server der Google LLC. in den USA kommen. Details zu den durch Google
          Ads Conversion Tracking angestoßenen Verarbeitungen und zum Umgang
          Googles mit Daten von Websites finden Sie hier:&nbsp;
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://policies.google.com/technologies/partner-sites
          </a>
          .
        </p>
        <p>
          Sofern die erhobenen Informationen einen Personenbezug aufweisen,
          erfolgt die Verarbeitung gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis
          unseres berechtigten Interesses an der statistischen Auswertung des
          Erfolgs unserer Werbekampagnen.
        </p>
        <p>
          Googles Datenschutzbestimmungen sind hier einsehbar:&nbsp;
          <a
            href="https://www.google.de/policies/privacy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.google.de/policies/privacy/
          </a>
        </p>
        <p>
          Für Datenübermittlungen in die USA hat sich der Anbieter dem
          EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen,
          das auf Basis eines Angemessenheitsbeschlusses der Europäischen
          Kommission die Einhaltung des europäischen Datenschutzniveaus
          sicherstellt.
        </p>
        <h2>13) Seitenfunktionalitäten</h2>

        <h3>13.1 Facebook-Plugins</h3>
        <p>
          Auf unserer Website werden Plugins des sozialen Netzwerkes des
          folgenden Anbieters verwendet: Meta Platforms Ireland Ltd., 4 Grand
          Canal Square, Grand Canal Harbour, Dublin 2, Irland
        </p>
        <p>
          Diese Plugins ermöglichen direkte Interaktionen mit Inhalten auf dem
          sozialen Netzwerk.
        </p>
        <p>
          Um den Schutz Ihrer Daten beim Besuch unserer Website zu erhöhen, sind
          die Plugins zunächst deaktiviert mittels sogenannter „2-Klick“- oder
          „Shariff“-Lösung in die Seite eingebunden.
        </p>
        <p>
          Diese Einbindung gewährleistet, dass beim Aufruf einer Seite unseres
          Webauftritts, die solche Plugins enthält, noch keine Verbindung mit
          den Servern des Anbieters hergestellt wird.
        </p>
        <p>
          Erst wenn Sie die Plugins aktivieren und damit gemäß Art. 6 Abs. 1
          lit. a DSGVO Ihre Einwilligung in die Datenübermittlung erteilen,
          stellt Ihr Browser eine direkte Verbindung zu den Servern des
          Anbieters her. Hierbei werden, unabhängig von einem Login in ein
          vorhandenes Nutzerprofil, in bestimmtem Umfang Informationen über Ihr
          verwendetes Endgerät (darunter Ihre IP-Adresse), Ihren Browser und
          Ihren Seitenverlauf an den Anbieter übermittelt und dort
          gegebenenfalls weiterverarbeitet.
        </p>
        <p>
          Wenn Sie in ein vorhandenes Nutzerprofil auf dem sozialen Netzwerk des
          Anbieters eingeloggt sind, werden Informationen zu über die Plugins
          vollzogenen Interaktionen außerdem dort veröffentlicht und Ihren
          Kontakten angezeigt.
        </p>
        <p>
          Sie können Ihre Einwilligung jederzeit widerrufen indem Sie das
          aktivierte Plugin durch erneutes Anklicken wieder deaktivieren. Der
          Widerruf hat jedoch keinen Einfluss auf die Daten, die bereits an den
          Anbieter übertragen wurden.
        </p>
        <p>Daten können zudem übertragen werden an: Meta Platforms Inc., USA</p>
        <p>
          Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag
          geschlossen, der den Schutz der Daten unserer Seitenbesucher
          sicherstellt und eine unberechtigte Weitergabe an Dritte untersagt.
        </p>
        <p>
          Für Datenübermittlungen in die USA hat sich der Anbieter dem
          EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen,
          das auf Basis eines Angemessenheitsbeschlusses der Europäischen
          Kommission die Einhaltung des europäischen Datenschutzniveaus
          sicherstellt.
        </p>

        <h3>13.2 Instagram-Plugins</h3>
        <p>
          Auf unserer Website werden Plugins des sozialen Netzwerkes des
          folgenden Anbieters verwendet: Meta Platforms Ireland Ltd., 4 Grand
          Canal Square, Grand Canal Harbour, Dublin 2 Irland
        </p>
        <p>
          Diese Plugins ermöglichen direkte Interaktionen mit Inhalten auf dem
          sozialen Netzwerk.
        </p>
        <p>
          Um den Schutz Ihrer Daten beim Besuch unserer Website zu erhöhen, sind
          die Plugins zunächst deaktiviert mittels sogenannter „2-Klick“- oder
          „Shariff“-Lösung in die Seite eingebunden.
        </p>
        <p>
          Diese Einbindung gewährleistet, dass beim Aufruf einer Seite unseres
          Webauftritts, die solche Plugins enthält, noch keine Verbindung mit
          den Servern des Anbieters hergestellt wird.
        </p>
        <p>
          Erst wenn Sie die Plugins aktivieren und damit gemäß Art. 6 Abs. 1
          lit. a DSGVO Ihre Einwilligung in die Datenübermittlung erteilen,
          stellt Ihr Browser eine direkte Verbindung zu den Servern des
          Anbieters her. Hierbei werden, unabhängig von einem Login in ein
          vorhandenes Nutzerprofil, in bestimmtem Umfang Informationen über Ihr
          verwendetes Endgerät (darunter Ihre IP-Adresse), Ihren Browser und
          Ihren Seitenverlauf an den Anbieter übermittelt und dort
          gegebenenfalls weiterverarbeitet.
        </p>
        <p>
          Wenn Sie in ein vorhandenes Nutzerprofil auf dem sozialen Netzwerk des
          Anbieters eingeloggt sind, werden Informationen zu über die Plugins
          vollzogenen Interaktionen außerdem dort veröffentlicht und Ihren
          Kontakten angezeigt.
        </p>
        <p>
          Sie können Ihre Einwilligung jederzeit widerrufen indem Sie das
          aktivierte Plugin durch erneutes Anklicken wieder deaktivieren. Der
          Widerruf hat jedoch keinen Einfluss auf die Daten, die bereits an den
          Anbieter übertragen wurden.
        </p>
        <p>Daten können zudem übertragen werden: Meta Platforms Inc., USA</p>
        <p>
          Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag
          geschlossen, der den Schutz der Daten unserer Seitenbesucher
          sicherstellt und eine unberechtigte Weitergabe an Dritte untersagt.
        </p>
        <p>
          Für Datenübermittlungen in die USA hat sich der Anbieter dem
          EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen,
          das auf Basis eines Angemessenheitsbeschlusses der Europäischen
          Kommission die Einhaltung des europäischen Datenschutzniveaus
          sicherstellt.
        </p>

        <h3>13.3 Pinterest-Plugins</h3>
        <p>
          Auf unserer Website werden Plugins des sozialen Netzwerkes des
          folgenden Anbieters verwendet: Pinterest Europe Ltd., Palmerston
          House, 2nd Floor, Fenian Street, Dublin 2, Irland
        </p>
        <p>
          Diese Plugins ermöglichen direkte Interaktionen mit Inhalten auf dem
          sozialen Netzwerk.
        </p>
        <p>
          Um den Schutz Ihrer Daten beim Besuch unserer Website zu erhöhen, sind
          die Plugins zunächst deaktiviert mittels sogenannter „2-Klick“- oder
          „Shariff“-Lösung in die Seite eingebunden.
        </p>
        <p>
          Diese Einbindung gewährleistet, dass beim Aufruf einer Seite unseres
          Webauftritts, die solche Plugins enthält, noch keine Verbindung mit
          den Servern des Anbieters hergestellt wird.
        </p>
        <p>
          Erst wenn Sie die Plugins aktivieren und damit gemäß Art. 6 Abs. 1
          lit. a DSGVO Ihre Einwilligung in die Datenübermittlung erteilen,
          stellt Ihr Browser eine direkte Verbindung zu den Servern des
          Anbieters her. Hierbei werden, unabhängig von einem Login in ein
          vorhandenes Nutzerprofil, in bestimmtem Umfang Informationen über Ihr
          verwendetes Endgerät (darunter Ihre IP-Adresse), Ihren Browser und
          Ihren Seitenverlauf an den Anbieter übermittelt und dort
          gegebenenfalls weiterverarbeitet.
        </p>
        <p>
          Wenn Sie in ein vorhandenes Nutzerprofil auf dem sozialen Netzwerk des
          Anbieters eingeloggt sind, werden Informationen zu über die Plugins
          vollzogenen Interaktionen außerdem dort veröffentlicht und Ihren
          Kontakten angezeigt.
        </p>
        <p>
          Sie können Ihre Einwilligung jederzeit widerrufen indem Sie das
          aktivierte Plugin durch erneutes Anklicken wieder deaktivieren. Der
          Widerruf hat jedoch keinen Einfluss auf die Daten, die bereits an den
          Anbieter übertragen wurden.
        </p>
        <p>Daten können zudem übertragen werden an: Pinterest Inc., USA</p>
        <p>
          Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag
          geschlossen, der den Schutz der Daten unserer Seitenbesucher
          sicherstellt und eine unberechtigte Weitergabe an Dritte untersagt.
        </p>
        <p>
          Für die Übermittlung von Daten in die USA beruft sich der Anbieter auf
          Standardvertragsklauseln der Europäischen Kommission, welche die
          Einhaltung des europäischen Datenschutzniveaus sicherstellen sollen.
        </p>

        <h3>13.4 Google Sign-In</h3>
        <p>
          Auf unserer Website stellen wir eine Single-Sign-On-Funktion des
          folgenden Anbieters bereit: Google Ireland Limited, Gordon House, 4
          Barrow St, Dublin, D04 E5W5, Irland
        </p>
        <p>
          Neben einer Übermittlung von Daten an den o.g. Anbieterstandort können
          Daten auch übermittelt werden an: Google LLC, USA
        </p>
        <p>
          Wenn Sie über einen Account beim Anbieter verfügen, können Sie sich
          mit diesen Accountdaten zur Erstellung eines Benutzerkontos bzw. zur
          Registrierung auf unserer Website anmelden.
        </p>
        <p>
          Beim Besuch dieser Seite kann über diese Anmeldefunktion eine direkte
          Verbindung zwischen Ihrem Browser und den Servern des Anbieters
          hergestellt werden, auch wenn Sie keinen Account beim Anbieter
          besitzen oder nicht in einen solchen eingeloggt sind. Der Anbieter
          erhält dadurch die Information, dass Sie unsere Seite besucht haben.
          Die insofern erhobenen Informationen (ggf. einschließlich Ihrer
          IP-Adresse) werden von Ihrem Browser direkt an einen Server des
          Anbieters übermittelt und dort gespeichert. Die Informationen werden
          jedoch nicht dazu verwendet, Sie persönlich zu identifizieren, und
          werden nicht an Dritte weitergegeben.
        </p>
        <p>
          Diese Datenverarbeitungsvorgänge erfolgen gemäß Art. 6 Abs. 1 lit. f
          DSGVO auf Basis unseres berechtigten Interesses an einer
          nutzerfreundlichen und interaktiven Ausgestaltung unseres
          Online-Auftritts.
        </p>
        <p>
          Betätigen Sie den Anmeldebutton, um sich mit den Daten Ihres Accounts
          beim Anbieter auf unserer Website zu registrieren, übermittelt der
          Anbieter ausschließlich auf Basis Ihrer ausdrücklichen Einwilligung
          gemäß Art. 6 Abs. 1 lit. a DSGVO die in Ihrem Account hinterlegten
          allgemeinen und öffentlich zugänglichen Informationen (Nutzer-ID,
          Name, Anschrift, Mailadresse, Alter und Geschlecht) an uns.
        </p>
        <p>
          Wir speichern und verwenden die vom Anbieter übermittelten Daten zur
          Einrichtung eines Benutzerkontos mit den notwendigen Daten (Anrede,
          Vorname, Nachname, Adressdaten, Land, E-Mail-Adresse, Geburtsdatum),
          sofern Sie diese gegenüber dem Anbieter freigegeben haben. Umgekehrt
          können auf Basis Ihrer Einwilligung Daten (z.B. Informationen über Ihr
          Surf- oder Kaufverhalten) von uns auf Ihren Account beim Anbieter
          übertragen werden.
        </p>
        <p>
          Die erteilte Einwilligung kann jederzeit mit Wirkung für die Zukunft
          uns gegenüber widerrufen werden.
        </p>
        <p>
          Für Datenübermittlungen in die USA hat sich der Anbieter dem
          EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen,
          das auf Basis eines Angemessenheitsbeschlusses der Europäischen
          Kommission die Einhaltung des europäischen Datenschutzniveaus
          sicherstellt.
        </p>

        <h3>13.5 Google Maps</h3>
        <p>
          Diese Webseite nutzt einen Online-Kartendienst des folgenden
          Anbieters: Google Maps (API) von Google Ireland Limited, Gordon House,
          4 Barrow St, Dublin, D04 E5W5, Irland (“Google”).
        </p>
        <p>
          Google Maps ist ein Webdienst zur Darstellung von interaktiven
          (Land-)Karten, um geographische Informationen visuell darzustellen.
          Über die Nutzung dieses Dienstes wird Ihnen unser Standort angezeigt
          und eine etwaige Anfahrt erleichtert.
        </p>
        <p>
          Bereits beim Aufrufen derjenigen Unterseiten, in die die Karte von
          Google Maps eingebunden ist, werden Informationen über Ihre Nutzung
          unserer Website (wie z.B. Ihre IP-Adresse) an Server von Google
          übertragen und dort gespeichert, hierbei kann es auch zu einer
          Übermittlung an die Server der Google LLC. in den USA kommen. Dies
          erfolgt unabhängig davon, ob Google ein Nutzerkonto bereitstellt, über
          das Sie eingeloggt sind oder ob ein Nutzerkonto besteht. Wenn Sie bei
          Google eingeloggt sind, werden Ihre Daten direkt Ihrem Konto
          zugeordnet. Wenn Sie die Zuordnung mit Ihrem Profil bei Google nicht
          wünschen, müssen Sie sich vor Aktivierung des Buttons ausloggen.
          Google speichert Ihre Daten (selbst für nicht eingeloggte Nutzer) als
          Nutzungsprofile und wertet diese aus.
        </p>
        <p>
          Die Erhebung, Speicherung und die Auswertung erfolgen gemäß Art. 6
          Abs. 1 lit. f DSGVO auf Basis des berechtigten Interesses von Google
          an der Einblendung personalisierter Werbung, Marktforschung und/oder
          der bedarfsgerechten Gestaltung von Google-Websites. Ihnen steht ein
          Widerspruchsrecht gegen die Bildung dieser Nutzerprofile zu, wobei Sie
          sich für dessen Ausübung an Google wenden müssen. Wenn Sie mit der
          künftigen Übermittlung Ihrer Daten an Google im Rahmen der Nutzung von
          Google Maps nicht einverstanden sind, besteht auch die Möglichkeit,
          den Webdienst von Google Maps vollständig zu deaktivieren, indem Sie
          die Anwendung JavaScript in Ihrem Browser ausschalten. Google Maps und
          damit auch die Kartenanzeige auf dieser Internetseite kann dann nicht
          genutzt werden.
        </p>
        <p>
          Soweit rechtlich erforderlich, haben wir zur vorstehend dargestellten
          Verarbeitung Ihrer Daten Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a
          DSGVO eingeholt. Sie können Ihre erteilte Einwilligung jederzeit mit
          Wirkung für die Zukunft widerrufen. Um Ihren Widerruf auszuüben,
          befolgen Sie bitte die vorstehend geschilderte Möglichkeit zur
          Vornahme eines Widerspruchs.
        </p>
        <p>
          Für Datenübermittlungen in die USA hat sich der Anbieter dem
          EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen,
          das auf Basis eines Angemessenheitsbeschlusses der Europäischen
          Kommission die Einhaltung des europäischen Datenschutzniveaus
          sicherstellt.
        </p>

        <h3>13.6 FontAwesome</h3>
        <p>
          Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten
          sogenannte Web Fonts des folgenden Anbieters: Fonticons, Inc., 710
          Blackhorn Dr, Carl Junction, 64834, MO, USA
        </p>
        <p>
          Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in
          ihren Browser-Cache, um Texte und Schriftarten korrekt anzuzeigen und
          stellt eine direkte Verbindung zu den Servern des Anbieters her.
          Hierbei werden bestimmte Browserinformationen, einschließlich Ihrer
          IP-Adresse, an den Anbieter übermittelt.
        </p>
        <p>
          Die Verarbeitung von personenbezogenen Daten im Zuge der
          Verbindungsaufnahme mit dem Anbieter der Schriftarten wird nur dann
          vollzogen, wenn Sie uns gemäß Art. 6 Abs. 1 lit. a DSGVO dazu Ihre
          ausdrückliche Einwilligung erteilt haben. Sie können Ihre erteilte
          Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, indem
          Sie diesen Dienst über das auf der Webseite bereitgestellte
          „Cookie-Consent-Tool“ deaktivieren. Falls Ihr Browser keine Web Fonts
          unterstützt, wird eine Standardschrift von Ihrem Computer genutzt.
        </p>
        <p>
          Für die Übermittlung von Daten in die USA beruft sich der Anbieter auf
          Standardvertragsklauseln der Europäischen Kommission, welche die
          Einhaltung des europäischen Datenschutzniveaus sicherstellen sollen.
        </p>

        <h3>13.7 Google Web Fonts</h3>
        <p>
          Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten
          sogenannte Web Fonts des folgenden Anbieters: Google Ireland Limited,
          Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland
        </p>
        <p>
          Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in
          ihren Browser-Cache, um Texte und Schriftarten korrekt anzuzeigen und
          stellt eine direkte Verbindung zu den Servern des Anbieters her.
          Hierbei werden bestimmte Browserinformationen, einschließlich Ihrer
          IP-Adresse, an den Anbieter übermittelt.
        </p>
        <p>Daten können zudem übermittelt werden an: Google LLC, USA</p>
        <p>
          Die Verarbeitung von personenbezogenen Daten im Zuge der
          Verbindungsaufnahme mit dem Anbieter der Schriftarten wird nur dann
          vollzogen, wenn Sie uns gemäß Art. 6 Abs. 1 lit. a DSGVO dazu Ihre
          ausdrückliche Einwilligung erteilt haben. Sie können Ihre erteilte
          Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, indem
          Sie diesen Dienst über das auf der Webseite bereitgestellte
          „Cookie-Consent-Tool“ deaktivieren. Falls Ihr Browser keine Web Fonts
          unterstützt, wird eine Standardschrift von Ihrem Computer genutzt.
        </p>
        <p>
          Für Datenübermittlungen in die USA hat sich der Anbieter dem
          EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen,
          das auf Basis eines Angemessenheitsbeschlusses der Europäischen
          Kommission die Einhaltung des europäischen Datenschutzniveaus
          sicherstellt.
        </p>

        <h3>13.8 Google Translate</h3>
        <p>
          Diese Seite nutzt über eine API-Einbindung den Übersetzungsdienst
          "Google Translate" der Google Ireland Limited, Gordon House, 4 Barrow
          St, Dublin, D04 E5W5, Irland („Google“). Damit die Übersetzung nach
          Ihrer Wahl einer Landessprache automatisiert angezeigt wird, nimmt der
          von Ihnen verwendete Browser Verbindung zu den Servern von Google auf.
          Google verwendet hierbei sog. "Cookies", das sind Textdateien, die auf
          Ihrem Computer gespeichert werden und die eine Analyse Ihrer Nutzung
          der Website ermöglichen. Die durch das Cookie erzeugten Informationen
          über Ihre Benutzung dieser Website (einschließlich der gekürzten
          IP-Adresse) werden in der Regel an einen Server von Google übertragen
          und dort gespeichert, hierbei kann es auch zu einer Übermittlung an
          die Server der Google LLC. in den USA kommen.
        </p>
        <p>
          Sofern personenbezogene Daten verarbeitet werden, erfolgt dies gemäß
          Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses
          an einer barrierefreien und universellen Zugänglichkeit unseres
          Internetauftritts.
        </p>
        <p>
          Soweit rechtlich erforderlich, haben wir zur vorstehend dargestellten
          Verarbeitung Ihrer Daten Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a
          DSGVO eingeholt. Sie können Ihre erteilte Einwilligung jederzeit mit
          Wirkung für die Zukunft widerrufen. Um Ihren Widerruf auszuüben,
          deaktivieren Sie diesen Dienst im auf der Webseite bereitgestellten
          "Cookie-Consent-Tool".
        </p>
        <p>
          Für Datenübermittlungen in die USA hat sich der Anbieter dem
          EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen,
          das auf Basis eines Angemessenheitsbeschlusses der Europäischen
          Kommission die Einhaltung des europäischen Datenschutzniveaus
          sicherstellt.
        </p>

        <h3>
          13.9 Google Kundenrezensionen (ehemals Google
          Zertifizierter-Händler-Programm)
        </h3>
        <p>
          Wir arbeiten mit Google im Rahmen des Programms „Google
          Kundenrezensionen“ zusammen. Der Anbieter ist Google Ireland Limited,
          Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland (“Google”). Dieses
          Programm gibt uns die Möglichkeit, Kundenrezensionen von Nutzern
          unserer Website einzuholen. Hierbei werden Sie nach einem Einkauf auf
          unserer Website gefragt, ob Sie an einer E-Mail-Umfrage von Google
          teilnehmen möchten.
        </p>
        <p>
          Wenn Sie Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO erteilen,
          übermitteln wir Ihre E-Mail-Adresse an Google. Sie erhalten eine
          E-Mail von Google Kundenrezensionen, in der Sie gebeten werden, die
          Kauferfahrung auf unserer Website zu bewerten. Die von Ihnen
          abgegebene Bewertung wird anschließend mit unseren anderen Bewertungen
          zusammengefasst und in unserem Logo Google Kundenrezensionen sowie in
          unserem Merchant Center-Dashboard angezeigt. Außerdem wird Ihre
          Bewertung für Google Verkäuferbewertungen genutzt. Im Rahmen der
          Nutzung von Google Kundenrezensionen kann es auch zu einer
          Übermittlung von personenbezogenen Daten an die Server der Google LLC.
          in den USA kommen.
        </p>
        <p>
          Sie können Ihre Einwilligung jederzeit durch eine Nachricht an den für
          die Datenverarbeitung Verantwortlichen oder gegenüber Google
          widerrufen.
        </p>
        <p>
          Für Datenübermittlungen in die USA hat sich der Anbieter dem
          EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen,
          das auf Basis eines Angemessenheitsbeschlusses der Europäischen
          Kommission die Einhaltung des europäischen Datenschutzniveaus
          sicherstellt.
        </p>

        <h2>14) Tools und Sonstiges</h2>
        <h3>Cookie-Consent-Tool</h3>
        <p>
          Diese Website nutzt zur Einholung wirksamer Nutzereinwilligungen für
          einwilligungspflichtige Cookies und cookie-basierte Anwendungen ein
          sog. „Cookie-Consent-Tool“. Das „Cookie-Consent-Tool“ wird Nutzern bei
          Seitenaufruf in Form einer interaktiven Benutzeroberfläche angezeigt,
          auf welcher sich per Häkchensetzung Einwilligungen für bestimmte
          Cookies und/oder cookie-basierte Anwendungen erteilen lassen. Hierbei
          werden durch den Einsatz des Tools alle einwilligungspflichtigen
          Cookies/Dienste nur dann geladen, wenn der jeweilige Nutzer
          entsprechende Einwilligungen per Häkchensetzung erteilt. So wird
          sichergestellt, dass nur im Falle einer erteilten Einwilligung
          derartige Cookies auf dem jeweiligen Endgerät des Nutzers gesetzt
          werden.
        </p>
        <p>
          Das Tool setzt technisch notwendige Cookies, um Ihre
          Cookie-Präferenzen zu speichern. Personenbezogene Nutzerdaten werden
          hierbei grundsätzlich nicht verarbeitet.
        </p>
        <p>
          Kommt es im Einzelfall zum Zwecke der Speicherung, Zuordnung oder
          Protokollierung von Cookie-Einstellungen doch zur Verarbeitung
          personenbezogener Daten (wie etwa der IP-Adresse), erfolgt diese gemäß
          Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses
          an einem rechtskonformen, nutzerspezifischen und nutzerfreundlichen
          Einwilligungsmanagement für Cookies und mithin an einer
          rechtskonformen Ausgestaltung unseres Internetauftritts.
        </p>
        <p>
          Weitere Rechtsgrundlage für die Verarbeitung ist ferner Art. 6 Abs. 1
          lit. c DSGVO. Wir unterliegen als Verantwortliche der rechtlichen
          Verpflichtung, den Einsatz technisch nicht notwendiger Cookies von der
          jeweiligen Nutzereinwilligung abhängig zu machen.
        </p>
        <p>
          Soweit erforderlich, haben wir mit dem Anbieter einen
          Auftragsverarbeitungsvertrag geschlossen, der den Schutz der Daten
          unserer Seitenbesucher sicherstellt und eine unberechtigte Weitergabe
          an Dritte untersagt.
        </p>
        <p>
          Weitere Informationen zum Betreiber und den Einstellungsmöglichkeiten
          des Cookie-Consent-Tools finden Sie direkt in der entsprechenden
          Benutzeroberfläche auf unserer Website.
        </p>

        <h2>15) Rechte des Betroffenen</h2>
        <p>
          <strong>15.1</strong> Das geltende Datenschutzrecht gewährt Ihnen
          gegenüber dem Verantwortlichen hinsichtlich der Verarbeitung Ihrer
          personenbezogenen Daten die nachstehenden Betroffenenrechte
          (Auskunfts- und Interventionsrechte), wobei für die jeweiligen
          Ausübungsvoraussetzungen auf die angeführte Rechtsgrundlage verwiesen
          wird:
        </p>
        <ul>
          <li>Auskunftsrecht gemäß Art. 15 DSGVO;</li>
          <li>Recht auf Berichtigung gemäß Art. 16 DSGVO;</li>
          <li>Recht auf Löschung gemäß Art. 17 DSGVO;</li>
          <li>Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO;</li>
          <li>Recht auf Unterrichtung gemäß Art. 19 DSGVO;</li>
          <li>Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO;</li>
          <li>
            Recht auf Widerruf erteilter Einwilligungen gemäß Art. 7 Abs. 3
            DSGVO;
          </li>
          <li>Recht auf Beschwerde gemäß Art. 77 DSGVO.</li>
        </ul>
        <p>
          <strong>15.2 WIDERSPRUCHSRECHT</strong>
        </p>
        <p>
          WENN WIR IM RAHMEN EINER INTERESSENABWÄGUNG IHRE PERSONENBEZOGENEN
          DATEN AUFGRUND UNSERES ÜBERWIEGENDEN BERECHTIGTEN INTERESSES
          VERARBEITEN, HABEN SIE DAS JEDERZEITIGE RECHT, AUS GRÜNDEN, DIE SICH
          AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIESE VERARBEITUNG
          WIDERSPRUCH MIT WIRKUNG FÜR DIE ZUKUNFT EINZULEGEN.
        </p>
        <p>
          MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE
          VERARBEITUNG DER BETROFFENEN DATEN. EINE WEITERVERARBEITUNG BLEIBT
          ABER VORBEHALTEN, WENN WIR ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE
          VERARBEITUNG NACHWEISEN KÖNNEN, DIE IHRE INTERESSEN, GRUNDRECHTE UND
          GRUNDFREIHEITEN ÜBERWIEGEN, ODER WENN DIE VERARBEITUNG DER
          GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN DIENT.
        </p>
        <p>
          WERDEN IHRE PERSONENBEZOGENEN DATEN VON UNS VERARBEITET, UM
          DIREKTWERBUNG ZU BETREIBEN, HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH
          GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM
          ZWECKE DERARTIGER WERBUNG EINZULEGEN. SIE KÖNNEN DEN WIDERSPRUCH WIE
          OBEN BESCHRIEBEN AUSÜBEN.
        </p>
        <p>
          MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE
          VERARBEITUNG DER BETROFFENEN DATEN ZU DIREKTWERBEZWECKEN.
        </p>

        <h2>16) Dauer der Speicherung personenbezogener Daten</h2>
        <p>
          Die Dauer der Speicherung von personenbezogenen Daten bemisst sich
          anhand der jeweiligen Rechtsgrundlage, am Verarbeitungszweck und –
          sofern einschlägig – zusätzlich anhand der jeweiligen gesetzlichen
          Aufbewahrungsfrist (z.B. handels- und steuerrechtliche
          Aufbewahrungsfristen).
        </p>
        <p>
          Bei der Verarbeitung von personenbezogenen Daten auf Grundlage einer
          ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO werden
          die betroffenen Daten so lange gespeichert, bis Sie Ihre Einwilligung
          widerrufen.
        </p>
        <p>
          Existieren gesetzliche Aufbewahrungsfristen für Daten, die im Rahmen
          rechtsgeschäftlicher bzw. rechtsgeschäftsähnlicher Verpflichtungen auf
          der Grundlage von Art. 6 Abs. 1 lit. b DSGVO verarbeitet werden,
          werden diese Daten nach Ablauf der Aufbewahrungsfristen routinemäßig
          gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder
          Vertragsanbahnung erforderlich sind und/oder unsererseits kein
          berechtigtes Interesse an der Weiterspeicherung fortbesteht.
        </p>
        <p>
          Bei der Verarbeitung von personenbezogenen Daten auf Grundlage von
          Art. 6 Abs. 1 lit. f DSGVO werden diese Daten so lange gespeichert,
          bis Sie Ihr Widerspruchsrecht nach Art. 21 Abs. 1 DSGVO ausüben, es
          sei denn, wir können zwingende schutzwürdige Gründe für die
          Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten
          überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung
          oder Verteidigung von Rechtsansprüchen.
        </p>
        <p>
          Bei der Verarbeitung von personenbezogenen Daten zum Zwecke der
          Direktwerbung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO werden
          diese Daten so lange gespeichert, bis Sie Ihr Widerspruchsrecht nach
          Art. 21 Abs. 2 DSGVO ausüben.
        </p>
        <p>
          Sofern sich aus den sonstigen Informationen dieser Erklärung über
          spezifische Verarbeitungssituationen nichts anderes ergibt, werden
          gespeicherte personenbezogene Daten im Übrigen dann gelöscht, wenn sie
          für die Zwecke, für die sie erhoben oder auf sonstige Weise
          verarbeitet wurden, nicht mehr notwendig sind.
        </p>
      </div>

      <InfoBottomBar />
      <NewsletterSubscription />
    </div>
  );
}

export default DataProtectionFooterPage;
