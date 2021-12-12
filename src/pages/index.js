import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import { Routes } from "../routes";
import { ListContext, DetailContext } from "../contexts";
import theme from "../styles/mainTheme";

const App = (props) => {
  const [list, setList] = useState([]);
  const listValue = { list, setList };

  const [detail, setDetail] = useState({});
  const detailValue = { detail, setDetail };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ListContext.Provider value={listValue}>
        <DetailContext.Provider value={detailValue}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </DetailContext.Provider>
      </ListContext.Provider>
    </ThemeProvider>
  );
};

export default App;
export { default as List } from "./List";
export { default as Detail } from "./Detail";
