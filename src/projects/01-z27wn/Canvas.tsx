'use client';

import { Stack, ThemeProvider, alpha } from '@mui/material';
import Image from 'next/image';

import bgImage from './assets/zavid2.JPG';
import theme from './config/theme.styles';

export default function Canvas({
  children,
  elementRef,
  settings,
}: CanvasProps) {
  return (
    <ThemeProvider theme={theme}>
      <Stack
        height={settings.height}
        width={settings.width}
        p={settings.padding}
        ref={elementRef}
        sx={{
          backgroundColor: (t) => alpha(t.palette.background.default, 0.9),
          overflow: 'hidden',
          position: 'relative',
        }}>
        <Stack height={'100%'} width={'100%'}>
          <Image
            src={bgImage.src}
            alt={'bg'}
            fill={true}
            style={{
              filter: 'blur(7px) grayscale(100%)',
              objectFit: 'cover',
              objectPosition: settings.objectPosition,
              zIndex: -1,
            }}
          />
          {children}
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
