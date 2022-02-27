import React from 'react'
import { Box, Typography } from '@mui/material'
import { SplitCard } from '../../components/SplitCard/SplitCard/SplitCard'
import { SplitCardContent } from '../../components/SplitCard/SplitCardContent/SplitCardContent'
import { Equipment } from '../../components/Equipment/Equipment'
import { EquipmentDictionary } from '../../domain/types'

type EquipmentOverviewProps = {
  equipmentList: EquipmentDictionary
}

export const EquipmentOverview: React.FC<EquipmentOverviewProps> = (props) => {
  const { equipmentList } = props
  return (
    <Box sx={{ mt: 10 }}>
      <SplitCard>
        <SplitCardContent>
          <Typography variant="h5">Phew, that looks all</Typography>
          <Typography variant="subtitle1">
            Let&apos;s review the final list
          </Typography>
          <Box sx={{ mt: 3 }}>
            {Object.values(equipmentList).map((equipment) => (
              <Equipment key={equipment.id} equipment={equipment} />
            ))}
          </Box>
        </SplitCardContent>
      </SplitCard>
    </Box>
  )
}
