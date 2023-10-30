'use client';

import { Stack, alpha } from '@mui/material';
import Image from 'next/image';

import { CANVAS_HEIGHT, CANVAS_WIDTH } from 'src/constants';
import bgImage from 'src/public/zavid2.JPG';

export default function Canvas({ children }: React.PropsWithChildren) {
  return (
    <Stack width={'100%'}>
      <Stack
        height={CANVAS_HEIGHT}
        width={CANVAS_WIDTH}
        p={6}
        sx={{
          backgroundColor: (t) => alpha(t.palette.primary.main, 0.95),
          position: 'relative',
          overflow: 'hidden',
        }}>
        <Stack height={'100%'} width={'100%'}>
          <Image
            src={bgImage.src}
            alt={'bg'}
            fill={true}
            style={{
              filter: 'blur(7px) grayscale(100%)',
              objectFit: 'cover',
              objectPosition: '-100px 0',
              zIndex: -1,
            }}
          />
          {children}
        </Stack>
      </Stack>
    </Stack>
  );
}
