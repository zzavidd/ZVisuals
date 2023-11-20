'use client';

import { Stack, ThemeProvider, alpha } from '@mui/material';

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
        p={5}
        ref={elementRef}
        sx={{
          backgroundColor: (t) => alpha(t.palette.background.default, 0.9),
          overflow: 'hidden',
          position: 'relative',
        }}>
        <Stack height={'100%'} width={'100%'}>
          {children}
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
