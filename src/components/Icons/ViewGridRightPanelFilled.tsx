import * as React from 'react';
import { SVGProps } from 'react';
const SvgViewGridRightPanelFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0_309_61088)">
      <rect width={20} height={20} />
      <rect x={0.5} y={0.5} width={19} height={19} rx={0.75} stroke="currentColor" />
      <rect x={12.5} y={0.5} width={7} height={19} rx={0.75} fill="currentColor" stroke="currentColor" />
    </g>
    <defs>
      <clipPath id="clip0_309_61088">
        <rect width={20} height={20} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgViewGridRightPanelFilled;
