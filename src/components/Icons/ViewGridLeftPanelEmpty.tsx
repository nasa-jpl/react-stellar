import * as React from 'react';
import { SVGProps } from 'react';
const SvgViewGridLeftPanelEmpty = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g opacity={0.5} clipPath="url(#clip0_309_61074)">
      <rect width={20} height={20} transform="matrix(-1 0 0 1 20 0)" />
      <rect x={-0.5} y={0.5} width={19} height={19} rx={0.75} transform="matrix(-1 0 0 1 19 0)" stroke="currentColor" />
      <rect x={-0.5} y={0.5} width={7} height={19} rx={0.75} transform="matrix(-1 0 0 1 7 0)" stroke="currentColor" />
    </g>
    <defs>
      <clipPath id="clip0_309_61074">
        <rect width={20} height={20} fill="white" transform="matrix(-1 0 0 1 20 0)" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgViewGridLeftPanelEmpty;
