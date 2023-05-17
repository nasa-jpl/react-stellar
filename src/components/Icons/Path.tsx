import * as React from 'react';
import { SVGProps } from 'react';
const SvgPath = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path opacity={0.6} d="M12 4L4 12" stroke="currentColor" strokeWidth={1.25} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.5 12.5C1.5 11.3954 2.39543 10.5 3.5 10.5C4.60457 10.5 5.5 11.3954 5.5 12.5C5.5 13.6046 4.60457 14.5 3.5 14.5C2.39543 14.5 1.5 13.6046 1.5 12.5Z"
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
export default SvgPath;
