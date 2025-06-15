import React from 'react';
import '../styles/Reviews.css';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Reviews = () => {
  const reviewsData = [
    {
      id: 1,
      name: 'Carla Schneider',
      rating: 5,
      text: `Hab einen wunderschönen alten Schreibtisch hier gefunden, der mir dann problemlos per Spedition nach Süddeutschland geliefert wurde. 
Die Verkäuferin war immer freundlich und auch bemüht auf jeden meiner Belange eine Lösung zu finden. 
Ich habe sogar eine telefonische Betreuung bekommen, als ich beim Einsetzen der Glasscheiben verzweifelte. 
Bin sehr zufrieden und würde jederzeit wieder eins der wunderschönen Einzelstücke hier kaufen.`,
    },
    {
      id: 2,
      name: 'Anke Schaperjahn',
      rating: 5,
      text: `Ich habe auf deren Webseite ein sehr hübsches kleines Tisch'chen gesehen. 
Super schöne Beine als Schwäne gearbeitet. Da ich aber weit weg wohne bat ich um den Versand. 
Absolut kein Problem und günstig obendrein. Der Verkäufer ist sehr nett, freundlich und hilfsbereit. 
Antwort bei Fragen sofort. Heute bekam ich die Lieferung. Super sicher verpackt. Nichts kaputt gegangen. 
Absolut empfehlenswert ist dieser Shop. Ich werde wieder kaufen. Herzlichen Dank dafür!`,
    },
    {
      id: 3,
      name: 'Christoph Beuing',
      rating: 5,
      text: `Ich spare mir durch das Sideboard das Kunstwerk, was ich in Auftrag geben wollte, weil dieses Stück Möbel diese Aufgabe erfüllt. 
Ich bin fasziniert von den Farbflächen, die durch Gezeiten, Zufall und der Wahl in der Zusammensetzung zu dem geworden sind, was jetzt bei mir in der Wohnung steht. 
Je nach Licht treten andere Flächen in den Vordergrund und ich kann nur erahnen, was die erlebt haben... 
Ich bin sehr froh, dass es bei mir ist! Die Qualität ist atemberaubend robust und es hält garantiert ein Leben lang... oder zwei. 
Und Tiho, der Chef - ein super Typ!`,
    },
    {
      id: 4,
      name: 'Weisser Wolga',
      rating: 5,
      text: `Super nette Leute, super Möbel, super freundlich. 
Ich habe dort schon Tische, Sessel und Schränke gekauft. Bin mit allem sehr zufrieden. 
Früher hat man eben noch mit richtigem Holz gearbeitet. Das hält länger als 100 Jahre. Immer wieder gerne.`,
    },
    {
      id: 5,
      name: 'Andrea Fürstenberg',
      rating: 5,
      text: `Zufällig sind wir bei einem Berlin-Besuch über die wunderschönen Möbel aus Bootsholz gestolpert und haben uns in eine Gartenbank verliebt. 
Diese steht nun in Rheinland-Pfalz und wir freuen uns sehr. 
Die Abwicklung war sehr freundlich und professionell, die Lieferung schnell und günstiger als gedacht. 
Toll, die Versuchung ist groß, hier noch mehr zu kaufen.`,
    },
  ];

  return (
    <div className="reviews-section">
      <h2 className="reviews-title">Danke Für mehr als 100 Rezensionen auf Google!</h2>
      <div className="reviews-rating">
        4.8 / 5.0 <FaStar className="star-icon" />
      </div>
      <a href="https://www.google.com/maps/place/Wollen+M%C3%B6bel+Kaufen%3F!+GmbH/@52.5155225,13.4594482,17z/data=!4m8!3m7!1s0x47a84f3bb0ad537d:0xe163b09834fa81ca!8m2!3d52.5155225!4d13.4620231!9m1!1b1!16s%2Fg%2F11fk18s6_y?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">

      <div className="reviews-cards">
      {reviewsData.map((review) => (
        <div key={review.id} className="review-card">
          <p className="review-text">{review.text}</p>
          <div className="review-footer">
            <div className="review-name">{review.name}</div>
            <div className="review-stars">
              {Array(review.rating)
                .fill(0)
                .map((_, idx) => (
                  <FaStar key={idx} className="star-icon" />
                ))}
            </div>
          </div>
        </div>
      ))}
  </div>
  </a>
    </div>
  );
};

export default Reviews;
