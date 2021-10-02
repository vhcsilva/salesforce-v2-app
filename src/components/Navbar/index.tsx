import { useContext, useState } from 'react'

import {
  AppBar,
  Avatar,
  Divider,
  Grid,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar
} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box } from '@mui/system'

import { AppBarItems } from 'config/menus'
import AuthContext from 'contexts/auth'
import { SButton, SMenu } from './styles'
import { useRouter } from 'next/dist/client/router'

const Navbar = () => {
  const context = useContext(AuthContext)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [drawerOpen, setOpen] = useState(false)
  const router = useRouter()
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleNavButtonClick = (url: string) => {
    router.push(url, '/')
  }

  return (
    <Box sx={{ width: '100%' }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'primary.dark',
          display: { xs: 'flex', md: 'none' }
        }}
      >
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <FontAwesomeIcon icon="bars" />
          </IconButton>
        </Toolbar>
      </AppBar>

      <SMenu container sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Grid container justifyContent="center">
            {AppBarItems.filter((item) => item.code === 'home').map(
              ({ code, title, href, icon }) => (
                <SButton
                  key={code}
                  startIcon={icon}
                  className={router.pathname === href ? 'active' : 'normal'}
                  onClick={(e) => handleNavButtonClick(href)}
                >
                  {title}
                </SButton>
              )
            )}
            {AppBarItems.filter((item) =>
              context.parameters.menu.includes(item.code)
            ).map(({ code, title, href, icon }) => (
              <SButton
                key={code}
                startIcon={icon}
                className={router.pathname === href ? 'active' : 'normal'}
                onClick={(e) => handleNavButtonClick(href)}
              >
                {title}
              </SButton>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Grid container justifyContent="flex-end">
            <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
              <Avatar sx={{ width: 32, height: 32 }} />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0
                  }
                }
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem>
                <ListItemIcon>
                  <FontAwesomeIcon icon="cog" size="1x" />
                </ListItemIcon>
                Configurações
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <FontAwesomeIcon icon="sign-out-alt" size="1x" />
                </ListItemIcon>
                Sair
              </MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </SMenu>
    </Box>
  )
}

export default Navbar
