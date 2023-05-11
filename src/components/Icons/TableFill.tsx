import * as React from 'react';
import { SVGProps } from 'react';
const SvgTableFill = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x={0.5} y={0.5} width={15} height={15} rx={0.5} fill="none" stroke="currentColor" />
    <path d="M11.071 5.17157L13.8994 8L11.071 10.8284V8V5.17157Z" fill="currentColor" />
    <path
      d="M6.82837 8L13.8994 8M13.8994 8L11.071 5.17157V10.8284L13.8994 8Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M4.92899 10.8284L2.10056 8L4.92899 5.17157V8V10.8284Z" fill="currentColor" />
    <path
      d="M9.17163 8L2.10056 8M2.10056 8L4.92899 10.8284V5.17157L2.10056 8Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x={4} y={7} width={8} height={2} fill="currentColor" />
  </svg>
);
export default SvgTableFill;
