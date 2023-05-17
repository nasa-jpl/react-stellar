import * as React from 'react';
import { SVGProps } from 'react';
const SvgBranch = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M1 4H4.72C5.82457 4 6.72 4.89543 6.72 6V9C6.72 10.1046 7.61543 11 8.72 11H14"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.3675 10.5827C15.667 10.7803 15.667 11.2197 15.3675 11.4173L11.5254 13.9525C11.1929 14.1718 10.75 13.9334 10.75 13.5352L10.75 8.46485C10.75 8.06657 11.1929 7.82816 11.5254 8.04751L15.3675 10.5827Z"
      fill="currentColor"
    />
    <path opacity={0.5} d="M10 4L15 4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
  </svg>
);
export default SvgBranch;
