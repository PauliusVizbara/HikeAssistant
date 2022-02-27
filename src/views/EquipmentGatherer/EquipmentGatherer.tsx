import React, { useEffect } from 'react'
import { FormikProps } from 'formik'
import { WelcomeMessage } from '../WelcomeMessage/WelcomeMessage'
import {
  EquipmentFormValues,
  EquipmentGathererProps,
} from './EquipmentGathererContainer'
import { Box, FormGroup, styled } from '@mui/material'
import { FoodAndWaterChecklist } from '../FoodAndWaterChecklist/FoodAndWaterChecklist'

const Container = styled(Box)(({ theme }) => ({
  '> *:not(:first-of-type)': {
    marginTop: theme.spacing(10),
  },
}))

export const EquipmentGatherer = (
  props: FormikProps<EquipmentFormValues> & EquipmentGathererProps
) => {
  const { handleSubmit, onUserInputChange, values } = props

  const daysHiking = Math.ceil(values.distanceInKm / values.distancePerDayInKm)

  useEffect(() => {
    onUserInputChange(values)
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Container>
          <WelcomeMessage {...props} />
          <FoodAndWaterChecklist {...props} daysHiking={daysHiking} />
        </Container>
      </FormGroup>
    </form>
  )
}
