import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 3L13 3L13 8L10.5 5.5L8 3Z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.29265 11.7071C3.90212 11.3166 3.90212 10.6834 4.29265 10.2929L9.08554 5.5L7.29265 3.70711C7.00665 3.42111 6.9211 2.99099 7.07588 2.61732C7.23066 2.24364 7.59529 2 7.99976 2L12.9998 2C13.552 2 13.9998 2.44771 13.9998 3V8C13.9998 8.40446 13.7561 8.7691 13.3824 8.92388C13.0088 9.07866 12.5786 8.9931 12.2926 8.70711L10.4998 6.91421L5.70686 11.7071C5.31634 12.0976 4.68317 12.0976 4.29265 11.7071Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgArrowUpRight;
