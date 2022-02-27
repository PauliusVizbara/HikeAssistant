import React from 'react'
import { Checkbox, Divider, FormControlLabel, Typography } from '@mui/material'
import { SplitCard } from '../../components/SplitCard/SplitCard/SplitCard'
import { SplitCardContent } from '../../components/SplitCard/SplitCardContent/SplitCardContent'
import { Equipment } from '../../components/Equipment/Equipment'
import {
  CHECKLIST_LOCATION,
  EquipmentDictionary,
  EQUIPMENT_ID,
} from '../../domain/types'
import { FormikProps } from 'formik'
import { EquipmentFormValues } from '../EquipmentGatherer/EquipmentGathererContainer'

type WelcomeMessageProps = {
  equipmentList: EquipmentDictionary
} & Pick<FormikProps<EquipmentFormValues>, 'values' | 'handleChange'>

export const WelcomeMessage: React.FC<WelcomeMessageProps> = (props) => {
  const { equipmentList, handleChange, values } = props
  return (
    <SplitCard>
      <SplitCardContent>
        <Typography variant="h5">Welcome to Hike Assistant!</Typography>
        <Typography variant="subtitle1">
          Let&apos;s begin your preparations
        </Typography>
        <Typography sx={{ pt: 2 }} variant="body1">
          This app will guide You through packing for the hike by providing the
          needed essentials, as well as asking variuos questions about Your
          journey to cater for additional needs.
        </Typography>
      </SplitCardContent>
      <SplitCardContent>
        <Typography variant="h5">Equipment</Typography>
        <Divider sx={{ my: 1 }} />
        {Object.values(equipmentList)
          .filter(
            (equipment) =>
              equipment.checklistLocation ===
                CHECKLIST_LOCATION.WELCOME_MESSAGE &&
              equipment.id !== EQUIPMENT_ID.MAP
          )
          .map((equipment) => (
            <Equipment key={equipment.id} equipment={equipment} />
          ))}
      </SplitCardContent>
      <SplitCardContent>
        <FormControlLabel
          control={
            <Checkbox
              id="map"
              name="map"
              value={values.map}
              onChange={handleChange}
            />
          }
          label="Do you Have your hike route's map?"
        />
      </SplitCardContent>
      <SplitCardContent>
        {Object.values(equipmentList)
          .filter(
            (equipment) =>
              equipment.checklistLocation ===
                CHECKLIST_LOCATION.WELCOME_MESSAGE &&
              equipment.id === EQUIPMENT_ID.MAP
          )
          .map((equipment) => (
            <Equipment key={equipment.id} equipment={equipment} />
          ))}
      </SplitCardContent>
    </SplitCard>
  )
}
