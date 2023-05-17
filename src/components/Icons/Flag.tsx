import * as React from 'react';
import { SVGProps } from 'react';
const SvgFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M3 10.1557C7 7.23115 10 13.0803 14 10.1557V2.84426C10 5.76885 7 -0.0803363 3 2.84426"
      fill="currentColor"
    />
    <path
      d="M3 10.1557C7 7.23115 10 13.0803 14 10.1557V2.84426C10 5.76885 7 -0.0803364 3 2.84426V10.1557ZM3 10.1557V15"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgFlag;
