import * as React from 'react';
import { SVGProps } from 'react';
const SvgEllipse = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={8} cy={8} r={7} stroke="currentColor" strokeWidth={1.5} />
  </svg>
);
export default SvgEllipse;
