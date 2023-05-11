import * as React from 'react';
import { SVGProps } from 'react';
const SvgCollapse = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M14 6L10 6L10 2L12 4L14 6Z" fill="currentColor" />
    <path
      d="M15 1L10 6M10 6L14 6L10 2L10 6Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M2 10L6 10L6 14L4 12L2 10Z" fill="currentColor" />
    <path
      d="M1 15L6 10M6 10L2 10L6 14L6 10Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgCollapse;
