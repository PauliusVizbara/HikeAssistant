import { calculateDaysHiking } from '..'
import { EquipmentFormValues } from '../../views/EquipmentGatherer/EquipmentGathererContainer'
import { equipmentById } from '../equipment'
import { EQUIPMENT_ID } from '../types'

export const overnightUpdater = (userInput: EquipmentFormValues) => {
  const { distanceInKm, distancePerDayInKm } = userInput
  const daysHiking = calculateDaysHiking(distanceInKm, distancePerDayInKm)
  if (daysHiking > 1) {
    return {
      [EQUIPMENT_ID.TENT]: equipmentById[EQUIPMENT_ID.TENT],
      [EQUIPMENT_ID.SLEEPING_BAG]: equipmentById[EQUIPMENT_ID.SLEEPING_BAG],
    }
  } else return {}
}
