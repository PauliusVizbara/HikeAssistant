export enum AMOUNT_MEASUREMENT {
  UNITS,
  VOLUME,
  DAYS_OF_WORTH,
}

export enum CHECKLIST_LOCATION {
  WELCOME_MESSAGE,
}

export type EquipmentType = {
  id: string
  name: string
  amount?: string
  measurement?: AMOUNT_MEASUREMENT
  checklistLocation: CHECKLIST_LOCATION
}
