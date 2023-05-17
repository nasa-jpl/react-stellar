import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.50001 7.99998C1.50001 8.55226 1.94773 8.99998 2.50001 8.99998L9.27819 8.99998V11.5355C9.27819 11.94 9.52183 12.3046 9.8955 12.4594C10.2692 12.6142 10.6993 12.5286 10.9853 12.2426L14.5208 8.70709C14.9114 8.31656 14.9114 7.6834 14.5208 7.29287L10.9853 3.75734C10.6993 3.47134 10.2692 3.38579 9.8955 3.54057C9.52183 3.69535 9.27819 4.05998 9.27819 4.46445V6.99998L2.50001 6.99998C1.94773 6.99998 1.50001 7.4477 1.50001 7.99998Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgArrowRight;
