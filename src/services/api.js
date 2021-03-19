import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { "content-type": "multipart/form-data" },
});

export default api;
