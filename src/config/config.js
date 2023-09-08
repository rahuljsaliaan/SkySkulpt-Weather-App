export const BASE_URL = "https://api.open-meteo.com/v1/";
export const GEOCODING_URL = "https://geocoding-api.open-meteo.com/v1/";
export const DEFAULT_LOCATION = { lat: 28.6139, lon: 77.209 };
export const CURRENT_DATE = new Date(
  new Date().getTime() - new Date().getTimezoneOffset() * 60000
)
  .toISOString()
  .split("T")[0];
