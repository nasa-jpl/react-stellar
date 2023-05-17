import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4.46447 5.53554L8 2.00001L11.5355 5.53554L4.46447 5.53554Z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.99999 14.3137C7.44771 14.3137 6.99999 13.866 6.99999 13.3137L6.99999 6.53555L4.46446 6.53555C4.05999 6.53555 3.69536 6.2919 3.54058 5.91823C3.3858 5.54455 3.47135 5.11444 3.75735 4.82844L7.29288 1.29291C7.68341 0.902381 8.31657 0.902381 8.7071 1.29291L12.2426 4.82844C12.5286 5.11444 12.6142 5.54455 12.4594 5.91823C12.3046 6.2919 11.94 6.53555 11.5355 6.53555L8.99999 6.53555L8.99999 13.3137C8.99999 13.866 8.55228 14.3137 7.99999 14.3137Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgArrowUp;
