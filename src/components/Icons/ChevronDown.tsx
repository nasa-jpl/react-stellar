import * as React from 'react';
import { SVGProps } from 'react';
const SvgChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.7114 5.29724C13.0996 5.69016 13.0957 6.32331 12.7028 6.71143L8.65337 10.7114C8.46468 10.8978 8.20967 11.0016 7.94444 11C7.67922 10.9983 7.42551 10.8914 7.23913 10.7027L3.28851 6.7027C2.90042 6.30976 2.90436 5.67661 3.2973 5.28851C3.69024 4.90042 4.32339 4.90436 4.71148 5.2973L7.95935 8.58576L11.2972 5.28857C11.6902 4.90045 12.3233 4.90433 12.7114 5.29724Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgChevronDown;
