export function formatLocation(city, state, country) {
  return [city, state, country].filter(Boolean).join(", "); // any falsy value will be removed (boolean is a built in js function)
}
