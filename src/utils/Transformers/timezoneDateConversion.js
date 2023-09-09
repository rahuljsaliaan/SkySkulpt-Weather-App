import { DEFAULT_DATE_LOCALE } from "../../config/config";

export function timezoneDateConversion(timezone) {
  console.log(timezone);
  const currentDate = new Date();
  const options = {
    timeZone: timezone.name,
    timeZoneName: "short",
  };

  const formatter = new Intl.DateTimeFormat(DEFAULT_DATE_LOCALE, options);
  const formattedDate = formatter.format(currentDate);

  return formattedDate;
}
