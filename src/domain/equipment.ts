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
    tip: 'A sturdier, fixed blade knife is preferable',
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
  [EQUIPMENT_ID.FOOD]: {
    id: EQUIPMENT_ID.FOOD,
    name: 'Food',
    amount: 1,
    tip: `Aim for more caloric dense food!`,
    measurement: AMOUNT_MEASUREMENT.WEIGHT,
    checklistLocation: CHECKLIST_LOCATION.FOOD_AND_WATER,
  },
  [EQUIPMENT_ID.WATER]: {
    id: EQUIPMENT_ID.WATER,
    name: 'Water',
    amount: 1,
    tip: `You might be able to replenish Your supplies along the way`,
    measurement: AMOUNT_MEASUREMENT.VOLUME,
    checklistLocation: CHECKLIST_LOCATION.FOOD_AND_WATER,
  },
}

export const startingEquipment: EquipmentDictionary = {
  [EQUIPMENT_ID.BACKPACK]: equipmentById[EQUIPMENT_ID.BACKPACK],
  [EQUIPMENT_ID.KNIFE]: equipmentById[EQUIPMENT_ID.KNIFE],
  [EQUIPMENT_ID.COMPASS]: equipmentById[EQUIPMENT_ID.COMPASS],
}
