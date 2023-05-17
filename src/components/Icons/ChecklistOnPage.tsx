import * as React from 'react';
import { SVGProps } from 'react';
const SvgChecklistOnPage = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M0.999878 4.00006L14.9999 4.00006L15.9999 4.00006L15.9999 2.00006C15.9999 0.895492 15.1044 6.10352e-05 13.9999 6.10352e-05L1.99988 6.19888e-05C0.895308 6.19888e-05 -0.00012207 0.895493 -0.00012207 2.00006L-0.00012207 4.00006L0.999878 4.00006Z"
      fill="currentColor"
    />
    <path
      d="M0.999879 14.0001L0.999878 4.00006L-0.00012207 4.00006L-0.000120163 14.0001C-0.000120163 15.1046 0.895309 16.0001 1.99988 16.0001L13.9999 16.0001C15.1044 16.0001 15.9999 15.1046 15.9999 14.0001L15.9999 4.00006L14.9999 4.00006L14.9999 14.0001C14.9999 14.5523 14.5522 15.0001 13.9999 15.0001L1.99988 15.0001C1.44759 15.0001 0.999879 14.5523 0.999879 14.0001Z"
      fill="currentColor"
    />
    <line x1={8.5} y1={7.5} x2={12.5} y2={7.5} stroke="currentColor" strokeLinecap="round" />
    <path d="M3 7L4.5 8.5L7 6" stroke="currentColor" />
    <circle cx={4.5} cy={12.5} r={1.5} fill="currentColor" />
    <line x1={8.5} y1={12.5} x2={12.5} y2={12.5} stroke="currentColor" strokeLinecap="round" />
  </svg>
);
export default SvgChecklistOnPage;
