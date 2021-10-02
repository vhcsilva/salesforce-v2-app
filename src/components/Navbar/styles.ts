import { Button, Grid } from '@mui/material'
import styled from 'styled-components'

import mainTheme from 'styles/themes'

export const SMenu = styled(Grid)`
  background-color: ${mainTheme.palette.primary.dark};
  padding: 5px 5px 1px;
`
export const SButton = styled(Button)(({ theme }) => ({
  '&.logout': {
    color: theme.palette.primary.contrastText,
    fontWeight: 'bold',
    fontSize: '12px',
    marginRight: '10px'
  },
  '&.normal': {
    color: theme.palette.primary.light,
    fontSize: '12px',
    fontWeight: 'normal',
    marginRight: '10px',
    '&:hover': {
      color: theme.palette.primary.contrastText,
      fontWeight: 'bold'
    }
  },
  '&.active': {
    color: theme.palette.primary.contrastText,
    fontWeight: 'bold',
    fontSize: '12px',
    marginRight: '10px',
    borderBottom: '2px solid',
    borderRadius: '0'
  }
}))
