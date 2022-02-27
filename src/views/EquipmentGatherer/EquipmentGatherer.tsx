import React from 'react'
import { FormikProps } from 'formik'
import { WelcomeMessage } from '../WelcomeMessage/WelcomeMessage'
import {
  EquipmentFormValues,
  EquipmentGathererProps,
} from './EquipmentGathererContainer'
import { FormGroup } from '@mui/material'

export const EquipmentGatherer = (
  props: FormikProps<EquipmentFormValues> & EquipmentGathererProps
) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <WelcomeMessage {...props} />
      </FormGroup>
    </form>
  )
}
