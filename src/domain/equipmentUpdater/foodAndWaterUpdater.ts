import { EquipmentFormValues } from '../../views/EquipmentGatherer/EquipmentGathererContainer'
import { equipmentById } from '../equipment'
import { EquipmentDictionary, EquipmentType, EQUIPMENT_ID } from '../types'

const foodPerDayInKg = 0.9
const waterPerDayInLiters = 6

export const foodAndWaterUpdater = (userInput: EquipmentFormValues) => {
  const { distanceInKm, distancePerDayInKm, isDogIncluded } = userInput
  const daysHiking = Math.ceil(distanceInKm / distancePerDayInKm)

  const equipment: EquipmentDictionary = {
    [EQUIPMENT_ID.FOOD]: {
      ...equipmentById[EQUIPMENT_ID.FOOD],
      amount: Math.round(daysHiking * foodPerDayInKg),
    } as EquipmentType,
    [EQUIPMENT_ID.WATER]: {
      ...equipmentById[EQUIPMENT_ID.WATER],
      amount: Math.round(daysHiking * waterPerDayInLiters),
    } as EquipmentType,
  }

  if (isDogIncluded) {
    equipment[EQUIPMENT_ID.DOG_FOOD] = equipmentById[EQUIPMENT_ID.DOG_FOOD]
  }

  return equipment
}
