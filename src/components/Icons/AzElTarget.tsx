import * as React from 'react';
import { SVGProps } from 'react';
const SvgAzElTarget = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <ellipse opacity={0.8} cx={8} cy={5.99999} rx={4} ry={1.6} fill="currentColor" />
    <path
      d="M8 2C5.79086 2 4 3.79086 4 6L4.13754 6.05501C6.61701 7.0468 9.38299 7.0468 11.8625 6.05501L12 6C12 3.79086 10.2091 2 8 2Z"
      fill="currentColor"
    />
    <path
      opacity={0.6}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.53846 8.48982L7.50617 14.5907C7.59535 15.153 8.40465 15.153 8.49383 14.5907L9.46154 8.48982C9.00881 8.56094 8.51581 8.59999 8 8.59999C7.48419 8.59999 6.99119 8.56094 6.53846 8.48982Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgAzElTarget;
