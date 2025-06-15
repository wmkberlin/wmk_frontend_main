import React, { useEffect } from "react";
import "../styles/main.css";

const LanguageTranslation = () => {
  useEffect(() => {
    if (window.google?.translate) {
      return; // Exit if already initialized
    }

    // Load Google Translate script dynamically
    const scriptId = "google-translate-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "text/javascript";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    // Initialize Google Translate widget
    window.googleTranslateElementInit = () => {
      if (document.getElementById("google_translate_element").children.length > 0) {
        return; // Exit if the widget is already present
      }

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "de",
          includedLanguages: "en,de,es,fr,it",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
      setTimeout(() => {
        const iframe = document.querySelector(".VIpgJd-ZVi9od-xl07Ob-OEVmcd");
        if (iframe) {
          iframe.style.width = "182px"
        }
      }, 150); // Adjust timeout if needed
      
      // Apply stored language
      setTimeout(() => {
        const select = document.querySelector(".goog-te-combo");
        const storedLang = localStorage.getItem("preferredLanguage");
        if (select && storedLang) {
          select.value = storedLang;
          select.dispatchEvent(new Event("change"));
        }
      }, 1000);

      // Apply styles dynamically after widget loads
      setTimeout(() => {
        const translateElement = document.querySelector(".goog-te-gadget-simple");
        if (translateElement) {
          translateElement.style.borderRadius = "10px";
          translateElement.style.padding = "2px 10px";

        }
        const iconElement = document.querySelector(".goog-te-gadget-icon");
        if (iconElement) {
          iconElement.style.backgroundImage = "url('https://www.svgrepo.com/show/348179/language.svg')";
          iconElement.style.backgroundSize = "contain";
          iconElement.style.width = "20px"; // Adjust as needed
          iconElement.style.height = "20px";
          iconElement.style.backgroundPosition = "0";
        }
      }, 150);

    };

    // Handle language change
    const intervalId = setInterval(() => {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        select.addEventListener("change", () => {
          localStorage.setItem("preferredLanguage", select.value);
        });
        clearInterval(intervalId);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="languageTranslation">
      <div className="language-switcher">
        <div id="google_translate_element"></div>
      </div>
    </div>
  );
};

export default LanguageTranslation;
