import { Box, Typography, Zoom } from '@mui/material'
import React from 'react'
import { AMOUNT_MEASUREMENT, EquipmentType } from '../../domain/types'
import AddIcon from '@mui/icons-material/Add'

type EquipmentProps = {
  equipment: EquipmentType
}

const getMeasurementSymbol = (measurement?: AMOUNT_MEASUREMENT) => {
  switch (measurement) {
    case AMOUNT_MEASUREMENT.UNITS:
      return 'x'
    default:
      return 'x'
  }
}

export const Equipment: React.FC<EquipmentProps> = (props) => {
  const {
    equipment: { name, amount, measurement },
  } = props
  return (
    <Zoom in={true}>
      <Box display="flex" alignItems="center">
        <AddIcon />
        {amount && (
          <Typography sx={{ fontWeight: 'light' }} variant="h6" noWrap>
            {amount}
            {getMeasurementSymbol(measurement)}
          </Typography>
        )}
        <Box sx={{ m: 0.5 }} />
        <Typography variant="h6" noWrap>
          {name}
        </Typography>
      </Box>
    </Zoom>
  )
}
