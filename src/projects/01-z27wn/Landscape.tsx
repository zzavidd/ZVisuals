'use client';

import { Box, Stack, Typography } from '@mui/material';

import { Avatar, EventDetails, EventTitle } from './Components';

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
        height={'100%'}
        width={'100%'}
        px={5}>
        <Stack px={5} flex={1} justifyContent={'space-evenly'} height={'100%'}>
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
            <EventDetails />
          </Stack>
        </Stack>
        <Box>
          <Avatar width={275} />
        </Box>
      </Stack>
    </Stack>
  );
}
