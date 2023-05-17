import * as React from 'react';
import { SVGProps } from 'react';
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.8299 11.0534L14.6306 12.8553C15.1223 13.3475 15.1223 14.1453 14.6306 14.6375C14.1353 15.121 13.3449 15.121 12.8496 14.6375L11.0489 12.8362C8.2871 14.6838 4.57514 14.1337 2.46705 11.5645C0.358965 8.99525 0.542352 5.24488 2.89103 2.89386C5.23971 0.542843 8.98761 0.358013 11.5559 2.46655C14.1243 4.57508 14.6753 8.28923 12.8299 11.0534ZM12.0303 7.46715C12.0303 4.94385 9.98607 2.89832 7.46439 2.89832C4.94386 2.90109 2.90126 4.945 2.89848 7.46715C2.89848 9.99045 4.94271 12.036 7.46439 12.036C9.98607 12.036 12.0303 9.99045 12.0303 7.46715Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSearch;
