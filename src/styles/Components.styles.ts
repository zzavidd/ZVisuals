import { type Components, type Theme } from '@mui/material';

const components: Components<Theme> = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        height: '100vh',
        overscrollBehavior: 'none',
      },
    },
  },
};

export default components;
