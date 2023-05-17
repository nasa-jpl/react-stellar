import * as React from 'react';
import { SVGProps } from 'react';
const SvgWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.81742 2.6685L0.936104 12.4869C0.814845 12.6969 0.750684 12.935 0.750005 13.1775C0.749326 13.4199 0.812153 13.6584 0.932234 13.8691C1.05232 14.0797 1.22547 14.2553 1.43446 14.3783C1.64345 14.5012 1.881 14.5673 2.12348 14.57H13.8861C14.1286 14.5673 14.3661 14.5012 14.5751 14.3783C14.7841 14.2553 14.9573 14.0797 15.0773 13.8691C15.1974 13.6584 15.2603 13.4199 15.2596 13.1775C15.2589 12.935 15.1947 12.6969 15.0735 12.4869L9.19216 2.6685C9.06838 2.46443 8.89408 2.29571 8.6861 2.17861C8.47812 2.06152 8.24347 2 8.00479 2C7.76611 2 7.53146 2.06152 7.32348 2.17861C7.11549 2.29571 6.9412 2.46443 6.81742 2.6685ZM8.00042 4.77327C8.55271 4.77323 9.00045 5.22092 9.00049 5.7732V8.6666C9.00053 9.21889 8.55284 9.66663 8.00056 9.66667C7.44827 9.6667 7.00052 9.21902 7.00049 8.66673V5.77333C7.00045 5.22105 7.44814 4.7733 8.00042 4.77327ZM8 10.75C7.30964 10.75 6.75 11.3096 6.75 12C6.75 12.6904 7.30964 13.25 8 13.25H8.0073C8.69765 13.25 9.2573 12.6904 9.2573 12C9.2573 11.3096 8.69765 10.75 8.0073 10.75H8Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgWarning;
