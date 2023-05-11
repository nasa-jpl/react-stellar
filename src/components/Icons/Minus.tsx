import * as React from 'react';
import { SVGProps } from 'react';
const SvgMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 8C2 7.44772 2.44772 7 3 7H13C13.5523 7 14 7.44772 14 8C14 8.55228 13.5523 9 13 9H3C2.44772 9 2 8.55228 2 8Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgMinus;
