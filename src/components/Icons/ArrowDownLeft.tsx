import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowDownLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.7071 2.29289C14.0976 2.68342 14.0976 3.31658 13.7071 3.70711L8.91421 8.5L10.7071 10.2929C10.9931 10.5789 11.0787 11.009 10.9239 11.3827C10.7691 11.7564 10.4045 12 10 12H5C4.44771 12 4 11.5523 4 11L4 6C4 5.59554 4.24364 5.2309 4.61732 5.07612C4.99099 4.92134 5.42111 5.0069 5.70711 5.29289L7.5 7.08579L12.2929 2.29289C12.6834 1.90237 13.3166 1.90237 13.7071 2.29289Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgArrowDownLeft;
