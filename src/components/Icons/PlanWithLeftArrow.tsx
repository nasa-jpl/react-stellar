import * as React from 'react';
import { SVGProps } from 'react';
const SvgPlanWithLeftArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      opacity={0.7}
      d="M6.26756 1C6.61337 0.402199 7.25972 7.44793e-07 8 8.74228e-07C8.74028 1.00366e-06 9.38663 0.4022 9.73244 1L12 1C12.5523 1 13 1.44772 13 2L13 3L3 3L3 2C3 1.44772 3.44772 1 4 1L6.26756 1Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.75 4.625L2.75 14.375L13.25 14.375L13.25 4.625L2.75 4.625ZM2 3C1.44772 3 1 3.41574 1 3.92857L0.999998 15.0714C0.999998 15.5843 1.44771 16 2 16L14 16C14.5523 16 15 15.5843 15 15.0714L15 3.92857C15 3.41574 14.5523 3 14 3L2 3Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.1532 9.6182C10.1532 9.9979 9.84537 10.3057 9.46567 10.3057L6.80568 10.3057L6.80568 12.0489C6.80568 12.3269 6.63818 12.5776 6.38127 12.684C6.12437 12.7905 5.82867 12.7316 5.63204 12.535L3.20136 10.1043C2.93288 9.83585 2.93288 9.40055 3.20136 9.13206L5.63204 6.70138C5.82867 6.50476 6.12437 6.44594 6.38127 6.55235C6.63818 6.65876 6.80568 6.90945 6.80568 7.18752V8.9307L9.46567 8.9307C9.84537 8.9307 10.1532 9.2385 10.1532 9.6182Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPlanWithLeftArrow;
