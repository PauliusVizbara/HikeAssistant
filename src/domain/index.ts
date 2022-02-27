export const calculateDaysHiking = (
  distanceInKm: number,
  distancePerDayInKm: number
) => {
  return Math.ceil(distanceInKm / distancePerDayInKm)
}
