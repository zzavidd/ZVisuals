import { CssBaseline } from '@mui/material';

import Header from 'src/fragments/Header';

import ThemeRegistry from '../fragments/ThemeRegistry';

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang={'en'}>
      <head />
      <body>
        <ThemeRegistry options={{ key: 'mui' }}>
          <CssBaseline />
          <Header />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
