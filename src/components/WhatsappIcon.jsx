import React from 'react';
import '../styles/FloatingWhatsApp.css';

function FloatingWhatsApp() {
  // Define the name or message you want to pre-fill
  const encodedMessage = encodeURIComponent(`Hello, I found your website and would like to know more about your products.`);

  // Construct the WhatsApp URL with the pre-filled message
  const whatsappUrl = `https://wa.me/+493047906823`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
    >
      <img 
        src="/whatsapp.png" // Replace with the WhatsApp icon path
        alt="WhatsApp" 
      />
    </a>
  );
}

export default FloatingWhatsApp;