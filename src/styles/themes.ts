import { createTheme } from '@mui/material'

const asaBlue = '#2D3567'
const asaYellow = '#FEBE25'

const mainTheme = createTheme({
  palette: {
    primary: {
      main: asaBlue,
      contrastText: '#fff'
    },
    secondary: {
      main: asaYellow,
      contrastText: '#000'
    }
  },
  typography: {
    h6: {
      fontSize: '13px'
    }
  },
  components: {
    MuiCardHeader: {
      styleOverrides: {
        title: {
          color: asaBlue,
          fontWeight: 'bold'
        },
        avatar: {
          color: asaBlue
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          color: asaBlue,
          overflow: 'visible'
        }
      }
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          color: asaBlue
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: asaBlue
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          color: asaBlue
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: asaBlue
        }
      }
    }
  }
})

export default mainTheme
