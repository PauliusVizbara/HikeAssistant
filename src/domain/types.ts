export enum AMOUNT_MEASUREMENT {
  UNITS,
  VOLUME,
  DAYS_OF_WORTH,
}

export enum CHECKLIST_LOCATION {
  WELCOME_MESSAGE,
}

export type EquipmentType = {
  id: EQUIPMENT_ID
  name: string
  amount?: string
  measurement?: AMOUNT_MEASUREMENT
  checklistLocation: CHECKLIST_LOCATION
}

export enum EQUIPMENT_ID {
  BACKPACK,
  KNIFE,
  COMPASS,
  MAP,
}

export type EquipmentDictionary = { [key in EQUIPMENT_ID]?: EquipmentType }
