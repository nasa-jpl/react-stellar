import * as React from 'react';
import { SVGProps } from 'react';
const SvgProximityTarget = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      opacity={0.8}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2H4V7C4 7.55228 5.79086 8 8 8C10.2091 8 12 7.55228 12 7V2Z"
      fill="currentColor"
    />
    <ellipse cx={8} cy={2} rx={4} ry={1} fill="currentColor" />
    <path
      opacity={0.6}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.60954 8.93793C7.04261 8.97807 7.51106 9 8 9C8.48894 9 8.95738 8.97807 9.39046 8.93793L8.49383 14.5907C8.40465 15.153 7.59535 15.153 7.50617 14.5907L6.60954 8.93793Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgProximityTarget;
