import React from "react";
import "../styles/StairImage.css"; 

const StairImage = () => {
  return (
    <div className="full-width-image">
      <img
        src="//wmk.berlin/cdn/shop/files/steep-stairs-on-tower.jpg?v=1700780043&width=640"
        alt="Steile Treppen am Turm"
      />
      <div className="full-width-text">
        <h3>Long Story Short</h3>
        <p>From a Friedrichshain cellar to the German Bundestag</p>
      </div>
    </div>
  );
};

export default StairImage;
