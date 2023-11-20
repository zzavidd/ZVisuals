import { alpha, createTheme, type ThemeOptions } from '@mui/material';
import { Playball, Rowdies } from 'next/font/google';

import { sharedThemeOptions } from 'src/styles/Theme.styles';

const playball = Playball({
  display: 'swap',
  preload: true,
  subsets: ['latin'],
  weight: ['400'],
});

const rowdies = Rowdies({
  display: 'swap',
  preload: true,
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const PRIMARY_COLOR = '#f5b765';

const themeOptions: ThemeOptions = {
  ...sharedThemeOptions,
  palette: {
    mode: 'dark',
    primary: {
      main: PRIMARY_COLOR,
    },
    background: {
      default: 'hsl(60, 6%, 6%)',
    },
    divider: alpha(PRIMARY_COLOR, 0.6),
    contrastThreshold: 4.5,
  },
  typography: {
    h1: {
      fontFamily: playball.style.fontFamily,
      fontSize: 72,
      lineHeight: 1,
      textTransform: 'initial',
      fontWeight: 700,
    },
    h2: {
      color: PRIMARY_COLOR,
      fontFamily: rowdies.style.fontFamily,
      fontSize: 16,
      fontWeight: 300,
      lineHeight: 1.6,
      textTransform: 'uppercase',
    },
    body1: {
      fontFamily: rowdies.style.fontFamily,
      fontWeight: 300,
      textTransform: 'initial',
    },
    body2: {
      fontFamily: rowdies.style.fontFamily,
      fontSize: 18,
      fontWeight: 300,
      paddingBottom: 12,
      lineHeight: 1.7,
      textTransform: 'initial',
    },
    body3: {
      fontFamily: rowdies.style.fontFamily,
      fontSize: 17.5,
      fontWeight: 300,
      paddingBottom: 12,
      lineHeight: 1.7,
      textTransform: 'initial',
    },
  },
};

const theme = createTheme(themeOptions);
export default theme;
