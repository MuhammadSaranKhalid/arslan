const formatDate = (dateString: string) => {
  // Parse the date string into a JavaScript Date object
  const date = new Date(dateString);

  // Define month names
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Extract day and month from the date
  const day = date.getDate();
  const month = monthNames[date.getMonth()];

  // Return formatted date
  return `${day} ${month}`;
};

function formatTime(timestamp: string) {
  // Convert timestamp string to Date object
  const date = new Date(timestamp);

  // Format the date to "hh:mm AM/PM" format
  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(date);

  return formattedTime;
}
