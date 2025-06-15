import React from "react";
import "../styles/Banner.css";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline>
        <source src="/videoHomePage.mp4" type="video/mp4" />
        Ihr Browser unterstützt das Video-Tag nicht.
      </video>
  
      {/* Overlay for dark effect */}
      <div className="overlay"></div>
      <div className="banner">
        <h1>VINTAGE MÖBEL MEGASTORE</h1>
        <h2>by Wollen Möbel Kaufen?!</h2>
        <Link to="/categories/all"> 
          <button className="banner-button">Loslegen</button>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
