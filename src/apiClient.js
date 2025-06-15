// src/apiClient.js
import axios from "axios";
import config from "./config";

const apiClient = axios.create({
  baseURL: config.api.baseUrl,
  headers: config.defaultHeaders,
});

// Add a request interceptor to attach tokens if needed
apiClient.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem("token"); // Get token from localStorage
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
