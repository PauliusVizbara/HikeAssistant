import { EquipmentFormValues } from '../../views/EquipmentGatherer/EquipmentGathererContainer'
import { startingEquipment } from '../equipment'
import { startingEquipmentUpdater } from './startingEquipmentUpdater'

export const updateEquipment = (userInput: EquipmentFormValues) => {
  const updatedStartingEquipment = startingEquipmentUpdater(userInput)

  const equipment = { ...startingEquipment, ...updatedStartingEquipment }

  console.log(equipment)
  return equipment
}
