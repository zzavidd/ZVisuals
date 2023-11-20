import { UNIT } from 'src/utils/constants';

import ChurchAdvert from '../ChurchAdvert';
import EventBrite from '../EventBrite';
import Portrait from '../Portrait';
import Portrait2 from '../Portrait2';
import Portrait3 from '../Portrait3';

const VARIANTS: Variant[] = [
  {
    label: 'ChurchAdvert',
    Component: ChurchAdvert,
    settings: {
      height: UNIT * 9,
      width: UNIT * 16,
      objectPosition: '0 -200px',
      padding: 6,
    },
  },
  {
    label: 'EventBrite',
    Component: EventBrite,
    settings: {
      height: UNIT * 9,
      width: UNIT * 18,
      objectPosition: '0 -200px',
      padding: 6,
    },
  },
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
];

export default VARIANTS;
