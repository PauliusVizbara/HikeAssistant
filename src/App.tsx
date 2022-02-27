import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { Typography } from '@mui/material'
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { MainContent } from './components/MainContent/MainContent'
import { theme } from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <MainContent>
        <Typography>Hello world</Typography>
      </MainContent>
      <Footer />
    </ThemeProvider>
  )
}

export default App
