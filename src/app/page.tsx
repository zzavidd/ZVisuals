'use client';

import { Stack, Typography, useTheme } from '@mui/material';
import Image from 'next/image';

import Canvas from 'src/fragments/Canvas';
import zavid from 'src/public/zavid1.JPG';

export default function Home() {
  const theme = useTheme();
  return (
    <Canvas>
      <Stack
        border={(t) => `6px double ${t.palette.divider}`}
        justifyContent={'space-evenly'}
        alignItems={'center'}
        height={'100%'}
        width={'100%'}
        p={5}>
        <Stack rowGap={3}>
          <Typography>An open invitation to:</Typography>
          <Stack pb={2}>
            <Typography variant={'h1'} color={'secondary'}>
              Zavid&apos;s 27
              <Typography
                variant={'h1'}
                display={'inline'}
                component={'sup'}
                fontSize={'60%'}>
                th
              </Typography>
            </Typography>
            <Typography variant={'h1'} color={'secondary'}>
              Worship Night
            </Typography>
          </Stack>
          <Typography>
            Celebrating life by glorifying the name of Jesus.
          </Typography>
        </Stack>
        <Image
          src={zavid.src}
          width={250}
          height={250}
          alt={'bg'}
          style={{
            border: `6px double ${theme.palette.divider}`,
            borderRadius: '50%',
            objectFit: 'cover',
            objectPosition: '0 -5px',
          }}
        />
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
    </Canvas>
  );
}
