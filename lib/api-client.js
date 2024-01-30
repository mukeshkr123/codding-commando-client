import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  // baseURL: "https://codingcommando.in/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
