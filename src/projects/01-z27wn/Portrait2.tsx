'use client';

import { Stack, Typography } from '@mui/material';

export default function Portrait2() {
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
        <Typography variant={'h2'}>For those coming in via train:</Typography>
        <Typography variant={'body2'}>
          Taking a train to Cambridge station gives easy access to King&apos;s
          Church which is just a 9-minute walk away from the station.
        </Typography>
      </Stack>
      <Stack rowGap={1}>
        <Typography variant={'h2'}>For those coming in via car:</Typography>
        <Typography variant={'body2'}>
          The church has very few parking bays at the rear for the very early
          birds. Look into parking at Gwydir Street Car Park or Queen Anne Car
          Park for spaces free from 6pm.
        </Typography>
        <Typography variant={'body2'}>
          The neighbouring streets around Tenison Road may also have free
          parking spaces, some from 6pm and some from 8pm.
        </Typography>
      </Stack>
    </Stack>
  );
}
