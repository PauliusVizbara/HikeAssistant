import React, { useEffect } from 'react'
import { FormikProps } from 'formik'
import { WelcomeMessage } from '../WelcomeMessage/WelcomeMessage'
import {
  EquipmentFormValues,
  EquipmentGathererProps,
} from './EquipmentGathererContainer'
import { Box, FormGroup, styled } from '@mui/material'
import { FoodAndWaterChecklist } from '../FoodAndWaterChecklist/FoodAndWaterChecklist'
import { OvernightChecklist } from '../OvernightChecklist/OvernightChecklist'
import { calculateDaysHiking } from '../../domain'
import { WeatherChecklist } from '../WeatherChecklist/WeatherChecklist'

const Container = styled(Box)(({ theme }) => ({
  '> *:not(:first-of-type)': {
    marginTop: theme.spacing(10),
  },
}))

export const EquipmentGatherer = (
  props: FormikProps<EquipmentFormValues> & EquipmentGathererProps
) => {
  const { handleSubmit, onUserInputChange, values } = props

  const daysHiking = calculateDaysHiking(
    values.distanceInKm,
    values.distancePerDayInKm
  )

  useEffect(() => {
    onUserInputChange(values)
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Container>
          <WelcomeMessage {...props} />
          <FoodAndWaterChecklist {...props} daysHiking={daysHiking} />
          {daysHiking > 1 && <OvernightChecklist {...props} />}
          <WeatherChecklist {...props} />
        </Container>
      </FormGroup>
    </form>
  )
}
