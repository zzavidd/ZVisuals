import type React from 'react';

import Z27WN from 'src/projects/01-z27wn/Canvas';
import { VARIANTS } from 'src/projects/01-z27wn/config/variants';

export const PROJECTS: ProjectMap = {
  '01-z27wn': {
    name: '#Z27 Worship Night',
    Canvas: Z27WN,
    variants: VARIANTS,
  },
  '02-whomhavei': {
    name: 'Whom Have I (Cover Art)',
    Canvas: Z27WN,
    variants: VARIANTS,
  },
};

interface Project {
  name: string;
  Canvas: React.ComponentType<CanvasProps>;
  variants: Variant[];
}

type ProjectMap = Record<string, Project>;
