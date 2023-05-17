import * as React from 'react';
import { SVGProps } from 'react';
const SvgContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={8} cy={8} r={6.25} stroke="currentColor" strokeWidth={1.5} />
    <path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1V15Z" fill="currentColor" />
  </svg>
);
export default SvgContrast;
