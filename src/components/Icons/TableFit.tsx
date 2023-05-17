import * as React from 'react';
import { SVGProps } from 'react';
const SvgTableFit = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12.1716 10.8284L9.34315 8L12.1716 5.17157L12.1716 10.8284Z"
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x={0.5} y={1.5} width={7} height={13} rx={0.5} fill="none" stroke="currentColor" />
    <rect x={11} y={7} width={5} height={2} rx={1} fill="currentColor" />
    <line x1={2} y1={5} x2={6} y2={5} stroke="currentColor" strokeWidth={2} />
    <line x1={2} y1={9} x2={5} y2={9} stroke="currentColor" strokeWidth={2} />
  </svg>
);
export default SvgTableFit;
