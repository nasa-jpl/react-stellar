import * as React from 'react';
import { SVGProps } from 'react';
const SvgBarChart = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M14 7H10C9.44771 7 9 7.44772 9 8L9 12H7V3C7 2.44772 6.55228 2 6 2H2C1.44772 2 1 2.44771 1 3V13L15 13V8C15 7.44772 14.5523 7 14 7Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgBarChart;
