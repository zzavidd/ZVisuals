'use client';

import {
  Button,
  Drawer,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Toolbar,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import * as html2Image from 'html-to-image';
import type React from 'react';
import { useRef, useState } from 'react';

const DRAWER_WIDTH = 175;

export default function ControlCentre({
  Canvas,
  variants,
}: ControlCentreProps) {
  const [state, setState] = useState<ControlCentreState>({
    selectedVariantIndex: 0,
    imageSrc: '',
  });
  const elementRef = useRef<HTMLDivElement>(null);

  const selectedVariant = variants[state.selectedVariantIndex];

  async function togglePreview() {
    if (state.imageSrc) {
      return setState((s) => ({ ...s, imageSrc: '' }));
    }

    const element = elementRef.current;
    if (!element) return;

    const url = await html2Image.toPng(element, {
      canvasHeight: selectedVariant.settings.height,
      canvasWidth: selectedVariant.settings.width,
      pixelRatio: 3,
    });
    setState((s) => ({ ...s, imageSrc: url }));
  }

  function onOptionChange(e: React.ChangeEvent<HTMLInputElement>) {
    setState((s) => ({ ...s, selectedVariantIndex: Number(e.target.value) }));
  }

  return (
    <Grid container={true} flex={1}>
      <Drawer
        variant={'permanent'}
        sx={{ width: DRAWER_WIDTH }}
        PaperProps={{
          sx: { p: 4, width: DRAWER_WIDTH, zIndex: (t) => t.zIndex.appBar - 1 },
        }}>
        <Toolbar />
        <Stack rowGap={3} width={'100%'}>
          <Button
            variant={'contained'}
            onClick={togglePreview}
            fullWidth={true}>
            Preview
          </Button>
          <RadioGroup
            defaultValue={state.selectedVariantIndex}
            onChange={onOptionChange}>
            {variants.map(({ label }, i) => (
              <FormControlLabel
                label={label}
                value={i}
                control={<Radio />}
                key={label}
              />
            ))}
          </RadioGroup>
        </Stack>
      </Drawer>
      <Stack justifyContent={'center'} alignItems={'center'} width={'100%'}>
        <Canvas settings={selectedVariant.settings} elementRef={elementRef}>
          {selectedVariant.Component()}
        </Canvas>
      </Stack>
      <Drawer open={!!state.imageSrc} anchor={'right'} variant={'persistent'}>
        <Stack
          justifyContent={'center'}
          alignItems={'center'}
          height={'100%'}
          width={'100%'}>
          <img
            src={state.imageSrc}
            alt={'preview'}
            style={{
              width: selectedVariant.settings.width,
              height: selectedVariant.settings.height,
            }}
          />
        </Stack>
      </Drawer>
    </Grid>
  );
}

interface ControlCentreProps {
  Canvas: React.ComponentType<CanvasProps>;
  variants: Variant[];
}

interface ControlCentreState {
  selectedVariantIndex: number;
  imageSrc: string;
}
