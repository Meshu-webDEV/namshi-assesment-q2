const axios = require("axios").default;

const URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_BACKEND
    : "https://fakestoreapi.com";

const BACKEND_API = URL;

/**
 * backend API.
 * @baseURL <..URL>/api/v1
 */
const backendAPI = axios.create({
  baseURL: BACKEND_API,
  headers: {
    "Content-Type": "application/json",
  },
});

module.exports = { backendAPI };
