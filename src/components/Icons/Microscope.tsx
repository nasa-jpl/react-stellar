import * as React from 'react';
import { SVGProps } from 'react';
const SvgMicroscope = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x={2} y={13} width={12} height={3} rx={1} fill="currentColor" />
    <rect x={5.32935} width={4} height={9} rx={0.5} transform="rotate(15 5.32935 0)" fill="currentColor" />
    <path
      d="M10.1411 3.56075C11.4953 4.16295 12.6031 5.20986 13.2807 6.52793C13.9584 7.846 14.1653 9.35608 13.8671 10.8078C13.5689 12.2596 12.7835 13.5659 11.6411 14.5101C10.4988 15.4543 9.06803 15.9798 7.58609 15.9994L7.54636 13.0001C8.34441 12.9895 9.11489 12.7065 9.73007 12.198C10.3452 11.6895 10.7682 10.9861 10.9288 10.2043C11.0894 9.4225 10.978 8.6093 10.613 7.89949C10.2481 7.18969 9.65154 6.62591 8.92227 6.30162L10.1411 3.56075Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgMicroscope;
