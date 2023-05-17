import * as React from 'react';
import { SVGProps } from 'react';
const SvgPopout = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M3 13L12 4M12 4L5.57143 4M12 4L12 10.4286"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgPopout;
