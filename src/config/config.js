export const BASE_URL = "https://api.open-meteo.com/v1/";
export const GEOCODING_URL = "https://api.opencagedata.com/geocode/v1/json";
export const GEOCODING_API_KEY = "c9b55d3c3b37432cb2257c82f63367cb";
export const DEFAULT_LOCATION = { lat: 28.6139, lon: 77.209 };
export const DEFAULT_DATE_LOCALE = "en-CA";
export const CURRENT_DATE = new Date(
  new Date().getTime() - new Date().getTimezoneOffset() * 60000,
)
  .toISOString()
  .split("T")[0];
export const BACKGROUND_URL =
  "https://images.unsplash.com/photo-1528565240216-4f2d07f99ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
