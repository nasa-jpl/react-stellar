import * as React from 'react';
import { SVGProps } from 'react';
const SvgActivityAnchor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <path
      d="M9 8.5H15C15.2761 8.5 15.5 8.72386 15.5 9V11C15.5 11.2761 15.2761 11.5 15 11.5H9C8.72386 11.5 8.5 11.2761 8.5 11V9C8.5 8.72386 8.72386 8.5 9 8.5Z"
      fill="white"
      stroke="#293137"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.99999 10.75H8V9.25H5.99999C5.30963 9.25 4.74999 8.69036 4.74999 8V5.25H3.24999V8C3.24999 9.51878 4.48121 10.75 5.99999 10.75Z"
      fill="#545F64"
    />
    <path d="M3.99999 0L7.46409 5.25H0.535889L3.99999 0Z" fill="#545F64" />
  </svg>
);
export default SvgActivityAnchor;
