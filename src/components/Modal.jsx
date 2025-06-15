import React from "react";
import ReactDOM from "react-dom";
import "../styles/RentPopup.css"; // Ensure styles are applied globally

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="rent-popup-overlay">{children}</div>,
    document.getElementById("modal-root") // Make sure you have a <div id="modal-root"></div> in index.html
  );
};

export default Modal;
