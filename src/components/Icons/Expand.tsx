import * as React from 'react';
import { SVGProps } from 'react';
const SvgExpand = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M11 1L15 1L15 5L13 3L11 1Z" fill="currentColor" />
    <path
      d="M10 6L15 1M15 1L11 1L15 5L15 1Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M5 15L1 15L1 11L3 13L5 15Z" fill="currentColor" />
    <path
      d="M6 10L1 15M1 15L5 15L1 11L1 15Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgExpand;
