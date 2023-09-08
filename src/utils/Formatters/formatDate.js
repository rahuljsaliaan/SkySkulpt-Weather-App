export function formatDate(inputDateStr) {
  try {
    // Parse the input date string to a Date object
    const inputDate = new Date(inputDateStr);

    // Check if the inputDate is a valid Date object
    if (isNaN(inputDate.getTime())) {
      throw new Error("Invalid date input");
    }

    // Get the user's browser time zone
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Define formatting options
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      timeZone: userTimeZone,
    };

    // Format the date
    const formattedDate = new Intl.DateTimeFormat("default", options).format(
      inputDate
    );

    return formattedDate;
  } catch (error) {
    console.error("Error formatting date:", error);
    // Handle the error as needed
    return null;
  }
}
