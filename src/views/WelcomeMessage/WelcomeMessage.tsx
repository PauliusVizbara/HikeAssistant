import React from 'react'
import { Divider, Typography } from '@mui/material'
import { SplitCard } from '../../components/SplitCard/SplitCard/SplitCard'
import { SplitCardContent } from '../../components/SplitCard/SplitCardContent/SplitCardContent'

export const WelcomeMessage = () => {
  return (
    <>
      <SplitCard>
        <SplitCardContent>
          <Typography variant="h5">Welcome to Hike Assistant!</Typography>
          <Typography variant="subtitle1">
            Let&apos;s begin your preparations
          </Typography>
          <Typography sx={{ pt: 2 }} variant="body1">
            This app will guide You through packing for the hike by providing
            the needed essentials, as well as asking variuos questions about
            Your journey to cater for additional needs.
          </Typography>
        </SplitCardContent>
        <Divider orientation="vertical" flexItem></Divider>
        <SplitCardContent>
          <Typography variant="h5">Your equipment</Typography>
        </SplitCardContent>
      </SplitCard>
    </>
  )
}
