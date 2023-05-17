import * as React from 'react';
import { SVGProps } from 'react';
const SvgTreeParentCollapsed = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M14 9L8 12.4641L8 5.5359L14 9Z" fill="currentColor" />
    <path
      opacity={0.4}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.5 7V2H3.5V7C3.5 7.55228 3.94772 8 4.5 8H6V10H4.5C2.84315 10 1.5 8.65685 1.5 7Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgTreeParentCollapsed;
