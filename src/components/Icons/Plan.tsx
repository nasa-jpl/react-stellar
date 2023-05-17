import * as React from 'react';
import { SVGProps } from 'react';
const SvgPlan = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x={4} y={7} width={4} height={2} rx={1} fill="currentColor" />
    <rect x={6} y={10} width={6} height={2} rx={1} fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.75 4.625V14.375H13.25V4.625H2.75ZM2 3C1.44772 3 1 3.41574 1 3.92857V15.0714C1 15.5843 1.44772 16 2 16H14C14.5523 16 15 15.5843 15 15.0714V3.92857C15 3.41574 14.5523 3 14 3H2Z"
      fill="currentColor"
    />
    <path
      opacity={0.7}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.26756 1C6.61337 0.402199 7.25972 0 8 0C8.74028 0 9.38663 0.402199 9.73244 1H12C12.5523 1 13 1.44772 13 2V3C13 3.55228 12.5523 4 12 4H4C3.44772 4 3 3.55228 3 3V2C3 1.44772 3.44772 1 4 1H6.26756Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPlan;
