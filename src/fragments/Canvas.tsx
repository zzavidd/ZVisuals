'use client';

import { Button, Stack, alpha } from '@mui/material';
import * as html2Image from 'html-to-image';
import Image from 'next/image';

import { useRef, useState } from 'react';
import { CANVAS_HEIGHT, CANVAS_WIDTH } from 'src/constants';
import bgImage from 'src/public/zavid2.JPG';

export default function Canvas({ children }: React.PropsWithChildren) {
  const [state, setState] = useState({ url: '' });
  const elementRef = useRef<HTMLDivElement>(null);

  async function preview() {
    const element = elementRef.current;
    if (!element) return;

    const url = await html2Image.toPng(element, {
      canvasHeight: CANVAS_HEIGHT,
      canvasWidth: CANVAS_WIDTH,
      pixelRatio: 3,
    });
    setState({ url });
  }

  return (
    <Stack direction={'row'} width={'100%'}>
      <Stack
        height={CANVAS_HEIGHT}
        width={CANVAS_WIDTH}
        p={6}
        ref={elementRef}
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
      {state.url ? (
        <Image
          src={state.url}
          alt={'preview'}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
        />
      ) : null}
      <Button variant={'contained'} onClick={preview}>
        Download
      </Button>
    </Stack>
  );
}
