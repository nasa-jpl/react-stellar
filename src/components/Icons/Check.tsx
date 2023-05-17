import * as React from 'react';
import { SVGProps } from 'react';
const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.6757 4.26285C13.0828 4.63604 13.1104 5.26861 12.7372 5.67573L7.23716 11.6757C7.04775 11.8824 6.78031 12 6.50001 12C6.2197 12 5.95226 11.8824 5.76285 11.6757L3.26285 8.94846C2.88966 8.54134 2.91716 7.90877 3.32428 7.53558C3.7314 7.16239 4.36397 7.18989 4.73716 7.59701L6.50001 9.52011L11.2629 4.32428C11.636 3.91716 12.2686 3.88966 12.6757 4.26285Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCheck;
