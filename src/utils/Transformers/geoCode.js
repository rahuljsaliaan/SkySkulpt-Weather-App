import { GEOCODING_API_KEY, GEOCODING_URL } from "../../config/config";
import { timezoneDateConversion } from "./timezoneDateConversion";

async function geoCode(location) {
  try {
    const response = await fetch(
      `${GEOCODING_URL}?q=${encodeURIComponent(
        location
      )}&key=${GEOCODING_API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Geocoding request failed");
    }

    const data = await response.json();

    if (!data.results.length > 0) throw new Error("Location not found...!");

    const firstResult = data.results[0];
    const city = firstResult.components.city || firstResult.components.town;
    const state = firstResult.components.state;
    const country = firstResult.components.country;
    const lat = firstResult.geometry.lat;
    const lng = firstResult.geometry.lng;
    const timezone = firstResult.annotations.timezone;
    const locationCurrentDate = timezoneDateConversion(timezone);

    return { city, state, country, lat, lng, locationCurrentDate, timezone };
  } catch (error) {
    throw new Error(error.message);
  }
}

export default geoCode;
