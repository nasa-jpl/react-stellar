import * as React from 'react';
import { SVGProps } from 'react';
const SvgPlay = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x={0.5} y={1.5} width={15} height={13} rx={1.5} stroke="currentColor" />
    <path
      d="M11.25 7.56699C11.5833 7.75944 11.5833 8.24056 11.25 8.43301L6.75 11.0311C6.41667 11.2235 6 10.983 6 10.5981L6 5.40192C6 5.01702 6.41667 4.77646 6.75 4.96891L11.25 7.56699Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPlay;
