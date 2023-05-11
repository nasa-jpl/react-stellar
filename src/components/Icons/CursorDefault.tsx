import * as React from 'react';
import { SVGProps } from 'react';
const SvgCursorDefault = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.84066 9.51607L14.4865 7.86494L2 1L5.64025 14.7764L8.36628 10.668L11.63 14.8454L13.1044 13.6935L9.84066 9.51607V9.51607Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCursorDefault;
