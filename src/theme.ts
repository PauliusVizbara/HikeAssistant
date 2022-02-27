import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#428813',
    },
    secondary: {
      main: '#EBB249',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
})
