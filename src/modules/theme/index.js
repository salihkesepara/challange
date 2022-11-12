import { createTheme } from '@mui/material/styles'
import components from 'src/modules/theme/components'
import palette from 'src/modules/theme/palette'

const themeOptions = {
  palette,
  components
}

const theme = createTheme({ ...themeOptions })

export default theme
