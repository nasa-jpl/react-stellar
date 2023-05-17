import * as React from 'react';
import { SVGProps } from 'react';
const SvgRotateClockwise = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0_5585:6804)">
      <path
        d="M14.3968 6.5L11.6567 3.75988C10.7361 2.84083 9.5417 2.24586 8.25354 2.06463C6.96539 1.88339 5.65323 2.12571 4.51477 2.75506C3.37631 3.38441 2.47322 4.36671 1.94158 5.55395C1.40994 6.74119 1.27854 8.06905 1.56718 9.33746C1.85583 10.6059 2.54888 11.7461 3.54191 12.5864C4.53494 13.4267 5.77416 13.9215 7.07285 13.9962C8.37154 14.0709 9.65934 13.7216 10.7422 13.0008C11.8251 12.28 12.4165 11.5 12.9165 10.5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.88245 7.10502C9.99854 7.38527 10.272 7.568 10.5754 7.568L14.818 7.568C15.0169 7.568 15.2077 7.48899 15.3483 7.34833C15.489 7.20768 15.568 7.01692 15.568 6.818V2.57536C15.568 2.27202 15.3853 1.99854 15.105 1.88245C14.8248 1.76637 14.5022 1.83053 14.2877 2.04503L10.045 6.28767C9.83053 6.50217 9.76637 6.82476 9.88245 7.10502Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clip-path id="clip0_5585:6804">
        <rect width={16} height={16} fill="white" />
      </clip-path>
    </defs>
  </svg>
);
export default SvgRotateClockwise;
