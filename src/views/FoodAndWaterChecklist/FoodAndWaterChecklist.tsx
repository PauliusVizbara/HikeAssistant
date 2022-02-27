import React from 'react'
import { Box, Slider, Stack, Typography } from '@mui/material'
import { SplitCard } from '../../components/SplitCard/SplitCard/SplitCard'
import { SplitCardContent } from '../../components/SplitCard/SplitCardContent/SplitCardContent'
import { CHECKLIST_LOCATION, EquipmentDictionary } from '../../domain/types'
import { FormikProps } from 'formik'
import { EquipmentFormValues } from '../EquipmentGatherer/EquipmentGathererContainer'
import HikingIcon from '@mui/icons-material/Hiking'
import { Equipment } from '../../components/Equipment/Equipment'

type FoodAndWaterChecklistProps = {
  equipmentList: EquipmentDictionary
  daysHiking: number
} & Pick<FormikProps<EquipmentFormValues>, 'values' | 'handleChange'>

export const FoodAndWaterChecklist: React.FC<FoodAndWaterChecklistProps> = (
  props
) => {
  const { equipmentList, handleChange, values, daysHiking } = props
  return (
    <SplitCard>
      <SplitCardContent>
        <Typography variant="h5">Food and water</Typography>
        <Typography variant="subtitle1">
          We&apos;re not hiking on an empty stomach...
        </Typography>
        <Typography sx={{ pt: 2 }} variant="body1">
          The amount of food and water You&apos;ll need to bring will depend on
          how long do you plan on travelling.
        </Typography>
        <Stack spacing={2} sx={{ mt: 5 }} direction="row" alignItems="center">
          <HikingIcon />
          <Slider
            aria-label="DistanceInKm"
            name="distanceInKm"
            id="distanceInKm"
            value={values.distanceInKm}
            valueLabelDisplay="on"
            step={5}
            marks
            min={5}
            max={200}
            onChange={handleChange}
          />
        </Stack>
        <Typography>Hike&apos;s total distance in kilometers</Typography>

        <Stack spacing={2} sx={{ mt: 5 }} direction="row" alignItems="center">
          <HikingIcon />
          <Slider
            aria-label="DistancePerDayInKm"
            name="distancePerDayInKm"
            id="distancePerDayInKm"
            value={values.distancePerDayInKm}
            valueLabelDisplay="on"
            step={5}
            marks
            min={10}
            max={100}
            onChange={handleChange}
          />
        </Stack>
        <Typography>Hike&apos;s distance per day in kilometers</Typography>
        <Typography sx={{ fontStyle: 'italic' }} variant="body2">
          *Leave it at the average 40 kilometers per day if unsure
        </Typography>
        <Box sx={{ mt: 5 }} display="flex" alignItems="flex-end">
          <Typography sx={{ lineHeight: 1, mr: 0.5 }} variant="h2">
            {daysHiking}
          </Typography>
          <Typography variant="h6">days hiking in total</Typography>
        </Box>
      </SplitCardContent>
      <SplitCardContent>
        {Object.values(equipmentList)
          .filter(
            (equipment) =>
              equipment.checklistLocation === CHECKLIST_LOCATION.FOOD_AND_WATER
          )
          .map((equipment) => (
            <Equipment key={equipment.id} equipment={equipment} />
          ))}
      </SplitCardContent>
    </SplitCard>
  )
}
