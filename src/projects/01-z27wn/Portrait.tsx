'use client';

import { Stack, Typography } from '@mui/material';

import { Avatar, EventTitle } from './Components';

export default function Portrait() {
  return (
    <Stack
      border={(t) => `6px double ${t.palette.divider}`}
      borderRadius={2}
      justifyContent={'space-evenly'}
      alignItems={'center'}
      height={'100%'}
      width={'100%'}
      p={5}>
      <Stack rowGap={3}>
        <Typography>An open invitation to:</Typography>
        <EventTitle />
        <Typography px={3} textAlign={'center'}>
          Celebrating life with a night of songful expression, reconnection and
          reverence of Christ.
        </Typography>
      </Stack>
      <Avatar width={275} />
      <Stack rowGap={5}>
        <Stack>
          <Typography variant={'h2'}>Date & Time:</Typography>
          <Typography>Friday 1st December 2023</Typography>
          <Typography>Doors open at 7:00pm</Typography>
        </Stack>
        <Stack>
          <Typography variant={'h2'}>Location:</Typography>
          <Typography>King&apos;s Church Cambridge</Typography>
          <Typography>49-53 Tenison Road</Typography>
          <Typography>Cambridge, CB1 2DG</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
