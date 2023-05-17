import * as React from 'react';
import { SVGProps } from 'react';
const SvgDiagonalCollapseWithCenterLine = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M15 5L11 5L11 1L13 3L15 5Z" fill="currentColor" />
    <path
      d="M15 1L11 5M11 5L15 5L11 1L11 5Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M1 11L5 11L5 15L3 13L1 11Z" fill="currentColor" />
    <path
      d="M1 15L5 11M5 11L1 11L5 15L5 11Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line x1={13.2929} y1={13.7071} x2={1.97918} y2={2.3934} stroke="currentColor" strokeWidth={2} />
  </svg>
);
export default SvgDiagonalCollapseWithCenterLine;
