'use client';

import { Box, Stack, Typography } from '@mui/material';
import QRCode from 'react-qr-code';

import { Avatar, EventDetails, EventTitle } from './Components';

const EVENT_URL =
  'https://www.eventbrite.co.uk/e/zavids-27th-worship-night-tickets-753430670417';

export default function ChurchAdvert() {
  return (
    <Box
      border={(t) => `6px double ${t.palette.divider}`}
      borderRadius={2}
      height={'100%'}
      width={'100%'}
      position={'relative'}
      p={5}>
      <Box position={'absolute'} top={'5%'} right={'3%'}>
        <Avatar width={300} />
      </Box>
      <Stack flex={1} rowGap={6} justifyContent={'center'} height={'100%'}>
        <Box width={'60%'}>
          <Title />
        </Box>
        <Stack direction={'row'} justifyContent={'space-evenly'} width={'75%'}>
          <EventDetails StackProps={{ alignItems: 'center' }} />
          <QRCodeBox />
        </Stack>
      </Stack>
    </Box>
  );
}

function Title() {
  return (
    <Stack rowGap={2} alignItems={'center'}>
      <Typography>An open invitation to:</Typography>
      <EventTitle
        StackProps={{ alignItems: 'center' }}
        TypographyProps={{ fontSize: 72 }}
      />
      <Typography maxWidth={360} textAlign={'center'}>
        Celebrating life with a night of songful expression, reconnection and
        reverence of Christ.
      </Typography>
    </Stack>
  );
}

function QRCodeBox() {
  return (
    <Box
      sx={{
        border: (t) => `2px solid ${t.palette.common.white}`,
        height: 'fit-content',
        width: 'fit-content',
      }}>
      <QRCode value={EVENT_URL} size={100} />
    </Box>
  );
}
