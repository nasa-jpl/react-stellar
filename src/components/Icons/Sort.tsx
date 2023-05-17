import * as React from 'react';
import { SVGProps } from 'react';
const SvgSort = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M5 10.5C5 9.98571 5 4.28571 5 1.5M5 1.5L2 4.5M5 1.5L8 4.5"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 5.5C11 6.01429 11 11.7143 11 14.5M11 14.5L14 11.5M11 14.5L8 11.5"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgSort;
