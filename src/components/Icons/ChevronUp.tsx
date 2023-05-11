import * as React from 'react';
import { SVGProps } from 'react';
const SvgChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.28857 10.7028C2.90045 10.3098 2.90433 9.67669 3.29724 9.28857L7.34663 5.28857C7.53532 5.10218 7.79033 4.99838 8.05556 5.00002C8.32078 5.00166 8.57449 5.10859 8.76087 5.2973L12.7115 9.2973C13.0996 9.69024 13.0956 10.3234 12.7027 10.7115C12.3098 11.0996 11.6766 11.0956 11.2885 10.7027L8.04065 7.41424L4.70276 10.7114C4.30984 11.0996 3.67669 11.0957 3.28857 10.7028Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgChevronUp;
