import * as React from 'react';
import { SVGProps } from 'react';
const SvgPlanWithRightArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      opacity={0.7}
      d="M9.73244 1C9.38663 0.402199 8.74028 7.44793e-07 8 8.74228e-07C7.25972 1.00366e-06 6.61337 0.4022 6.26756 1L4 1C3.44772 1 3 1.44772 3 2L3 3L13 3L13 2C13 1.44772 12.5523 1 12 1L9.73244 1Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.25 4.625L13.25 14.375L2.75 14.375L2.75 4.625L13.25 4.625ZM14 3C14.5523 3 15 3.41574 15 3.92857L15 15.0714C15 15.5843 14.5523 16 14 16L2 16C1.44772 16 1 15.5843 1 15.0714L1 3.92857C1 3.41574 1.44772 3 2 3L14 3Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.84683 9.6182C5.84683 9.9979 6.15463 10.3057 6.53433 10.3057L9.19432 10.3057V12.0489C9.19432 12.3269 9.36182 12.5776 9.61873 12.684C9.87563 12.7905 10.1713 12.7316 10.368 12.535L12.7986 10.1043C13.0671 9.83585 13.0671 9.40055 12.7986 9.13206L10.368 6.70138C10.1713 6.50476 9.87563 6.44594 9.61873 6.55235C9.36182 6.65876 9.19432 6.90945 9.19432 7.18752V8.9307L6.53433 8.9307C6.15463 8.9307 5.84683 9.2385 5.84683 9.6182Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPlanWithRightArrow;
