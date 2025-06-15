import Modal from "./Modal.jsx";
import "../styles/RentPopup.css"
import { useState } from "react";
const RentPopup = ({ price, productType,  onConfirm, onClose }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const rentalOptions = [
    { label: "1 Tag 10% des Preises", key: "1day", multiplier: 0.1 },
    { label: "1 Woche 20% des Preises", key: "1week", multiplier: 0.2 },
    { label: "1 Monat 30% des Preises", key: "1month", multiplier: 0.3 },
    { label: "1 Jahr 40% des Preises", key: "1year", multiplier: 0.4 },
    { label: "2 Jahre 50% des Preises", key: "2years", multiplier: 0.5 },
  ]

  // + 19% MwSt
  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleConfirm = () => {
    if (selectedOption) {
      onConfirm(selectedOption);
      onClose();
    }
  };

  return (
    <Modal>
      <div className="rent-popup">
        <h2>Mietdauer auswählen</h2>
        <div className="rent-options">
          {rentalOptions.map(({ label, key, multiplier }) => {
            const rentalPrice = price * multiplier;
            const totalPrice = productType == "vintage" ? rentalPrice + rentalPrice * 0.19 : rentalPrice; // Adding 19% MwSt.
            console.log(totalPrice);
            
            return (
              <div
                key={key}
                className={`rent-option ${selectedOption === key ? "selected" : ""}`}
                onClick={() => handleSelect(key)}
              >
                {productType == "boatwood" && <span>{label}</span>}
                {productType == "vintage" && <span>{label} + 19% MwSt</span>}
                <span> {totalPrice.toFixed(2)}€</span>
              </div>
            );
          })}
        </div>
        <div className="popup-buttons">
          <button onClick={onClose}>Abbrechen</button>
          <button onClick={handleConfirm} disabled={!selectedOption}>
            Bestätigen
          </button>
        </div>
      </div>
    </Modal>
);
};

export default RentPopup;