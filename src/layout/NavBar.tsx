import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

// icons
import ApiIcon from '@mui/icons-material/Api'

const NavBar = () => {
  const navigate = useNavigate()
  const handleHomeButton = () => navigate('/')

  return (
    <AppBar data-testid="navBar"
      position="static">
      <Toolbar>
        <IconButton
          data-testid="btnLogo"
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleHomeButton}>
          <ApiIcon data-testid="iconApi" />
        </IconButton>
        <Typography variant="h6"
          component="div"
          align="left"
          sx={{ flexGrow: 1 }}>
          React Frontend Project
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
