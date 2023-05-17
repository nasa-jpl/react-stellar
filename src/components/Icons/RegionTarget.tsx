import * as React from 'react';
import { SVGProps } from 'react';
const SvgRegionTarget = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M12 4H4V12H12V4ZM3 3V13H13V3H3Z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.5 12.5C1.5 11.3954 2.39543 10.5 3.5 10.5C4.60457 10.5 5.5 11.3954 5.5 12.5C5.5 13.6046 4.60457 14.5 3.5 14.5C2.39543 14.5 1.5 13.6046 1.5 12.5Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 12.5C10.5 11.3954 11.3954 10.5 12.5 10.5C13.6046 10.5 14.5 11.3954 14.5 12.5C14.5 13.6046 13.6046 14.5 12.5 14.5C11.3954 14.5 10.5 13.6046 10.5 12.5Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.5 3.5C1.5 2.39543 2.39543 1.5 3.5 1.5C4.60457 1.5 5.5 2.39543 5.5 3.5C5.5 4.60457 4.60457 5.5 3.5 5.5C2.39543 5.5 1.5 4.60457 1.5 3.5Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 3.5C10.5 2.39543 11.3954 1.5 12.5 1.5C13.6046 1.5 14.5 2.39543 14.5 3.5C14.5 4.60457 13.6046 5.5 12.5 5.5C11.3954 5.5 10.5 4.60457 10.5 3.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgRegionTarget;
