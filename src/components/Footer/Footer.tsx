import React from 'react'

import { Box, styled, Typography } from '@mui/material'

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
}))

export const Footer = () => {
  return (
    <Container component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Hike assistant
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Container>
  )
}
