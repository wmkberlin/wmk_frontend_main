"use client";
import { useState } from "react";
import '../styles/AnkaufPage.css';

export default function AnkaufPageForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    addressLine2: "",
    city: "",
    stateProvince: "",
    postalCode: "",
    country: "",
    furnitureItems: [
      {
        images: [null, null, null, null],
        price: "",
        condition: "neuwertig",
      },
      {
        images: [null, null, null, null],
        price: "",
        condition: "neuwertig",
      },
      {
        images: [null, null, null, null],
        price: "",
        condition: "neuwertig",
      },
    ],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...formData.furnitureItems];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value,
    };
    setFormData({
      ...formData,
      furnitureItems: updatedItems,
    });
  };

  const handleImageChange = async (itemIndex, imageIndex, e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Convert image to base64 for email attachment
      const base64Image = await convertToBase64(file);
      
      const updatedItems = [...formData.furnitureItems];
      const updatedImages = [...updatedItems[itemIndex].images];
      updatedImages[imageIndex] = {
        file,
        base64: base64Image,
        name: file.name
      };
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        images: updatedImages,
      };
      setFormData({
        ...formData,
        furnitureItems: updatedItems,
      });
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: "" });

    try {
      const uploadedImageUrls = await Promise.all(
        formData.furnitureItems.flatMap(async (item, itemIndex) => {
          return await Promise.all(
            item.images.filter(img => img !== null).map(async (image) => {
              const formData = new FormData();
              formData.append('file', image.file);
              
              const response = await fetch('https://wmk-backend.onrender.com/api/admin_product/file/upload/products', {
                method: 'POST',
                body: formData
              });
              
              const result = await response.json();
              return result.optimizedUrl; // Return the uploaded image URL
            })
          );
        })
      );
  
      // Prepare submission data with image URLs instead of base64
      const submissionData = {
        ...formData,
        furnitureItems: formData.furnitureItems.map((item, index) => ({
          ...item,
          images: uploadedImageUrls[index] || []
        }))
      };

      const response = await fetch("https://wmk-backend.onrender.com/api/user_product/ankauf/mail", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: "Vielen Dank für Ihre Anfrage! Wir werden uns innerhalb von 24 Stunden bei Ihnen melden."
        });
        // Reset form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          street: "",
          addressLine2: "",
          city: "",
          stateProvince: "",
          postalCode: "",
          country: "",
          furnitureItems: [
            { images: [null, null, null, null], price: "", condition: "neuwertig" },
            { images: [null, null, null, null], price: "", condition: "neuwertig" },
            { images: [null, null, null, null], price: "", condition: "neuwertig" },
          ],
        });
      } else {
        throw new Error(result.message || "Fehler beim Senden der Anfrage");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus({
        success: false,
        message: error.message || "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="furniture-form-container">
      <form onSubmit={handleSubmit}>
        <h1>
          <b>Möbelankauf</b>
        </h1>
        <p className="thank-you-text">
          Danke, dass Sie dabei an uns gedacht haben!
        </p>

        {/* Personal Information Section */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">Vorname</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Nachname</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Telefonnummer</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Address Section */}
        <h2>Adresse</h2>
        <div className="form-group full-width">
          <label htmlFor="street">Straße und Hausnummer</label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group full-width">
          <label htmlFor="addressLine2">Straße Adresse Zeile 2</label>
          <input
            type="text"
            id="addressLine2"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city">Stadt</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="stateProvince">Stadt/Provinz</label>
            <input
              type="text"
              id="stateProvince"
              name="stateProvince"
              value={formData.stateProvince}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="postalCode">Post-/Postleitzahl</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Land</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Furniture Items Section */}
        {formData.furnitureItems.map((item, itemIndex) => (
          <div key={itemIndex} className="furniture-item">
            <h1>Möbelstück {itemIndex + 1}</h1>

            <div className="image-upload-grid">
              {[0, 1, 2, 3].map((imageIndex) => (
                <div key={imageIndex} className="image-upload-container">
                  <label>Bilder hinzufügen</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(itemIndex, imageIndex, e)}
                    className="file-input"
                  />
                  {item.images[imageIndex] && (
                    <div className="image-preview">
                      <span>{item.images[imageIndex].name}</span>
                    </div>
                  )}
                  <p className="upload-hint">
                    Bitte fügen Sie Bilder Ihrer Möbel hinzu.
                  </p>
                </div>
              ))}
            </div>

            <div className="form-group full-width">
              <label>Preisvorstellung</label>
              <input
                type="text"
                value={item.price}
                onChange={(e) => handleItemChange(itemIndex, "price", e.target.value)}
              />
              <p className="hint-text">
                Bitte geben Sie Ihren gewünschten Preis an.
              </p>
            </div>

            <div className="form-group full-width">
              <label>Zustand</label>
              <select
                value={item.condition}
                onChange={(e) => handleItemChange(itemIndex, "condition", e.target.value)}
              >
                <option value="neuwertig">neuwertig</option>
                <option value="sehr gut">sehr gut</option>
                <option value="gut">gut</option>
                <option value="gebraucht">gebraucht</option>
                <option value="abgenutzt">abgenutzt</option>
                <option value="stark abgenutzt">stark abgenutzt</option>
                <option value="beschädigt">beschädigt</option>
              </select>
              <p className="hint-text">
                Bitte wählen Sie den Zustand Ihrer Möbel.
              </p>
            </div>
          </div>
        ))}

        <button 
          type="submit" 
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Wird gesendet..." : "SENDEN"}
        </button>

        {submitStatus.message && (
          <div className={`submit-status ${submitStatus.success ? "success" : "error"}`}>
            {submitStatus.message}
          </div>
        )}
      </form>
    </div>
  );
}