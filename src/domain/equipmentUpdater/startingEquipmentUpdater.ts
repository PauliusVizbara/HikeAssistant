import { EquipmentFormValues } from '../../views/EquipmentGatherer/EquipmentGathererContainer'
import { equipmentById } from '../equipment'
import { EQUIPMENT_ID } from '../types'

export const startingEquipmentUpdater = (userInput: EquipmentFormValues) => {
  const { map } = userInput
  if (map) return { [EQUIPMENT_ID.MAP]: equipmentById[EQUIPMENT_ID.MAP] }
}
