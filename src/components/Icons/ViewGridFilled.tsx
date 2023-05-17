import * as React from 'react';
import { SVGProps } from 'react';
const SvgViewGridFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0_50_40522)">
      <rect
        x={-0.625}
        y={0.625}
        width={7.5}
        height={18.75}
        rx={0.625}
        transform="matrix(-1 0 0 1 18.75 0)"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={1.25}
      />
      <rect
        x={-0.625}
        y={0.625}
        width={7.5}
        height={7.5}
        rx={0.625}
        transform="matrix(-1 0 0 1 7.5 0)"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={1.25}
      />
      <rect
        x={-0.625}
        y={0.625}
        width={7.5}
        height={7.5}
        rx={0.625}
        transform="matrix(-1 0 0 1 7.5 11.25)"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={1.25}
      />
    </g>
    <defs>
      <clipPath id="clip0_50_40522">
        <rect width={20} height={20} fill="currentColor" transform="matrix(-1 0 0 1 20 0)" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgViewGridFilled;
