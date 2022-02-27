import React from 'react'

import { AppBar, Toolbar, Typography } from '@mui/material'
import LandscapeIcon from '@mui/icons-material/Landscape'

export const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <LandscapeIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          Hike assistant
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
