import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from 'src/store'
import { BrowserRouter } from 'react-router-dom'
import Index from 'src/page/Index'
import registerServiceWorker from 'src/reagisterServiceWorker'
import 'src/asset/scss/index.scss'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'

const run = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#FFB400',
        contrastText: '#888',
        dark: '#eee',
        light: '#eee',
      },
      secondary: {
        main: '#FFFBE0',
        contrastText: '#888',
        dark: '#eee',
        light: '#eee',
      },
    },
  })
  ReactDOM.render(
    <React.StrictMode>
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <Index />
          </BrowserRouter>
        </Provider>
      </MuiThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
  )
  registerServiceWorker()
}

// eslint-disable-next-line no-prototype-builtins
if (window.hasOwnProperty('cordova')) {
  document.addEventListener('deviceready', run, false)
} else {
  run()
}
