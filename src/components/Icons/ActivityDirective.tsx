import * as React from 'react';
import { SVGProps } from 'react';
const SvgActivityDirective = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g opacity={0.64}>
      <path d="M12 8L6 11.4641L6 4.5359L12 8Z" fill="currentColor" opacity={0.9} />
      <line x1={3} y1={4} x2={3} y2={12} stroke="currentColor" strokeWidth={2} />
    </g>
  </svg>
);
export default SvgActivityDirective;
