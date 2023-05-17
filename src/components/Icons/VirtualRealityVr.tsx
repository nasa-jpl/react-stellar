import * as React from 'react';
import { SVGProps } from 'react';
const SvgVirtualRealityVr = (props: SVGProps<SVGSVGElement>) => (
  <svg width={18} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 4L13 4C14.6569 4 16 5.34315 16 7V10C16 11.6569 14.6569 13 13 13H11.4491C11.1634 13 10.8914 12.8779 10.7017 12.6644L10.1111 12L13 12C14.1046 12 15 11.1046 15 10V7C15 5.89543 14.1046 5 13 5L5 5C3.89543 5 3 5.89543 3 7L3 10C3 11.1046 3.89543 12 5 12H7.88889L7.29834 12.6644C7.10858 12.8779 6.83657 13 6.55093 13H5C3.34315 13 2 11.6569 2 10L2 7C2 5.34315 3.34315 4 5 4Z"
      fill="currentColor"
    />
    <rect opacity={0.3} x={3} y={5} width={12} height={7} rx={2} fill="currentColor" />
    <path
      d="M2 10V10C1.44772 10 1 9.55228 1 9L1 8C1 7.44772 1.44772 7 2 7V7"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 10V10C16.5523 10 17 9.55228 17 9L17 8C17 7.44772 16.5523 7 16 7V7"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgVirtualRealityVr;
