import * as React from 'react';
import { SVGProps } from 'react';
const SvgCrosshairsFine = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M8.5 9V16H7.5V9H8.5Z" fill="currentColor" />
    <path fillRule="evenodd" clipRule="evenodd" d="M8.5 0V7H7.5V0H8.5Z" fill="currentColor" />
    <path fillRule="evenodd" clipRule="evenodd" d="M9 7.5L16 7.5L16 8.5L9 8.5L9 7.5Z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M-3.74669e-08 7.5L7 7.5L7 8.5L0 8.5L-3.74669e-08 7.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCrosshairsFine;
