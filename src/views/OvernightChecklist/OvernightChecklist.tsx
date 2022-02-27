import React from 'react'
import { Typography } from '@mui/material'
import { SplitCard } from '../../components/SplitCard/SplitCard/SplitCard'
import { SplitCardContent } from '../../components/SplitCard/SplitCardContent/SplitCardContent'
import { CHECKLIST_LOCATION, EquipmentDictionary } from '../../domain/types'
import { FormikProps } from 'formik'
import { EquipmentFormValues } from '../EquipmentGatherer/EquipmentGathererContainer'
import { Equipment } from '../../components/Equipment/Equipment'

type OvernightChecklistProps = {
  equipmentList: EquipmentDictionary
} & Pick<FormikProps<EquipmentFormValues>, 'values' | 'handleChange'>

export const OvernightChecklist: React.FC<OvernightChecklistProps> = (
  props
) => {
  const { equipmentList } = props
  return (
    <SplitCard>
      <SplitCardContent>
        <Typography variant="h5">
          {' '}
          That&apos;s a lot of distance to cover!
        </Typography>
        <Typography variant="subtitle1">
          You&apos;re going to need a place to stay the night
        </Typography>
      </SplitCardContent>
      <SplitCardContent>
        {Object.values(equipmentList)
          .filter(
            (equipment) =>
              equipment.checklistLocation === CHECKLIST_LOCATION.OVERNIGHT
          )
          .map((equipment) => (
            <Equipment key={equipment.id} equipment={equipment} />
          ))}
      </SplitCardContent>
    </SplitCard>
  )
}
