import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Typography, Box, Grid } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

const CancelPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleRetry = () => {
    setIsLoading(true);
    // You might want to navigate back to cart or checkout
    navigate("/cart");
  };

  const handleContactSupport = () => {
    window.location.href = "mailto:support@wmk.berlin";
  };

  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <CancelIcon sx={{ fontSize: 80, color: "error.main" }} />
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: "bold" }}>
          Zahlung abgebrochen
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Ihre Zahlung wurde nicht abgeschlossen. Es wurden keine Belastungen auf Ihrem Konto vorgenommen.
        </Typography>
      </Box>
      <Box sx={{ mt: 6, p: 3, bgcolor: "background.paper", borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: "medium" }}>
          Hilfe benötigt?
        </Typography>
        <Typography variant="body1" paragraph>
          Falls Sie Probleme während des Bezahlvorgangs hatten, hilft Ihnen unser Support-Team gerne weiter.
        </Typography>
        <Typography variant="body1">
          Schreiben Sie uns eine E-Mail an:{" "}
          <a href="mailto:support@wmk.berlin" style={{ color: "inherit" }}>
            support@wmk.berlin
          </a>
        </Typography>
      </Box>

      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Button
          variant="text"
          onClick={() => navigate("/")}
          sx={{ textTransform: "none" }}
        >
          ← Zurück zur Startseite
        </Button>
      </Box>
    </Container>
  );
};

export default CancelPage;