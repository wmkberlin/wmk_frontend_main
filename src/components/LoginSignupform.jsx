import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/LoginSignup.css";
import apiClient from "../apiClient";
import config from "../config";
import { ToastContainer, toast } from 'react-toastify';



const LoginSignup = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setFormData({ name: "", email: "", password: "", phone: "" }); // Reset form data
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        // Login API Call
        const response = await apiClient.post(config.api.endpoints.login, {
          email: formData.email,
          password: formData.password,
        });
        localStorage.setItem("token", response.data.token); 
        localStorage.setItem("userProfile", JSON.stringify(response.data.user));
        toast.success("Welcome back!", {
          position: "top-center",
          pauseOnFocusLoss: false
        })
        navigate("/");
        
      } else {
        // Signup API Call
        const response = await apiClient.post(config.api.endpoints.signup, {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
        });
        localStorage.setItem("token", response.data.token); 
        toast.success("signup succesfull!", {
          position: "top-center",
          pauseOnFocusLoss: false
        })
      }
    } catch (error) {
      console.error(error);
      alert(
        error.response?.data?.message ||
          "An error occurred. Please try again later."
      );
    }
  };

  return (
    <div className="outerContainerLogin">
      <div className="containerLogin">
        <div className="left-panel">
          <p>
            {isLogin
              ? "Erhalten Sie Zugang zu Ihren Bestellungen, Wunschliste und Empfehlungen"
              : "Sie scheinen neu hier zu sein! Registrieren Sie sich, um loszulegen"}
          </p>
          <img
            src="/icon123.svg"
            alt="Illustration"
            className="illustration"
          />
        </div>
        <div className="right-panel">
        <h1>{isLogin ? "Anmelden" : "Registrieren"}</h1>
          <form className="form" onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <input
                  type="text"
                  name="name"
                  placeholder="Vollständiger Name"
                  className="input-field"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Telefonnummer"
                  className="input-field"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </>
            )}
            <input
              type="email"
              name="email"
              placeholder="E-Mail-Adresse"
              className="input-field"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Passwort"
              className="input-field"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button className="btn" type="submit">
              {isLogin ? "Anmelden" : "Registrieren"}
            </button>
            <p className="terms">
              Durch die Fortsetzung stimmen Sie unseren{" "}
              <span className="link">Nutzungsbedingungen</span> und{" "}
              <span className="link">Datenschutzrichtlinien</span> zu.
            </p>
          </form>
          <p className="toggle">
            {isLogin ? "Neu auf der Plattform? " : "Haben Sie bereits ein Konto? "}
            <span className="link" onClick={handleToggle}>
              {isLogin ? "Konto erstellen" : "Anmelden"}
            </span>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginSignup;
