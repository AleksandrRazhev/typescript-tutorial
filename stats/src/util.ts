export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString
    .split("/")
    .map((item: string): number => parseInt(item));

  return new Date(dateParts[2], dateParts[0] - 1, dateParts[1]);
};
