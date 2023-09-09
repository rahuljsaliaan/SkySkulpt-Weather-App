import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiThunderstorm,
  WiFog,
  WiSnow,
} from "weather-icons-react";

export function getWeatherIcon(wmoCode, size = 70) {
  switch (wmoCode) {
    case 1: // Partly cloudy
      return <WiDaySunny size={size} color="#FFD700" />;
    case 2: // Mostly cloudy
      return <WiCloud size={size} color="#87CEEB" />;
    case 3: // Overcast
      return <WiCloud size={size} color="#888888" />;
    case 45: // Fog
    case 48: // Smoke
      return <WiFog size={size} color="#A9A9A9" />;
    case 51: // Light rain
    case 56: // Freezing rain
      return <WiRain size={size} color="#1E90FF" />;
    case 61: // Light snow
    case 66: // Ice pellets
    case 80: // Showers
      return <WiSnow size={size} color="#FFFFFF" />;
    case 53: // Drizzle
    case 55: // Freezing drizzle
    case 63: // Rain showers
    case 65: // Rain and snow
    case 57: // Snow showers
    case 67: // Snow and rain showers
      return <WiRain size={size} color="#4682B4" />;
    case 71: // Thunderstorm
    case 73: // Thunderstorm with rain
    case 75: // Thunderstorm with hail
    case 77: // Thunderstorm with snow
    case 85: // Severe thunderstorm
    case 86: // Severe thunderstorm with hail
      return <WiThunderstorm size={size} color="#FFA500" />;
    case 95: // Severe thunderstorm with hail
      return <WiThunderstorm size={size} color="#FF0000" />;
    case 96: // Tornado
    case 99: // Waterspout
      return <WiThunderstorm size={size} color="#800080" />;
    default: // Default to cloudy
      return <WiCloud size={size} color="#87CEEB" />;
  }
}
