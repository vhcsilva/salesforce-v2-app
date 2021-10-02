import { ThemeProvider } from '@mui/material'
import Navbar from 'components/Navbar'
import AuthContext from 'contexts/auth'
import { user } from 'services/api'
import mainTheme from 'styles/themes'

type Props = {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = (props) => (
  <ThemeProvider theme={mainTheme}>
    <AuthContext.Provider value={user}>
      <Navbar />
      {props.children}
    </AuthContext.Provider>
  </ThemeProvider>
)

export default Layout
