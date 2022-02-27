import React from 'react'
import { ThemeProvider } from '@emotion/react'
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { MainContent } from './components/MainContent/MainContent'
import { theme } from './theme'
import { WelcomeMessage } from './views/WelcomeMessage/WelcomeMessage'
import { LayoutWrapper } from './components/LayoutWrapper/LayoutWrapper'
import { CHECKLIST_LOCATION, EquipmentType } from './types'

const equipmentList: EquipmentType[] = [
  {
    id: 'backpack',
    name: 'Sturdy backpack',
    checklistLocation: CHECKLIST_LOCATION.WELCOME_MESSAGE,
  },
  {
    id: 'knife',
    name: 'Knife',
    checklistLocation: CHECKLIST_LOCATION.WELCOME_MESSAGE,
  },
  {
    id: 'compass',
    name: 'Compass',
    checklistLocation: CHECKLIST_LOCATION.WELCOME_MESSAGE,
  },
]

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LayoutWrapper>
        <Header />
        <MainContent>
          <WelcomeMessage equipmentList={equipmentList} />
        </MainContent>
        <Footer />
      </LayoutWrapper>
    </ThemeProvider>
  )
}

export default App
