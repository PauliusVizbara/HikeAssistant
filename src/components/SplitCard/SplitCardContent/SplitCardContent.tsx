import React from 'react'
import { Grid as muiGrid, styled } from '@mui/material'

const Grid = styled(muiGrid)(({ theme }) => ({
  padding: theme.spacing(2),
}))

export const SplitCardContent: React.FC = (props) => {
  const { children } = props
  return (
    <Grid item xs>
      {children}
    </Grid>
  )
}
