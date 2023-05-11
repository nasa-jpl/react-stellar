import * as React from 'react';
import { SVGProps } from 'react';
const SvgRectangle = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x={1} y={1} width={14} height={14} rx={0.666667} stroke="currentColor" strokeWidth={1.5} />
  </svg>
);
export default SvgRectangle;
