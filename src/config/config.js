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
