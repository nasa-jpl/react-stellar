import * as React from 'react';
import { SVGProps } from 'react';
const SvgChecklist = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x={15.5} y={14.5} width={15} height={13} rx={1.5} transform="rotate(180 15.5 14.5)" stroke="currentColor" />
    <circle cx={4.5} cy={10.5} r={1.5} fill="currentColor" />
    <line x1={8.5} y1={5.5} x2={12.5} y2={5.5} stroke="currentColor" strokeLinecap="round" />
    <line x1={8.5} y1={10.5} x2={12.5} y2={10.5} stroke="currentColor" strokeLinecap="round" />
    <path d="M3 5L4.5 6.5L7 4" stroke="currentColor" />
  </svg>
);
export default SvgChecklist;
