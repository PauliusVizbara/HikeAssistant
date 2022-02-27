import {
  CHECKLIST_LOCATION,
  EquipmentDictionary,
  EquipmentType,
  EQUIPMENT_ID,
} from './types'

export const equipmentById: EquipmentDictionary = {
  [EQUIPMENT_ID.BACKPACK]: {
    id: EQUIPMENT_ID.BACKPACK,
    name: 'Sturdy backpack',
    checklistLocation: CHECKLIST_LOCATION.WELCOME_MESSAGE,
  },
  [EQUIPMENT_ID.KNIFE]: {
    id: EQUIPMENT_ID.KNIFE,
    name: 'Knife',
    checklistLocation: CHECKLIST_LOCATION.WELCOME_MESSAGE,
  },
  [EQUIPMENT_ID.COMPASS]: {
    id: EQUIPMENT_ID.COMPASS,
    name: 'Compass',
    checklistLocation: CHECKLIST_LOCATION.WELCOME_MESSAGE,
  },
  [EQUIPMENT_ID.MAP]: {
    id: EQUIPMENT_ID.MAP,
    name: 'Map',
    checklistLocation: CHECKLIST_LOCATION.WELCOME_MESSAGE,
  },
}

export const startingEquipment: EquipmentDictionary = {
  [EQUIPMENT_ID.BACKPACK]: equipmentById[EQUIPMENT_ID.BACKPACK],
  [EQUIPMENT_ID.KNIFE]: equipmentById[EQUIPMENT_ID.KNIFE],
  [EQUIPMENT_ID.COMPASS]: equipmentById[EQUIPMENT_ID.COMPASS],
}
