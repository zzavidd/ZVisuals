import type React from 'react';

import Z27WN from 'src/projects/01-z27wn/Canvas';
import Z27WNVariants from 'src/projects/01-z27wn/config/variants';
import WhomHaveI from 'src/projects/02-whomhavei/Canvas';
import WhomHaveIVariants from 'src/projects/02-whomhavei/config/variants';

export const PROJECTS: ProjectMap = {
  '01-z27wn': {
    name: '#Z27 Worship Night',
    Canvas: Z27WN,
    variants: Z27WNVariants,
  },
  '02-whomhavei': {
    name: 'Whom Have I (Cover Art)',
    Canvas: WhomHaveI,
    variants: WhomHaveIVariants,
  },
};

interface Project {
  name: string;
  Canvas: React.ComponentType<CanvasProps>;
  variants: Variant[];
}

type ProjectMap = Record<string, Project>;
