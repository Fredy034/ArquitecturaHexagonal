import { MESSAGES } from '../constants/messages.constant';

// Example usage
// const formattedValue = formatDecimal(1234.567);
// console.log(formattedValue); // Output: "1,234.57"
// This function takes a number as input and returns a string formatted to two decimal places. It uses the toLocaleString method to
// format the number according to the user's locale, ensuring that the decimal separator and thousands separator are appropriate for the
// user's region.
// The function also checks if the input value is a number and throws an error if it is not. This ensures that the function behaves
// predictably and avoids unexpected results when given invalid input.

export const formatDecimal = (value: number): string => {
  // Check if the value is a number
  if (typeof value !== 'number') {
    throw new Error(MESSAGES.ERROR.INVALID_DATA);
  }

  // Format the number to two decimal places
  return value.toLocaleString('en-US', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
};
