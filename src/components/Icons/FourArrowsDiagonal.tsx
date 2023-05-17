import * as React from 'react';
import { SVGProps } from 'react';
const SvgFourArrowsDiagonal = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M13.2426 13.2427L10.6971 13.2427L13.2426 10.6971L13.2426 13.2427ZM13.2426 13.2427L2.7574 2.75741M2.7574 13.2427L5.30299 13.2427L2.7574 10.6971L2.7574 13.2427ZM2.7574 13.2427L13.2427 2.75742M13.2427 2.75742L10.6971 2.75742L13.2427 5.303L13.2427 2.75742ZM2.7574 2.75741L2.7574 5.303L5.30298 2.75741L2.7574 2.75741Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgFourArrowsDiagonal;
