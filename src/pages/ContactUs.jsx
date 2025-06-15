import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import "./contactUsPage.css";
import NewsletterSubscription from "../components/NewsletterSubscription";

const SalesPage = () => {
  return (
    <div className="contact-us-page">
      {/* Kontaktinformationen */}
      <div className="contact-info">
        <h1>Kontakt</h1>
        <p>Wir würden uns freuen, von Ihnen zu hören! Kontaktieren Sie uns telefonisch, per E-Mail oder besuchen Sie unsere Geschäfte.</p>

        <div className="contact-details">
          {/* Location 1 with its map */}
          <div className="location-group">
            <div className="contact-item">
              <MapPin size={24} />
              <h3>Wollen Möbel Kaufen?! GmbH</h3>
              <p>Frankfurter Allee 35/37, 10247 Berlin, Deutschland</p>
            </div>
            <iframe
              className="mobile-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2314.1778408988594!2d13.45944817668088!3d52.515522472059956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84f3bb0ad537d%3A0xe163b09834fa81ca!2sWollen%20M%C3%B6bel%20Kaufen%3F*21%20GmbH!5e1!3m2!1sen!2sin!4v1739744197476!5m2!1sen!2sin"
              title="Karte 1"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Location 2 with its map */}
          <div className="location-group">
            <div className="contact-item">
              <MapPin size={24} />
              <h3>Boatwood Furniture Berlin by Wollen Möbel Kaufen?!</h3>
              <p>Revaler Str. 99, 10245 Berlin, Deutschland</p>
            </div>
            <iframe
              className="mobile-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2314.623919542832!2d13.453137876541591!3d52.50705217205767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e5bd5af96bd%3A0xea50e6299292b63b!2sBoatwood%20Furniture%20Berlin%20by%20Wollen%20M%C3%B6bel%20Kaufen%3F*21!5e1!3m2!1sen!2sin!4v1739743589137!5m2!1sen!2sin"
              title="Karte 2"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <div className="contact-item">
            <Phone size={24} />
            <h3>Telefon</h3>
            <p>+493047906823</p>
          </div>
          <div className="contact-item">
            <Mail size={24} />
            <h3>E-Mail</h3>
            <p>info@wmk.berlin</p>
          </div>
        </div>
      </div>

      {/* Desktop Maps - will be hidden on mobile */}
      <div className="maps-container">
        <iframe
          className="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2314.623919542832!2d13.453137876541591!3d52.50705217205767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e5bd5af96bd%3A0xea50e6299292b63b!2sBoatwood%20Furniture%20Berlin%20by%20Wollen%20M%C3%B6bel%20Kaufen%3F*21!5e1!3m2!1sen!2sin!4v1739743589137!5m2!1sen!2sin"
          title="Karte 1"
          allowFullScreen
          loading="lazy"
        ></iframe>
        <iframe
          className="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2314.1778408988594!2d13.45944817668088!3d52.515522472059956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84f3bb0ad537d%3A0xe163b09834fa81ca!2sWollen%20M%C3%B6bel%20Kaufen%3F*21%20GmbH!5e1!3m2!1sen!2sin!4v1739744197476!5m2!1sen!2sin"
          title="Karte 2"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Rest of your code remains the same */}
      <div className="contact-form">
        {/* ... */}
      </div>
      <NewsletterSubscription />
    </div>
  );
};

export default SalesPage;