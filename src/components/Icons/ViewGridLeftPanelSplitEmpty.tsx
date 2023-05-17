import * as React from 'react';
import { SVGProps } from 'react';
const SvgViewGridLeftPanelSplitEmpty = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g opacity={0.5} clipPath="url(#clip0_309_61077)">
      <rect width={20} height={20} transform="matrix(1 0 0 -1 0 20)" />
      <rect x={0.5} y={-0.5} width={19} height={19} rx={0.75} transform="matrix(1 0 0 -1 0 19)" stroke="currentColor" />
      <rect x={0.5} y={-0.5} width={7} height={8} rx={0.75} transform="matrix(1 0 0 -1 0 8)" stroke="currentColor" />
      <rect x={0.5} y={-0.5} width={7} height={8} rx={0.75} transform="matrix(1 0 0 -1 0 19)" stroke="currentColor" />
    </g>
    <defs>
      <clipPath id="clip0_309_61077">
        <rect width={20} height={20} fill="white" transform="matrix(1 0 0 -1 0 20)" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgViewGridLeftPanelSplitEmpty;
