import Landscape from '../Landscape';
import Portrait from '../Portrait';

const LONGER = 1920 / 2;
const SHORTER = 1080 / 2;

export const VARIANTS: Variant[] = [
  {
    label: 'Portrait',
    height: LONGER,
    width: SHORTER,
    Component: Portrait,
  },
  {
    label: 'Landscape',
    height: SHORTER,
    width: LONGER,
    Component: Landscape,
  },
];
