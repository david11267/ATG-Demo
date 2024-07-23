export function stringToLocalTimeAndDate(time: string) {
  const dateAndTime = new Date(time).toLocaleString("sv");
  return dateAndTime;
}

export function stringToLocalTime(time: string) {
  const localAreaTime = new Date(time).toLocaleTimeString("sv");
  return localAreaTime;
}
