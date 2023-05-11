import * as React from 'react';
import { SVGProps } from 'react';
const SvgStrokeWidth = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x={2} y={2} width={12} height={0.741667} fill="currentColor" />
    <rect x={2} y={5.70825} width={12} height={1.48333} fill="currentColor" />
    <rect x={2} y={10.1583} width={12} height={2.96667} fill="currentColor" />
  </svg>
);
export default SvgStrokeWidth;
