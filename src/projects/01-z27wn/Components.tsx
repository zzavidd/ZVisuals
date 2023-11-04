'use client';

import {
  Stack,
  Typography,
  useTheme,
  type TypographyProps,
} from '@mui/material';
import Image from 'next/image';

import zavid from './assets/zavid1.JPG';

export function Avatar({ width }: { width: number }) {
  const theme = useTheme();
  return (
    <Image
      src={zavid.src}
      width={width}
      height={width}
      alt={'bg'}
      style={{
        border: `9px double ${theme.palette.divider}`,
        borderRadius: '50%',
        objectFit: 'cover',
        objectPosition: '0 -5px',
      }}
    />
  );
}

export function EventTitle(props: TypographyProps) {
  return (
    <Stack pb={2}>
      <Typography variant={'h1'} color={'primary'} {...props}>
        Zavid&apos;s 27
        <Typography
          variant={'h1'}
          display={'inline'}
          component={'sup'}
          fontSize={'60%'}>
          th
        </Typography>
      </Typography>
      <Typography variant={'h1'} color={'primary'}>
        Worship Night
      </Typography>
    </Stack>
  );
}
