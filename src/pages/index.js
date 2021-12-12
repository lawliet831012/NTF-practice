import React from 'react';
import { BrowserRouter } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { Routes } from '../routes';
import { useNft } from '../hooks';
import theme from '../styles/mainTheme';

const Context = React.createContext({});

const App = props => {
  const nft = useNft();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Context.Provider value={nft}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Context.Provider>
    </ThemeProvider>
  );
}

export default App;
export { default as List } from './List';
export { default as Detail } from './Detail';
