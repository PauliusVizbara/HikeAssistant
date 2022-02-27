import React, { useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { MainContent } from './components/MainContent/MainContent'
import { theme } from './theme'
import { LayoutWrapper } from './components/LayoutWrapper/LayoutWrapper'
import {
  EquipmentFormValues,
  EquipmentGathererContainer,
} from './views/EquipmentGatherer/EquipmentGathererContainer'
import { startingEquipment } from './domain/equipment'
import { EquipmentDictionary } from './domain/types'
import { updateEquipment } from './domain/equipmentUpdater'
import { EquipmentOverview } from './views/EquipmentOverview/EquipmentOverview'

function App() {
  const [equipmentList, setEquipmentList] =
    useState<EquipmentDictionary>(startingEquipment)

  const onUserInputChange = (formValues: EquipmentFormValues) => {
    const newEquipment = updateEquipment(formValues)
    setEquipmentList(newEquipment)
  }

  return (
    <ThemeProvider theme={theme}>
      <LayoutWrapper>
        <Header />
        <MainContent>
          <EquipmentGathererContainer
            equipmentList={equipmentList}
            onUserInputChange={onUserInputChange}
          />
          <EquipmentOverview equipmentList={equipmentList} />
        </MainContent>
        <Footer />
      </LayoutWrapper>
    </ThemeProvider>
  )
}

export default App
