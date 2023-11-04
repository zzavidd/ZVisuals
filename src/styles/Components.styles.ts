import { type Components, type Theme } from '@mui/material';

const components: Components<Theme> = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        overscrollBehavior: 'none',
      },
    },
  },
};

export default components;
