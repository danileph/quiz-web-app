export function formatDate(input: string): string {
  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/; // Regular expression to match DD/MM/YYYY format

  if (dateRegex.test(input)) {
    const parts = input.split("/");
    const formattedDate = `${parts[0]}.${parts[1]}.${parts[2]}`;
    return formattedDate;
  } else {
    return input; // Return input unchanged if not in DD/MM/YYYY format
  }
}
