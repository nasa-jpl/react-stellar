import * as React from 'react';
import { SVGProps } from 'react';
const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 4C1 3.44772 1.44772 3 2 3L14 3C14.5523 3 15 3.44772 15 4C15 4.55228 14.5523 5 14 5L2 5C1.44772 5 1 4.55228 1 4Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.25 8C3.25 7.58579 3.58579 7.25 4 7.25L12 7.25C12.4142 7.25 12.75 7.58579 12.75 8C12.75 8.41421 12.4142 8.75 12 8.75L4 8.75C3.58579 8.75 3.25 8.41421 3.25 8Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.5 12C5.5 11.7239 5.72386 11.5 6 11.5L10 11.5C10.2761 11.5 10.5 11.7239 10.5 12C10.5 12.2761 10.2761 12.5 10 12.5L6.00075 12.5C5.72461 12.5 5.5 12.2761 5.5 12Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgFilter;
