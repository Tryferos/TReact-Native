const formatNumber = (number: number) => {
  if (number == 1) {
    return '1st';
  }
  if (number == 2) {
    return '2nd';
  }
  if (number == 3) {
    return '3rd';
  }
  return `${number}th`;
};
export const getDateString = (date: Date) => {
  const isToday = date.getDate() === new Date().getDate();
  const day = formatNumber(date.getDate());
  const dayName = date.toLocaleString('en-US', {weekday: 'long'});
  const monthName = date.toLocaleString('en-US', {month: 'short'});
  return [isToday, `${dayName}, ${day} ${monthName}`];
};
