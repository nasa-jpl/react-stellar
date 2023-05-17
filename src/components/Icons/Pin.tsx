import * as React from 'react';
import { SVGProps } from 'react';
const SvgPin = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.03711 14.3129C8.03711 14.3129 13.0742 10.9549 13.0742 7.03711C13.0742 5.70118 12.5435 4.41998 11.5989 3.47534C10.6542 2.53069 9.37303 2 8.03711 2C6.70118 2 5.41998 2.53069 4.47534 3.47534C3.53069 4.41998 3 5.70118 3 7.03711C3 10.9549 8.03711 14.3129 8.03711 14.3129ZM9.71615 7.03689C9.71615 7.9642 8.96442 8.71593 8.03711 8.71593C7.1098 8.71593 6.35807 7.9642 6.35807 7.03689C6.35807 6.10959 7.1098 5.35786 8.03711 5.35786C8.96442 5.35786 9.71615 6.10959 9.71615 7.03689Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPin;
