import * as React from 'react';
import { SVGProps } from 'react';
const SvgTableWithHeader = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.75 9L2.75 6.75L5.125 6.75L5.125 9L2.75 9ZM2.75 10.75L2.75 13.25L5.125 13.25L5.125 10.75L2.75 10.75ZM6.875 13.25L13.25 13.25L13.25 10.75L6.875 10.75L6.875 13.25ZM13.25 9L13.25 6.75L6.875 6.75L6.875 9L13.25 9ZM1 2C1 1.44772 1.44772 1 2 1L14 1C14.5523 1 15 1.44772 15 2L15 14C15 14.5523 14.5523 15 14 15L2 15C1.44771 15 0.999998 14.5523 0.999998 14L1 2Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgTableWithHeader;
