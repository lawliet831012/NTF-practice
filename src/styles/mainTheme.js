import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    common: {
      white: '#FFFFFF',
      black: '#0B081C',
      gray: '#a2a2a2',
    },
  },
  text: {
    primary: '#222222',
    secondary: '#BFBFBF',
  },
  background: {
    default: "#a2a2a2",
  }
});

export default theme;
