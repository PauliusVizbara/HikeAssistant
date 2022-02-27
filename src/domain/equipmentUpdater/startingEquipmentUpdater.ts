import { EquipmentFormValues } from '../../views/EquipmentGatherer/EquipmentGathererContainer'
import { equipmentById } from '../equipment'
import { EQUIPMENT_ID } from '../types'

export const startingEquipmentUpdater = (userInput: EquipmentFormValues) => {
  if (userInput.map)
    return { [EQUIPMENT_ID.MAP]: equipmentById[EQUIPMENT_ID.MAP] }
}
