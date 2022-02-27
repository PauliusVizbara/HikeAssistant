import { EquipmentFormValues } from '../../views/EquipmentGatherer/EquipmentGathererContainer'
import { startingEquipment } from '../equipment'
import { foodAndWaterUpdater } from './foodAndWaterUpdater'
import { overnightUpdater } from './overnightUpdater'
import { startingEquipmentUpdater } from './startingEquipmentUpdater'

export const updateEquipment = (userInput: EquipmentFormValues) => {
  const updatedStartingEquipment = startingEquipmentUpdater(userInput)
  const updatedFoodAndWater = foodAndWaterUpdater(userInput)
  const updatedOvernight = overnightUpdater(userInput)
  const equipment = {
    ...startingEquipment,
    ...updatedStartingEquipment,
    ...updatedFoodAndWater,
    ...updatedOvernight,
  }

  return equipment
}
