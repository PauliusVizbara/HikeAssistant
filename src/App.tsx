import React from 'react'
import { ThemeProvider } from '@emotion/react'
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { MainContent } from './components/MainContent/MainContent'
import { theme } from './theme'
import { LayoutWrapper } from './components/LayoutWrapper/LayoutWrapper'
import { EquipmentGathererContainer } from './views/EquipmentGatherer/EquipmentGathererContainer'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LayoutWrapper>
        <Header />
        <MainContent>
          <EquipmentGathererContainer />
        </MainContent>
        <Footer />
      </LayoutWrapper>
    </ThemeProvider>
  )
}

export default App
