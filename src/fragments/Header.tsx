import { AppBar, Toolbar } from '@mui/material';

import { Link } from 'src/components/Link';

export default function Header() {
  return (
    <AppBar position={'sticky'}>
      <Toolbar>
        <Link href={'/'}>ZVisuals</Link>
      </Toolbar>
    </AppBar>
  );
}
