import { EquipmentFormValues } from '../../views/EquipmentGatherer/EquipmentGathererContainer'
import { equipmentById } from '../equipment'
import { EquipmentDictionary, EQUIPMENT_ID } from '../types'

enum SEASON {
  WINTER,
  SPRING,
  SUMMER,
  AUTUMN,
}

export const weatherUpdater = (userInput: EquipmentFormValues) => {
  const { hikeDate } = userInput
  const hikeMonth = hikeDate.getMonth()

  let season = SEASON.WINTER
  switch (hikeMonth) {
    case 2:
    case 3:
    case 4:
      season = SEASON.SPRING
      break
    case 5:
    case 6:
    case 7:
      season = SEASON.SUMMER
      break
    case 8:
    case 9:
    case 10:
      season = SEASON.AUTUMN
      break
  }

  const equipment: EquipmentDictionary = {}

  switch (season) {
    case SEASON.WINTER:
      equipment[EQUIPMENT_ID.WARM_CLOTHES] =
        equipmentById[EQUIPMENT_ID.WARM_CLOTHES]
      break
    case SEASON.SUMMER:
      equipment[EQUIPMENT_ID.CAP] = equipmentById[EQUIPMENT_ID.CAP]
      equipment[EQUIPMENT_ID.REPELLENT] = equipmentById[EQUIPMENT_ID.REPELLENT]

      break
    case SEASON.SPRING:
      equipment[EQUIPMENT_ID.REPELLENT] = equipmentById[EQUIPMENT_ID.REPELLENT]
      break
    case SEASON.AUTUMN:
      equipment[EQUIPMENT_ID.UMBRELLA] = equipmentById[EQUIPMENT_ID.UMBRELLA]
      break
  }

  return equipment
}
