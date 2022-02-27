import React from 'react'
import { EquipmentType, CHECKLIST_LOCATION } from '../../types'
import { WelcomeMessage } from '../WelcomeMessage/WelcomeMessage'

const equipmentList: EquipmentType[] = [
  {
    id: 'backpack',
    name: 'Sturdy backpack',
    checklistLocation: CHECKLIST_LOCATION.WELCOME_MESSAGE,
  },
  {
    id: 'knife',
    name: 'Knife',
    checklistLocation: CHECKLIST_LOCATION.WELCOME_MESSAGE,
  },
  {
    id: 'compass',
    name: 'Compass',
    checklistLocation: CHECKLIST_LOCATION.WELCOME_MESSAGE,
  },
]

export const EquipmentGatherer = () => {
  return (
    <>
      <WelcomeMessage equipmentList={equipmentList} />
    </>
  )
}
