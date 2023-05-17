import * as React from 'react';
import { SVGProps } from 'react';
const SvgPlanWithDownArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.75 4.625L2.75 14.375L13.25 14.375L13.25 4.625L2.75 4.625ZM2 3C1.44772 3 1 3.41574 1 3.92857L0.999998 15.0714C0.999998 15.5843 1.44771 16 2 16L14 16C14.5523 16 15 15.5843 15 15.0714L15 3.92857C15 3.41574 14.5523 3 14 3L2 3Z"
      fill="currentColor"
    />
    <path
      opacity={0.7}
      d="M6.26756 1C6.61337 0.402199 7.25972 7.44793e-07 8 8.74228e-07C8.74028 1.00366e-06 9.38663 0.4022 9.73244 1L12 1C12.5523 1 13 1.44772 13 2L13 3L3 3L3 2C3 1.44772 3.44772 1 4 1L6.26756 1Z"
      fill="currentColor"
    />
    <path
      d="M7.3243 9H5.65766C5.3918 9 5.15212 9.16015 5.05038 9.40577C4.94864 9.65139 5.00488 9.93411 5.19287 10.1221L7.51682 12.4461C7.77351 12.7027 8.1897 12.7027 8.4464 12.4461L10.7703 10.1221C10.9583 9.93411 11.0146 9.65139 10.9128 9.40577C10.8111 9.16015 10.5714 9 10.3056 9H8.63892H7.3243Z"
      fill="currentColor"
    />
    <path d="M8 9.5V7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export default SvgPlanWithDownArrow;
