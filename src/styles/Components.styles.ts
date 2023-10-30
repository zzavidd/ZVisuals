import { type Components, type Theme } from '@mui/material';

const components: Components<Theme> = {
  MuiStack: {
    defaultProps: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  MuiTypography: {
    defaultProps: {
      textAlign: 'center',
    },
  },
};

export default components;
