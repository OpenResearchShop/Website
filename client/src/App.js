import { ThemeProvider } from '@emotion/react';
import { Box, createTheme } from '@mui/material';
import { Main } from './Main';

import './App.css';

const mdTheme = createTheme();

export const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <Main />
        </Box>
      </ThemeProvider>
    </div>
  );
}
