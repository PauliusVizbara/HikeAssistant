import {
  AMOUNT_MEASUREMENT,
  CHECKLIST_LOCATION,
  EquipmentDictionary,
  EQUIPMENT_ID,
} from './types'

export const equipmentById: EquipmentDictionary = {
  [EQUIPMENT_ID.BACKPACK]: {
    id: EQUIPMENT_ID.BACKPACK,
    name: 'Backpack',
    amount: 1,
    measurement: AMOUNT_MEASUREMENT.UNITS,
    checklistLocation: CHECKLIST_LOCATION.WELCOME_MESSAGE,
  },
  [EQUIPMENT_ID.KNIFE]: {
    id: EQUIPMENT_ID.KNIFE,
    name: 'Knife',
    amount: 1,
    measurement: AMOUNT_MEASUREMENT.UNITS,
    checklistLocation: CHECKLIST_LOCATION.WELCOME_MESSAGE,
  },
  [EQUIPMENT_ID.COMPASS]: {
    id: EQUIPMENT_ID.COMPASS,
    name: 'Compass',
    amount: 1,
    measurement: AMOUNT_MEASUREMENT.UNITS,
    checklistLocation: CHECKLIST_LOCATION.WELCOME_MESSAGE,
  },
  [EQUIPMENT_ID.MAP]: {
    id: EQUIPMENT_ID.MAP,
    name: 'Map',
    amount: 1,
    measurement: AMOUNT_MEASUREMENT.UNITS,
    checklistLocation: CHECKLIST_LOCATION.WELCOME_MESSAGE,
  },
}

export const startingEquipment: EquipmentDictionary = {
  [EQUIPMENT_ID.BACKPACK]: equipmentById[EQUIPMENT_ID.BACKPACK],
  [EQUIPMENT_ID.KNIFE]: equipmentById[EQUIPMENT_ID.KNIFE],
  [EQUIPMENT_ID.COMPASS]: equipmentById[EQUIPMENT_ID.COMPASS],
}
