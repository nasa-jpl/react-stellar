import * as React from 'react';
import { SVGProps } from 'react';
const SvgPolygon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#polygonIconClip0)">
      <path
        d="M7.42265 2C7.67925 1.55555 8.32075 1.55556 8.57735 2L14.7839 12.75C15.0405 13.1944 14.7197 13.75 14.2065 13.75H1.79348C1.28028 13.75 0.959534 13.1944 1.21613 12.75L7.42265 2Z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </g>
    <defs>
      <clip-path id="polygonIconClip0">
        <path d="M0 0H16V16H0V0Z" fill="currentColor" />
      </clip-path>
    </defs>
  </svg>
);
export default SvgPolygon;
