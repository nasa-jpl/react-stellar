import * as React from 'react';
import { SVGProps } from 'react';
const SvgLock = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 6.05075L4 5.22581C4 2.96154 5.72375 1 8 1C10.2762 1 12 2.96154 12 5.22581V6.05075C12.6501 6.11469 13.0876 6.2592 13.4142 6.58579C14 7.17157 14 8.11438 14 10V11C14 12.8856 14 13.8284 13.4142 14.4142C12.8284 15 11.8856 15 10 15L6 15C4.11438 15 3.17157 15 2.58579 14.4142C2 13.8284 2 12.8856 2 11L2 10C2 8.11438 2 7.17157 2.58579 6.58579C2.91238 6.2592 3.34994 6.11469 4 6.05075ZM6 5.22581C6 3.92694 6.96254 3 8 3C9.03746 3 10 3.92694 10 5.22581L10 6H6L6 5.22581Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgLock;
