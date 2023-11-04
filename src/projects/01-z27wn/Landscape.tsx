'use client';

import { Box, Stack, Typography } from '@mui/material';

import { Avatar, EventTitle } from './Components';

export default function Landscape() {
  return (
    <Stack
      border={(t) => `6px double ${t.palette.divider}`}
      borderRadius={2}
      height={'100%'}
      width={'100%'}
      rowGap={4}
      p={5}>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        width={'100%'}
        px={5}>
        <Stack rowGap={6} px={5} flex={1}>
          <Stack rowGap={2}>
            <Typography>An open invitation to:</Typography>
            <EventTitle />
            <Typography maxWidth={360} textAlign={'center'}>
              Celebrating life with a night of songful expression, reconnection
              and reverence of Christ.
            </Typography>
          </Stack>
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'flex-start'}
            width={'100%'}>
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
        <Box>
          <Avatar width={275} />
        </Box>
      </Stack>
    </Stack>
  );
}
