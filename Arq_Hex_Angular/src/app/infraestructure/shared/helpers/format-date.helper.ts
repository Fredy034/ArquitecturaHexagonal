// Example usage:
// const formattedDate = formatDate('2023-10-01');
// console.log(formattedDate); // Output: "October 1, 2023"
// This function takes a date string as input and returns a formatted date string in the format "Month Day, Year".
// It uses the toLocaleDateString method to format the date according to the specified locale ('en-US') and options (year, month, day).

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
