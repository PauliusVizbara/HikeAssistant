import { Box, Typography } from '@mui/material'
import React from 'react'

type EquipmentProps = {
  name: string
  amount?: string
}

export const Equipment: React.FC<EquipmentProps> = (props) => {
  const { name, amount } = props
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
