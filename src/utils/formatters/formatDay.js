import { CURRENT_DATE } from "../../config/config";

export function formatDay(dateStr) {
  if (CURRENT_DATE === dateStr) return "Today";

  return new Intl.DateTimeFormat("en", {
    weekday: "short",
  }).format(new Date(dateStr));
}
