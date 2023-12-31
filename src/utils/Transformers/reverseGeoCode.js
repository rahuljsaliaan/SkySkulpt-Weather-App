import { GEOCODING_API_KEY, GEOCODING_URL } from "../../config/config";
import { timezoneDateConversion } from "./timezoneDateConversion";

async function reverseGeoCode(lat, lon) {
  try {
    const response = await fetch(
      `${GEOCODING_URL}?q=${lat},${lon}&key=${GEOCODING_API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Reverse geocoding request failed");
    }

    const data = await response.json();

    if (!data.results.length > 0) throw new Error("Location not found...!");

    const result = data.results[0];

    const city =
      result.components.city ||
      result.components.county ||
      result.components.village;
    const state = result.components.state;
    const timezone = result.annotations.timezone;
    const locationCurrentDate = timezoneDateConversion(timezone);

    return { city, state, locationCurrentDate, timezone };
  } catch (error) {
    throw new Error(error.message);
  }
}

export default reverseGeoCode;
