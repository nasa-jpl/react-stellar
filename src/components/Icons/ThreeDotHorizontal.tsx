import * as React from 'react';
import { SVGProps } from 'react';
const SvgThreeDotHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={4} cy={8} r={1} fill="currentColor" />
    <circle cx={8} cy={8} r={1} fill="currentColor" />
    <circle cx={12} cy={8} r={1} fill="currentColor" />
  </svg>
);
export default SvgThreeDotHorizontal;
