'use client';

import { Stack, Typography } from '@mui/material';

import { Avatar, EventDetails, EventTitle } from './Components';

export default function Portrait() {
  return (
    <Stack
      border={(t) => `6px double ${t.palette.divider}`}
      borderRadius={2}
      height={'100%'}
      width={'100%'}
      position={'relative'}
      justifyContent={'space-evenly'}
      px={5}>
      <Avatar
        width={220}
        style={{ position: 'absolute', bottom: '3%', right: '4%' }}
      />
      <Stack rowGap={3}>
        <Typography>An open invitation to:</Typography>
        <EventTitle
          StackProps={{ alignItems: 'flex-start' }}
          TypographyProps={{ fontSize: 72 }}
        />
        <Typography maxWidth={(t) => t.spacing(13)}>
          Celebrating life with a night of songful expression, reconnection and
          reverence of Christ.
        </Typography>
      </Stack>
      <EventDetails />
    </Stack>
  );
}
