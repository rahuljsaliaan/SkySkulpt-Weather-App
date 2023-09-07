import { useState } from "react";
import { DEFAULT_POSITION } from "../config/config";

function useGeolocation() {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState(DEFAULT_POSITION);
  const [error, setError] = useState("");

  function getPosition() {
    if (!navigator.geolocation)
      throw new Error(
        "Your browser does not support geolocation. Using New Delhi as default location"
      );

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      (error) => setError(error.message)
    );
    setIsLoading(false);
  }

  return { isLoading, position, error, getPosition };
}

export { useGeolocation };
