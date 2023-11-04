import { UNIT } from 'src/utils/constants';

import Landscape from '../Landscape';
import Portrait from '../Portrait';
import Portrait2 from '../Portrait2';
import Portrait3 from '../Portrait3';

export const VARIANTS: Variant[] = [
  {
    label: 'Portrait',
    Component: Portrait,
    settings: {
      height: UNIT * 10,
      width: UNIT * 9,
      objectPosition: '0',
      padding: 5,
    },
  },
  {
    label: 'Portrait 2',
    Component: Portrait2,
    settings: {
      height: UNIT * 10,
      width: UNIT * 9,
      objectPosition: '0',
      padding: 5,
    },
  },
  {
    label: 'Portrait 3',
    Component: Portrait3,
    settings: {
      height: UNIT * 10,
      width: UNIT * 9,
      objectPosition: '0',
      padding: 5,
    },
  },
  {
    label: 'Landscape',
    Component: Landscape,
    settings: {
      height: UNIT * 9,
      width: UNIT * 16,
      objectPosition: '0 -200px',
      padding: 6,
    },
  },
];
