import * as React from 'react';
import { SVGProps } from 'react';
const SvgSwitch = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M5.5 5C6.01429 5 11.7143 5 14.5 5M14.5 5L11.5 2M14.5 5L11.5 8"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 11C9.98571 11 4.28571 11 1.5 11M1.5 11L4.5 14M1.5 11L4.5 8"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgSwitch;
