import * as React from 'react';
import { SVGProps } from 'react';
const SvgPointTarget = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      opacity={0.6}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.25379 9.79956C8.85943 9.92962 8.43793 10 8 10C7.56207 10 7.14057 9.92962 6.7462 9.79956L7.50617 14.5907C7.59535 15.153 8.40465 15.153 8.49383 14.5907L9.25379 9.79956Z"
      fill="currentColor"
    />
    <path
      opacity={0.8}
      d="M12 5C12 7.20913 10.2091 9 8 9C5.79086 9 4 7.20913 4 5C4 2.79086 5.79086 0.999995 8 0.999995C10.2091 0.999995 12 2.79086 12 5Z"
      fill="currentColor"
    />
    <path
      d="M12 5C12 7.20914 9 7.68238 8 7.68238C7 7.68238 4 7.20914 4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPointTarget;
