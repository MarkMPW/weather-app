export function assessVisibilityLevel(currentVisibility: number): string {
  let level = ''
  if(currentVisibility >= 10000) {
    level = 'Good'
  } else if(currentVisibility >= 4000 || currentVisibility < 10000) {
    level = 'Moderate'
  } else {
    level = 'Low'
  }
  return level
}

export function checkHumidityLevel(humidity: number): string {
  if (humidity >= 60 && humidity <= 80) {
    return "Good";
  } else if (humidity > 80 || humidity < 60) {
    return "Normal";
  } else {
    return "Bad";
  }
}