import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.6568 8.00004C14.6568 8.55233 14.2091 9.00004 13.6568 9.00004L6.87867 9.00004V11.5356C6.87867 11.94 6.63503 12.3047 6.26136 12.4595C5.88768 12.6142 5.45757 12.5287 5.17157 12.2427L1.63603 8.70715C1.24551 8.31662 1.24551 7.68346 1.63603 7.29293L5.17157 3.7574C5.45757 3.4714 5.88768 3.38585 6.26136 3.54063C6.63503 3.69541 6.87867 4.06004 6.87867 4.46451V7.00004L13.6568 7.00004C14.2091 7.00004 14.6568 7.44776 14.6568 8.00004Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgArrowLeft;
