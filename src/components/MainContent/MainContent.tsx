import React from 'react'
import { Container } from '@mui/material'

export const MainContent: React.FC = (props) => {
  const { children } = props
  return (
    <main>
      <Container>{children}</Container>
    </main>
  )
}
