import React from 'react'
import { FormikProps } from 'formik'
import { EquipmentType, CHECKLIST_LOCATION } from '../../types'
import { WelcomeMessage } from '../WelcomeMessage/WelcomeMessage'
import { EquipmentFormValues } from './EquipmentGathererContainer'
import { FormGroup } from '@mui/material'

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

export const EquipmentGatherer = (props: FormikProps<EquipmentFormValues>) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <WelcomeMessage equipmentList={equipmentList} {...props} />
      </FormGroup>
    </form>
  )
}
