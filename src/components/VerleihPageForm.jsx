"use client";

import { useState } from "react";
import "../styles/VerleihPageForm.css";

export default function VerleihPageform() {
  const [countryCode] = useState("+49");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!acceptTerms) {
      alert("Bitte akzeptieren Sie die AGB und DSGVO.");
      return;
    }
    console.log("Form submitted");
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <div className="form-header">
          <h1>Möbelverleih</h1>
          <p>Mobiliar mieten? Formular ausfüllen, fertig!</p>
        </div>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Vorname und Nachname" required />
          <input type="text" placeholder="Firmenname" />
          <input type="email" placeholder="E-Mail" required />

          <div className="phone-input">
            <div className="country-code">
              <img src="/german-flag.svg" alt="German flag" />
            </div>
            <div className="phone-number">
              <span>{countryCode}</span>
              <input type="tel" placeholder="Telefon" required />
            </div>
          </div>

          <input type="text" placeholder="Adresse" required />
          <input
            type="text"
            placeholder="Produktauswahl mit Artikelnummer(n) angeben"
            required
          />
          <textarea placeholder="Besondere Anfragen"></textarea>

          <div className="form-group">
            <label>Mietdauer</label>
            <select required>
              <option value="">Bitte auswählen</option>
              <option value="1">1 Tag</option>
              <option value="2">2 Tage</option>
              <option value="3">3 Tage</option>
              <option value="7">1 Woche</option>
              <option value="14">2 Wochen</option>
              <option value="30">1 Monat</option>
            </select>
          </div>

          <div className="form-group">
            <label>Verleih Beginn</label>
            <div className="date-inputs">
              <input type="number" placeholder="MM" min={1} max={12} required />
              <input type="number" placeholder="DD" min={1} max={31} required />
              <input type="number" placeholder="YYYY" min={2025} required />
            </div>
          </div>

          <div className="form-group">
            <label>Verleih Ende</label>
            <div className="date-inputs">
              <input type="number" placeholder="MM" min={1} max={12} required />
              <input type="number" placeholder="DD" min={1} max={31} required />
              <input type="number" placeholder="YYYY" min={2025} required />
            </div>
          </div>

          <div className="checkbox-group">
            <label>Hiermit akzeptieren Sie unsere DSGVO und die AGB.</label>
            <div className="checkbox-row">
              <input
                id="terms"
                type="checkbox"
                checked={acceptTerms}
                onChange={() => setAcceptTerms(!acceptTerms)}
              />
              <label htmlFor="terms">Akzeptieren</label>
            </div>
          </div>

          <button type="submit">Absenden</button>

          <p className="form-footer">
            Sehen Sie sich unsere <a href="#">Datenschutzrichtlinie</a> und{" "}
            <a href="#">Nutzungsbedingungen</a> für weitere Informationen an.
          </p>
        </form>
      </div>
    </div>
  );
}
