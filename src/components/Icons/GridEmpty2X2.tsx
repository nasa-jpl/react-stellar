import * as React from 'react';
import { SVGProps } from 'react';
const SvgGridEmpty2X2 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.25342 8.875V14H9.00342V8.875H14.1284V7.125H9.00342V2H7.25342V7.125H2V8.875H7.25342Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.87842 2.75V13.25H13.3784V2.75H2.87842ZM2.12842 1C1.57613 1 1.12842 1.44772 1.12842 2V14C1.12842 14.5523 1.57613 15 2.12842 15H14.1284C14.6807 15 15.1284 14.5523 15.1284 14V2C15.1284 1.44772 14.6807 1 14.1284 1H2.12842Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgGridEmpty2X2;
