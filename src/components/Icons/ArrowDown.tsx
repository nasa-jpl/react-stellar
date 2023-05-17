import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.99998 1.68628C8.55226 1.68628 8.99998 2.13399 8.99998 2.68628L8.99998 9.46445L11.5355 9.46445C11.94 9.46445 12.3046 9.7081 12.4594 10.0818C12.6142 10.4554 12.5286 10.8856 12.2426 11.1716L8.70709 14.7071C8.31656 15.0976 7.6834 15.0976 7.29287 14.7071L3.75734 11.1716C3.47134 10.8856 3.38579 10.4554 3.54057 10.0818C3.69535 9.7081 4.05998 9.46445 4.46445 9.46445L6.99998 9.46445L6.99998 2.68628C6.99998 2.13399 7.4477 1.68628 7.99998 1.68628Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgArrowDown;
