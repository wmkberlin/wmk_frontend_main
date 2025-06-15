import React, { useEffect } from "react";

const LanguageDropdown = () => {
  useEffect(() => {
    // Dynamically load Google Translate script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Initialize Google Translate widget
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en", 
          includedLanguages: "en,de,es,fr,it", 
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false, 
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <div className="language-switcher">
      <div id="google_translate_element"></div>
    </div>
  );
};

export default LanguageDropdown;