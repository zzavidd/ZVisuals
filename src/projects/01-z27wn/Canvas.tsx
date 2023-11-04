'use client';

import { Stack, alpha } from '@mui/material';
import Image from 'next/image';

import bgImage from './assets/zavid2.JPG';

export default function Canvas({
  children,
  settings,
  elementRef,
}: CanvasProps) {
  return (
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
  );
}
