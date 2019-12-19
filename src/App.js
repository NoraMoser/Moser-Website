import React, { createContext, useState } from 'react';
import './App.css';
import Routes from './Routes';
import { MuiThemeProvider } from '@material-ui/core/styles'
import generateMuiTheme from '../src/utils/generateMuiTheme'
import { apiSignIn } from './utils/api';

export const AppContext = createContext({})

function App() {
  const [user, setUser] = useState({})

  const signIn = (signInObject) => {
    apiSignIn(signInObject)
    .then(data => setUser(data))
    .catch(({error}) => console.log(error))
}

const provider = { 
  signIn,
  user
}

  return (
    <MuiThemeProvider theme={generateMuiTheme('light')}>
      <AppContext.Provider value={provider}>
        <div className="App">
          <Routes />
        </div>
      </AppContext.Provider>
    </MuiThemeProvider>
  );
}

export default App;
