import * as React from 'react';
import { SVGProps } from 'react';
const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.29289 13.7071C4.90237 13.3166 4.90237 12.6834 5.29289 12.2929L9.58579 8L5.29289 3.70711C4.90237 3.31658 4.90237 2.68342 5.29289 2.29289C5.68342 1.90237 6.31658 1.90237 6.70711 2.29289L11.7071 7.29289C12.0976 7.68342 12.0976 8.31658 11.7071 8.70711L6.70711 13.7071C6.31658 14.0976 5.68342 14.0976 5.29289 13.7071Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgChevronRight;
