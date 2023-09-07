import * as FaIcons from "react-icons/fa";

export function getWeatherIcon(wmoCode, size = 70) {
  switch (wmoCode) {
    case 0:
      return <FaIcons.FaSun key="sun" size={size} />;
    case 1:
      return <FaIcons.FaCloudSun key="cloudSun" size={size} />;
    case 2:
      return <FaIcons.FaCloud key="cloud" size={size} />;
    case 3:
      return <FaIcons.FaCloud key="cloud" size={size} />;
    case 45:
    case 48:
      return <FaIcons.FaSmog key="smog" size={size} />;
    case 51:
    case 56:
    case 61:
    case 66:
    case 80:
      return <FaIcons.FaCloudSunRain key="cloudSunRain" size={size} />;
    case 53:
    case 55:
    case 63:
    case 65:
    case 57:
    case 67:
    case 81:
    case 82:
      return <FaIcons.FaCloudRain key="cloudRain" size={size} />;
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return (
        <FaIcons.FaCloudShowersHeavy key="cloudShowersHeavy" size={size} />
      );
    case 95:
      return <FaIcons.FaBolt key="bolt" size={size} />;
    case 96:
    case 99:
      return <FaIcons.FaThunderstorm key="thunderstorm" size={size} />;
    default:
      return null; // You can return null for unknown codes
  }
}
