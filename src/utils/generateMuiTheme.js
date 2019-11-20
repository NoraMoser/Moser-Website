/* Material UI */
import { createMuiTheme } from '@material-ui/core/styles'
const MaterialUI = themeType =>
  createMuiTheme({
    overrides: {
      MuiAppBar: {
        root: {
          padding: 0,
          margin: 0,
          boxShadow: 'none',
          MozBoxShadow: 'none',
          WebkitBoxShadow: 'none'
        }
      },
    },
    palette: {
      common: {
        black: '#000',
        white: '#fff'
      },
      error: {
        contrastText: '#fff',
        light: '#f44336',
        dark: '#f44336',
        main: '#f44336'
      },
      primary: {
        contrastText: '#fff',
        light: '#848482',
        dark: '#848482',
        main: '#848482'
      },
      secondary: {
        contrastText: '#000',
        light: '#fff',
        dark: '#fff',
        main: '#fff'
      },
      type: themeType
    }
  })

export default MaterialUI
