'use client';

import { Button, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import * as html2Image from 'html-to-image';
import Image from 'next/image';
import type React from 'react';
import { useRef, useState } from 'react';

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
      canvasHeight: selectedVariant.height,
      canvasWidth: selectedVariant.width,
      pixelRatio: 3,
    });
    setState((s) => ({ ...s, imageSrc: url }));
  }

  function onOptionChange(e: React.ChangeEvent<HTMLInputElement>) {
    setState((s) => ({ ...s, selectedVariantIndex: Number(e.target.value) }));
  }

  return (
    <Grid container={true}>
      <Grid xs={2} p={5}>
        <Button variant={'contained'} onClick={togglePreview}>
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
      </Grid>
      <Grid
        xs={state.imageSrc ? 5 : true}
        justifyContent={'center'}
        alignItems={'center'}>
        <Canvas dimensions={selectedVariant} elementRef={elementRef}>
          {selectedVariant.Component()}
        </Canvas>
      </Grid>
      <Grid xs={5} display={state.imageSrc ? 'initial' : 'none'}>
        <Image
          src={state.imageSrc}
          alt={'preview'}
          width={selectedVariant.width}
          height={selectedVariant.height}
        />
      </Grid>
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
