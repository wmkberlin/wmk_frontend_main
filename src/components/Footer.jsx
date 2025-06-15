import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Youtube, Instagram, Mail, Phone } from "lucide-react"; // Lucide icons
import "../styles/Footer.css"; // Import your CSS

function Footer() {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        {/* Win-win-win-Situation Section */}
        <div className="footer-section">
          <h3>Win-win-win-Situation</h3>
          <p>
            Jeder Kauf bei uns ist gut für Sie, die Umwelt und uns. Vielen Dank
            dafür!
          </p>
        </div>

        {/* Schnellzugriff Section */}
        <div className="footer-section">
          <h3>Schnellzugriff</h3>
          <ul className="footer-links">
            <li>
              <Link to="/impressum">Impressum</Link>
            </li>
            <li>
              <Link to="/data-protection">Datenschutzerklärung DSGVO</Link>
            </li>
            <li>
              <Link to="/withdrawal">Widerrufsrecht</Link>
            </li>
            <li>
              <Link to="/terms">Allgemeine Geschäftsbedingungen</Link>
            </li>
          </ul>
        </div>

        {/* Folgen Sie uns Section */}
        <div className="footer-section">
          <h3>Folgen Sie uns</h3>
          <ul className="social-links">
            <li>
              <a href="https://www.facebook.com/moebelaufdemraw" target="_blank" rel="noreferrer">
                <Facebook size={16} className="social-icon" />
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCp5Q2x3c9fTQ9p333PWQK_A" target="_blank" rel="noreferrer">
                <Youtube size={16} className="social-icon" />
                YouTube
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/wollenmoebelkaufen" target="_blank" rel="noreferrer">
                <Instagram size={16} className="social-icon" />
                Instagram
              </a>
            </li>
            <li>
              <a href="mailto:info@wmk.berlin">
                <Mail size={16} className="social-icon" />
                E-Mail
              </a>
            </li>
            <li>
              <a href="tel:+493047906823">
                <Phone size={16} className="social-icon" />
                Telefon
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
      <p>
        &copy; 2025 WMK Onlineshop. Made with ♥️ by{" "}
        <a
          href="https://shrikhatushyamjidigital.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shrikhatushyamji Digital
        </a>
      </p>
      </div>
    </footer>
  );
}

export default Footer;
