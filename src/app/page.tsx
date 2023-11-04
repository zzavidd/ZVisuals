import { Container, List, ListItem } from '@mui/material';

import { Link } from 'src/components/Link';
import { PROJECTS } from 'src/utils/projects';

export default function Home() {
  return (
    <Container>
      <List>
        {Object.entries(PROJECTS).map(([key, { name }]) => (
          <ListItem key={key}>
            <Link href={`/${key}`} color={'text.primary'}>
              {name}
            </Link>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
