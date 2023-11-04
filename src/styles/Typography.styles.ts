import { type SimplePaletteColorOptions } from '@mui/material';
import type { TypographyOptions } from '@mui/material/styles/createTypography';
import { Playball, Rowdies } from 'next/font/google';

import palette from './Palette.styles';

export const playball = Playball({
  display: 'swap',
  preload: true,
  subsets: ['latin'],
  weight: ['400'],
});

export const rowdies = Rowdies({
  display: 'swap',
  preload: true,
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const typography: TypographyOptions = {
  h1: {
    fontFamily: playball.style.fontFamily,
    fontSize: 72,
    lineHeight: 1,
    textTransform: 'initial',
    fontWeight: 700,
  },
  h2: {
    color: (palette.primary as SimplePaletteColorOptions).main,
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
};

export default typography;
