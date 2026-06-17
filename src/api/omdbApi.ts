import axios from "axios";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_OMDB_BASE_URL;

export const omdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    apikey: API_KEY,
  },
});