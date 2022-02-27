export enum AMOUNT_MEASUREMENT {
  UNITS,
  VOLUME,
  WEIGHT,
  DAYS_OF_WORTH,
  NONE,
  PERCENT,
}

export enum CHECKLIST_LOCATION {
  WELCOME_MESSAGE,
  FOOD_AND_WATER,
  OVERNIGHT,
}

export type EquipmentType = {
  id: EQUIPMENT_ID
  name: string
  amount?: number
  measurement?: AMOUNT_MEASUREMENT
  checklistLocation: CHECKLIST_LOCATION
  tip?: string
}

export enum EQUIPMENT_ID {
  BACKPACK,
  KNIFE,
  COMPASS,
  MAP,
  FOOD,
  WATER,
  DOG_FOOD,
  TENT,
  SLEEPING_BAG,
}

export type EquipmentDictionary = { [key in EQUIPMENT_ID]?: EquipmentType }
