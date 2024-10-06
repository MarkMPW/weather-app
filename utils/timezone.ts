export const formatTimezone = (timezoneOffset: number): string => {
  const utcDate = new Date(); // current UTC time
  const localDate = new Date(utcDate.getTime() + timezoneOffset * 1000); // apply offset
  const hour = localDate.getUTCHours()
  const minute = localDate.getUTCMinutes()
  const formattedMinute = minute < 10 ? `0${minute}` : minute;

  return `${hour}:${formattedMinute}`
}
