import { Suspense } from 'react'
import Router from 'src/Router'
import { ThemeProvider } from '@mui/material/styles'
import theme from 'src/modules/theme'
import { Provider } from 'react-redux'
import configureStore from 'src/store/configureStore'
import { ToastContainer } from 'react-toastify'
import { toastSettings } from 'src/constants'

// Mui pickers time utils
import MomentUtils from '@date-io/moment'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'

const store = configureStore()

const App = () => {
  return (
    <Suspense>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <Router />
            <ToastContainer {...toastSettings} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </Provider>
    </Suspense>
  )
}

export default App
