import { Box, Typography } from '@mui/material'
import React from 'react'
import { EquipmentType } from '../../types'

type EquipmentProps = {
  equipment: EquipmentType
}

export const Equipment: React.FC<EquipmentProps> = (props) => {
  const {
    equipment: { name, amount },
  } = props
  return (
    <Box display="flex">
      {amount && (
        <Typography sx={{ fontWeight: 'light' }} variant="h6" noWrap>
          {amount}
        </Typography>
      )}
      <Box sx={{ m: 0.5 }} />
      <Typography variant="h6" noWrap>
        {name}
      </Typography>
    </Box>
  )
}
