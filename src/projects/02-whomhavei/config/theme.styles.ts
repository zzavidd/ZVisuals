import { alpha, createTheme, type ThemeOptions } from '@mui/material';
import { Allison } from 'next/font/google';

import { sharedThemeOptions } from 'src/styles/Theme.styles';

const allison = Allison({
  display: 'swap',
  preload: true,
  subsets: ['latin'],
  weight: ['400'],
});

const PRIMARY_COLOR = '#f5b765';

const themeOptions: ThemeOptions = {
  ...sharedThemeOptions,
  palette: {
    mode: 'light',
    primary: {
      main: PRIMARY_COLOR,
    },
    background: {
      default: 'hsl(0, 0%, 100%)',
    },
    divider: alpha(PRIMARY_COLOR, 0.6),
    contrastThreshold: 4.5,
  },
  typography: {
    fontFamily: allison.style.fontFamily,
  },
};

const theme = createTheme(themeOptions);
export default theme;
