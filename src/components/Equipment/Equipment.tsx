import { Box, Popover, Typography, Zoom } from '@mui/material'
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
    case AMOUNT_MEASUREMENT.VOLUME:
      return 'l.'
    case AMOUNT_MEASUREMENT.WEIGHT:
      return 'kg.'
    default:
      return 'x'
  }
}

export const Equipment: React.FC<EquipmentProps> = (props) => {
  const {
    equipment: { name, amount, measurement, tip },
  } = props

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null)

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <Zoom in={true}>
      <Box
        display="flex"
        alignItems="center"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <AddIcon />
        {amount && (
          <Typography
            sx={{ minWidth: 50, fontWeight: 'light' }}
            variant="h6"
            noWrap
          >
            {amount}
            {getMeasurementSymbol(measurement)}
          </Typography>
        )}
        <Box sx={{ m: 0.5 }} />
        <Typography variant="h6" noWrap>
          {name}
        </Typography>
        {tip && (
          <Popover
            id={`{id}-equipment-popver`}
            sx={{
              pointerEvents: 'none',
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <Typography px={2} py={1}>
              {tip}
            </Typography>
          </Popover>
        )}
      </Box>
    </Zoom>
  )
}
