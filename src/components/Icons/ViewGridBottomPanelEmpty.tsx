import * as React from 'react';
import { SVGProps } from 'react';
const SvgViewGridBottomPanelEmpty = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g opacity={0.5} clipPath="url(#clip0_309_61081)">
      <rect width={20} height={20} />
      <rect x={0.5} y={0.5} width={19} height={19} rx={0.75} stroke="currentColor" />
      <rect x={19.5} y={12.5} width={7} height={19} rx={0.75} transform="rotate(90 19.5 12.5)" stroke="currentColor" />
    </g>
    <defs>
      <clipPath id="clip0_309_61081">
        <rect width={20} height={20} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgViewGridBottomPanelEmpty;
