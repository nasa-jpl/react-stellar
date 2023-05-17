import * as React from 'react';
import { SVGProps } from 'react';
const SvgMerge = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M1 12H4.72C5.82457 12 6.72 11.1046 6.72 10V7C6.72 5.89543 7.61543 5 8.72 5H14"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.3675 5.41734C15.667 5.21972 15.667 4.78028 15.3675 4.58266L11.5254 2.04751C11.1929 1.82817 10.75 2.06658 10.75 2.46485L10.75 7.53515C10.75 7.93343 11.1929 8.17184 11.5254 7.95249L15.3675 5.41734Z"
      fill="currentColor"
    />
    <path d="M1 5H11" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
  </svg>
);
export default SvgMerge;
