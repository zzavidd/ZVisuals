'use client';

import { Stack, Typography } from '@mui/material';

import { Signature } from './Components';

export default function Portrait3() {
  return (
    <Stack
      borderRadius={2}
      height={'100%'}
      width={'100%'}
      position={'relative'}
      justifyContent={'center'}
      rowGap={5}
      px={5}>
      <Stack rowGap={1}>
        <Typography variant={'h2'} fontSize={'120%'} lineHeight={2.5}>
          Motivation
        </Typography>
        <Typography variant={'body3'}>
          It&apos;s as though a significant fraction of my expression of faith
          is constrained to the city in which I reside.
          <br />
          <Highlight>I want to tear those constraints asunder</Highlight>.
        </Typography>
        <Typography variant={'body3'}>
          I&apos;ve been deprived of an opportunity to spend time in reverence
          with a room full of old familiar faces. Equally, I refuse to gatekeep
          a time of corporate worship; it should be open to all who seek to
          glorify God among brethren. A birthday where&nbsp;
          <Highlight>all are welcome</Highlight>.
        </Typography>
        <Typography variant={'body3'}>
          But the core of my intentions is based on the hope of&nbsp;
          <Highlight>restoring severed relationships</Highlight>. If your
          worship or prayer life has suffered like mine can sometimes; if
          you&apos;ve neglected church or community altogether out of pain or
          confusion; if you&apos;re trying to find your way back on some
          prodigal vibes...
        </Typography>
        <Typography variant={'body3'}>
          Please, come. <Highlight>Let&apos;s just worship together</Highlight>.
        </Typography>
      </Stack>
      <Signature />
    </Stack>
  );
}

function Highlight({ children }: React.PropsWithChildren) {
  return (
    <Typography
      display={'inline'}
      component={'span'}
      fontSize={'inherit'}
      color={'primary'}>
      {children}
    </Typography>
  );
}
