import * as React from 'react';
import { SVGProps } from 'react';
const SvgChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.7028 12.7114C10.3098 13.0996 9.67669 13.0957 9.28857 12.7028L5.28857 8.65337C5.10218 8.46468 4.99838 8.20967 5.00002 7.94444C5.00166 7.67922 5.10859 7.42551 5.2973 7.23913L9.2973 3.28852C9.69024 2.90042 10.3234 2.90436 10.7115 3.2973C11.0996 3.69024 11.0956 4.32339 10.7027 4.71148L7.41424 7.95935L10.7114 11.2972C11.0996 11.6902 11.0957 12.3233 10.7028 12.7114Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgChevronLeft;
