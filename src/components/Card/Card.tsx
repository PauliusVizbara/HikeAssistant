import { Card as muiCard, styled } from '@mui/material'

export const Card = styled(muiCard)(({ theme }) => ({
  padding: theme.spacing(3),
}))
