import * as React from 'react';
import { SVGProps } from 'react';
const SvgTimeline = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x={4} y={4} width={4} height={2} rx={1} fill="currentColor" />
    <rect x={6} y={7} width={4} height={2} rx={1} fill="currentColor" />
    <rect x={8} y={10} width={4} height={2} rx={1} fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.75 2.75V13.25H13.25V2.75H2.75ZM2 1C1.44772 1 1 1.44772 1 2V14C1 14.5523 1.44772 15 2 15H14C14.5523 15 15 14.5523 15 14V2C15 1.44772 14.5523 1 14 1H2Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgTimeline;
