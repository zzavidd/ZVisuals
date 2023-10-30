import { CssBaseline } from '@mui/material';

import ThemeRegistry from '../fragments/ThemeRegistry';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={'en'}>
      <head />
      <body>
        <ThemeRegistry options={{ key: 'mui' }}>
          <CssBaseline />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
