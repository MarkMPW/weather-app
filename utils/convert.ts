export const visibilityInKm = (currentVisibility: number) => {
  const kmConverter = 1000
  const km = currentVisibility / kmConverter
  return km
}
