import React, { useState } from "react";
import axios from "axios";
import "../styles/NewsletterSubscription.css";

function NewsletterSubscription() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Bitte geben Sie eine gültige E-Mail-Adresse ein");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://wmk-backend.onrender.com/api/user_product/subscribe", 
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        setIsSuccess(true);
        setEmail("");
      } else {
        setError(response.data.message || "Anmeldung fehlgeschlagen");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || 
        "Serverfehler. Bitte versuchen Sie es später erneut"
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="newsletter-section success-message">
        <h2 className="newsletter-title">Vielen Dank für Ihre Anmeldung!</h2>
        <p className="newsletter-description">
          Sie erhalten in Kürze eine Bestätigungs-E-Mail.
        </p>
      </div>
    );
  }

  return (
    <div className="newsletter-section">
      <h2 className="newsletter-title">Verpassen Sie nichts – abonnieren Sie den WMK-Newsletter!</h2>
      <form onSubmit={handleSubmit}>
        <div className="newsletter-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Geben Sie Ihre E-Mail ein"
          className="newsletter-input"
          disabled={isLoading}
        />
        <button 
          type="submit" 
          className="newsletter-button"
          disabled={isLoading}
        >
          {isLoading ? "WIRD GESENDET..." : "ABONNIEREN"}
        </button>
        </div>
      </form>
      {error && <p className="newsletter-error">{error}</p>}
      <p className="newsletter-description">
        Seien Sie der Erste, der von unseren Rabatten, Neuheiten und neuen Produkten erfährt.
      </p>
    </div>
  );
}

export default NewsletterSubscription;