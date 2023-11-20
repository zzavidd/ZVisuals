'use client';

import {
  Box,
  Stack,
  SvgIcon,
  Typography,
  useTheme,
  type StackProps,
  type TypographyProps,
} from '@mui/material';
import Image, { type ImageProps } from 'next/image';
import React from 'react';

import zavid from './assets/zavid1.JPG';

export function Avatar(props: Partial<ImageProps>) {
  const theme = useTheme();
  return (
    <Image
      src={zavid.src}
      width={props.width}
      height={props.width}
      alt={'bg'}
      style={{
        border: `9px double ${theme.palette.divider}`,
        borderRadius: '50%',
        objectFit: 'cover',
        objectPosition: '0 -5px',
        ...props.style,
      }}
    />
  );
}

export function EventTitle({
  StackProps,
  TypographyProps = {},
}: EventTitleProps) {
  const { fontSize = 0, ...remainingProps } = TypographyProps;
  return (
    <Stack pb={2} {...StackProps}>
      <Typography variant={'h1'} color={'primary'} {...TypographyProps}>
        Zavid&apos;s 27
        <Typography
          variant={'h1'}
          display={'inline'}
          component={'sup'}
          fontSize={fontSize * 0.6 || '60%'}
          {...remainingProps}>
          th
        </Typography>
      </Typography>
      <Typography variant={'h1'} color={'primary'} {...TypographyProps}>
        Worship Night
      </Typography>
    </Stack>
  );
}

export function EventDetails({ StackProps }: EventDetailsProps) {
  return (
    <React.Fragment>
      <Stack {...StackProps}>
        <Typography variant={'h2'}>Date & Time:</Typography>
        <Typography>Friday 1st December 2023</Typography>
        <Typography>Doors open at 7:00pm</Typography>
      </Stack>
      <Stack {...StackProps}>
        <Typography variant={'h2'}>Location:</Typography>
        <Typography>King&apos;s Church Cambridge</Typography>
        <Typography>49-53 Tenison Road</Typography>
        <Typography>Cambridge, CB1 2DG</Typography>
      </Stack>
    </React.Fragment>
  );
}

export function Signature() {
  const theme = useTheme();
  return (
    <Box width={75} position={'absolute'} bottom={0} right={0}>
      <SvgIcon>
        <svg
          viewBox={'0 0 400 316'}
          xmlns={'http://www.w3.org/2000/svg'}
          fill={theme.palette.primary.main}
          stroke={theme.palette.primary.main}
          strokeWidth={5}
          style={{
            height: '100%',
            width: '100%',
          }}>
          <path
            d={
              'M329 6c-7 3-17 8-34 19-10 6-24 15-31 19s-23 14-35 22c-47 29-60 37-78 45-17 9-22 11-29 11l-4 1 1-3c1-4 4-8 10-15s6-8 5-9c-1 0-2 0-7 6-29 33-4 32 57-2 11-7 21-13 89-55 7-4 19-11 26-16 16-11 30-19 31-18 0 0-5 3-12 8-39 26-44 28-62 43-33 25-58 48-113 104l-37 37C51 255 4 304 5 309c0 6 14-2 42-26 39-32 59-48 82-64 17-11 70-46 83-54 11-7 26-18 38-26 4-3 5-3 4-2s-4 5-8 9c-18 23-23 31-17 34 4 1 10-2 24-11 6-4 12-9 15-11 6-4 9-5 11-6 2 0 2 0 2 6 1 8 2 9 12 9h6l1 2c4 4 9 5 18 3s22-12 44-34c7-6 17-16 23-21 11-11 12-12 9-14-1-1-3 0-25 22-36 35-44 41-55 43-6 1-8 0-10-2-3-3-5-4-11-4-7 0-7 1-7-6-1-13-5-12-30 5-17 12-26 17-25 14 1-5 14-21 28-37 9-10 10-12 9-14-2-2-4 0-30 16-7 5-18 12-26 17-20 12-58 37-85 55-22 15-52 38-79 62-11 10-22 19-28 23-5 4 52-53 79-79 7-8 20-20 28-28 8-7 19-18 25-24 6-5 16-15 22-21 6-5 16-15 22-22 26-25 53-48 81-69 9-7 14-10 38-27 13-9 22-16 23-18l1-1-1-2c-1-2-4-2-9 0'
            }
          />
        </svg>
      </SvgIcon>
    </Box>
  );
}

interface EventTitleProps {
  StackProps?: StackProps;
  TypographyProps?: Omit<TypographyProps, 'fontSize'> & { fontSize?: number };
}

interface EventDetailsProps {
  StackProps?: StackProps;
}
