import React from 'react';
import './App.css';
import Routes from './Routes';
import { MuiThemeProvider } from '@material-ui/core/styles'
import generateMuiTheme from '../src/utils/generateMuiTheme'

function App() {
  return (
    <MuiThemeProvider theme={generateMuiTheme('light')}>
      <div className="App">
        <Routes />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
