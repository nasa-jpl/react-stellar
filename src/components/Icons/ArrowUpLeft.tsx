import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowUpLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.7071 12.7071C12.3166 13.0976 11.6834 13.0976 11.2929 12.7071L6.5 7.91421L4.70711 9.70711C4.42111 9.9931 3.99099 10.0787 3.61732 9.92388C3.24364 9.7691 3 9.40446 3 9L3 4C3 3.44771 3.44772 3 4 3L9 3C9.40446 3 9.7691 3.24364 9.92388 3.61732C10.0787 3.99099 9.9931 4.42111 9.70711 4.70711L7.91421 6.5L12.7071 11.2929C13.0976 11.6834 13.0976 12.3166 12.7071 12.7071Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgArrowUpLeft;
