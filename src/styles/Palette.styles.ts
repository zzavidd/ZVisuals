import { alpha, type PaletteOptions } from '@mui/material';

const palette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: '#f5b765',
  },
  background: {
    default: 'hsl(60, 6%, 6%)',
  },
  divider: alpha('#f5b765', 0.6),
  contrastThreshold: 4.5,
};

export default palette;
