import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export function baseUrl() {
  return "http://localhost:8000/api/"//process.env.NEXT_PUBLIC_API_URL;
}

const api = axios.create(
  {
    baseURL: "http://localhost:8000/api/"//process.env.NEXT_PUBLIC_API_URL,
  },
  config.headers
);

export default api;
