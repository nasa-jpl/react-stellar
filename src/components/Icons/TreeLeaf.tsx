import * as React from 'react';
import { SVGProps } from 'react';
const SvgTreeLeaf = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      opacity={0.4}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.5 7V2H3.5V7C3.5 7.55228 3.94772 8 4.5 8H6V10H4.5C2.84315 10 1.5 8.65685 1.5 7Z"
      fill="currentColor"
    />
    <rect x={8} y={4} width={3} height={8} fill="currentColor" />
  </svg>
);
export default SvgTreeLeaf;
