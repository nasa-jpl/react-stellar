import * as React from 'react';
import { SVGProps } from 'react';
const SvgPolyline = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M1 14.5L5.5 8L11.5 6.5L14.5 1" stroke="currentColor" strokeWidth={1.5} />
  </svg>
);
export default SvgPolyline;
