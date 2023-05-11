import * as React from 'react';
import { SVGProps } from 'react';
const SvgTargetSingle = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.0878 9.63444L7.75802 15.2018C7.82928 15.4394 8.16566 15.4394 8.23693 15.2018L9.91551 9.60654C9.31698 9.85989 8.65886 10 7.96802 10C7.30296 10 6.66824 9.87016 6.0878 9.63444ZM5.6824 8.2831L5.09402 6.32184C5.0459 6.16143 5.16601 6 5.33348 6H10.6615C10.8289 6 10.949 6.16143 10.9009 6.32184L10.3286 8.22951C9.66697 8.71397 8.8509 9 7.96802 9C7.11821 9 6.33029 8.73499 5.6824 8.2831Z"
      fill="currentColor"
    />
    <circle cx={8} cy={5} r={4} fill="currentColor" />
  </svg>
);
export default SvgTargetSingle;
