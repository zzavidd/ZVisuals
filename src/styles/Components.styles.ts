import { type Components, type Theme } from '@mui/material';

const components: Components<Theme> = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        overscrollBehavior: 'none',
      },
    },
  },
  MuiStack: {
    defaultProps: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
};

export default components;
