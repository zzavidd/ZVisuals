import { UNIT } from 'src/utils/constants';

import WhomHaveI from '../WhomHaveI';

const variants: Variant[] = [
  {
    label: 'Default',
    Component: WhomHaveI,
    settings: {
      height: UNIT * 9,
      width: UNIT * 9,
      padding: 5,
    },
  },
];

export default variants;
