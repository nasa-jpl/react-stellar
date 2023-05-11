import * as React from 'react';
import { SVGProps } from 'react';
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 2C8.55228 2 9 2.44772 9 3V13C9 13.5523 8.55228 14 8 14C7.44772 14 7 13.5523 7 13V3C7 2.44772 7.44772 2 8 2Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 8C2 7.44772 2.44772 7 3 7H13C13.5523 7 14 7.44772 14 8C14 8.55228 13.5523 9 13 9H3C2.44772 9 2 8.55228 2 8Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPlus;
