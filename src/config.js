// src/config.js

const BASE_URL = "https://wmk-backend.onrender.com/api";

const config = {
  api: {
    baseUrl: BASE_URL,
    endpoints: {
      signup: `${BASE_URL}/auth/signup`,
      login: `${BASE_URL}/auth/login`,
      refreshToken: `${BASE_URL}/refresh-token`,
      logout: `${BASE_URL}/logout`,
      forgotPassword: `${BASE_URL}/forgot-password`,
      resetPassword: `${BASE_URL}/reset-password`,
    },
  },
  defaultHeaders: {
    "Content-Type": "application/json",
  },
};

export default config;
