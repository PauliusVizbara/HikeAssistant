import React from 'react'
import { Container as muiContainer, styled } from '@mui/material'

const Main = styled('main')(({ theme }) => ({
  flexGrow: 1,
  backgroundColor: theme.palette.grey[100],
}))

const Container = styled(muiContainer)(({ theme }) => ({
  marginTop: theme.spacing(5),
}))

export const MainContent: React.FC = (props) => {
  const { children } = props
  return (
    <Main>
      <Container>{children}</Container>
    </Main>
  )
}
