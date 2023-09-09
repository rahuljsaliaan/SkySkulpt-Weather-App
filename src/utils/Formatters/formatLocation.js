export function formatLocation(city, state, country) {
  return `${(city && city + ",") || ""} ${(state && state + ",") || ""} ${
    (country && country + ",") || ""
  }`.slice(0, -1);
}
