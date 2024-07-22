export function stringToLocalTimeAndDate(time: string) {
  console.log(time);
  const dateAndTime = new Date(time).toLocaleString();
  console.log(dateAndTime);
  return dateAndTime;
}

export function stringToLocalTime(time: string) {
  const localAreaTime = new Date(time).toLocaleTimeString();
  return localAreaTime;
}
