import React from 'react'
import { Card, CardContent, Grid } from '@mui/material'

export const SplitCard: React.FC = (props) => {
  const { children } = props
  return (
    <Card>
      <CardContent>
        <Grid container>{children}</Grid>
      </CardContent>
    </Card>
  )
}
