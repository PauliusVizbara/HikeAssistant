import React from 'react'
import { Typography } from '@mui/material'
import { SplitCard } from '../../components/SplitCard/SplitCard/SplitCard'
import { SplitCardContent } from '../../components/SplitCard/SplitCardContent/SplitCardContent'
import { Equipment } from '../../components/Equipment/Equipment'
import { CHECKLIST_LOCATION, EquipmentDictionary } from '../../domain/types'
import { FormikProps } from 'formik'
import { EquipmentFormValues } from '../EquipmentGatherer/EquipmentGathererContainer'
import DateAdapter from '@mui/lab/AdapterDateFns'
import { LocalizationProvider, MonthPicker } from '@mui/lab'

type WeatherChecklistProps = {
  equipmentList: EquipmentDictionary
} & Pick<FormikProps<EquipmentFormValues>, 'values' | 'setFieldValue'>

export const WeatherChecklist: React.FC<WeatherChecklistProps> = (props) => {
  const { equipmentList, setFieldValue, values } = props
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <SplitCard>
        <SplitCardContent>
          <Typography variant="h5">
            What&apos;s the hike&apos;s date?
          </Typography>
          <Typography variant="subtitle1">
            We might need to account for the weather
          </Typography>
          <MonthPicker
            sx={{ mt: 6 }}
            minDate={new Date('2022-01-01')}
            maxDate={new Date('2022-12-31')}
            date={values.hikeDate}
            onChange={(value: Date | null) => {
              setFieldValue('hikeDate', value)
            }}
          />
        </SplitCardContent>
        <SplitCardContent>
          {Object.values(equipmentList)
            .filter(
              (equipment) =>
                equipment.checklistLocation === CHECKLIST_LOCATION.WEATHER
            )
            .map((equipment) => (
              <Equipment key={equipment.id} equipment={equipment} />
            ))}
        </SplitCardContent>
      </SplitCard>
    </LocalizationProvider>
  )
}
