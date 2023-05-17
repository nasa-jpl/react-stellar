import * as React from 'react';
import { SVGProps } from 'react';
const SvgDrillDark = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      opacity={0.5}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 10L7 14.5C7 14.7761 7.44772 15 8 15C8.55228 15 9 14.7761 9 14.5L11 10H5Z"
      fill="#BEC0C2"
    />
    <rect x={5} y={3} width={6} height={6.8} fill="#BEC0C2" />
    <ellipse cx={8} cy={9.8} rx={3} ry={1.7} fill="#BEC0C2" />
    <g opacity={0.5}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 5H15V14.5C15 14.7761 14.5523 15 14 15C13.4477 15 13 14.7761 13 14.5V5Z"
        fill="#EBECEC"
      />
    </g>
    <g opacity={0.5}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 5H3V14.5C3 14.7761 2.55228 15 2 15C1.44772 15 1 14.7761 1 14.5V5Z"
        fill="#EBECEC"
      />
    </g>
    <ellipse cx={8} cy={5} rx={7} ry={2} fill="#EBECEC" />
    <rect x={1} y={3} width={14} height={2} fill="#EBECEC" />
    <ellipse cx={8} cy={3} rx={7} ry={2} fill="#F8F8F8" />
  </svg>
);
export default SvgDrillDark;
