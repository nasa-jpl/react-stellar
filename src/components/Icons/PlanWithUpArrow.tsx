import * as React from 'react';
import { SVGProps } from 'react';
const SvgPlanWithUpArrow = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.6389 9.63858L10.3055 9.63858C10.5714 9.63858 10.8111 9.47843 10.9128 9.23281C11.0146 8.98719 10.9583 8.70447 10.7703 8.51648L8.44638 6.19253C8.18968 5.93583 7.77349 5.93583 7.5168 6.19253L5.19285 8.51648C5.00486 8.70447 4.94862 8.98719 5.05036 9.23281C5.1521 9.47843 5.39178 9.63858 5.65764 9.63858L7.32428 9.63858L8.6389 9.63858Z"
      fill="currentColor"
    />
    <path
      d="M7.9632 9.13858L7.9632 11.6386"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgPlanWithUpArrow;
