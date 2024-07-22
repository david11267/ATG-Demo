export function stringToLocalTimeAndDate(time: string) {
  const dateAndTime = new Date(time).toLocaleString();
  return dateAndTime;
}

export function stringToLocalTime(time: string) {
  const localAreaTime = new Date(time).toLocaleTimeString();
  return localAreaTime;
}
