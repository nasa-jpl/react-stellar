import * as React from 'react';
import { SVGProps } from 'react';
const SvgPerson = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.97631 10.3097C3.60143 9.68456 4.44928 9.33337 5.33333 9.33337H10.6667C11.5507 9.33337 12.3986 9.68456 13.0237 10.3097C13.6488 10.9348 14 11.7827 14 12.6667V14C14 14.3682 13.7015 14.6667 13.3333 14.6667H2.66667C2.29848 14.6667 2 14.3682 2 14V12.6667C2 11.7827 2.35119 10.9348 2.97631 10.3097Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.66667 4.66671C4.66667 2.82576 6.15906 1.33337 8.00001 1.33337C9.84095 1.33337 11.3333 2.82576 11.3333 4.66671C11.3333 6.50766 9.84095 8.00004 8.00001 8.00004C6.15906 8.00004 4.66667 6.50766 4.66667 4.66671Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPerson;
