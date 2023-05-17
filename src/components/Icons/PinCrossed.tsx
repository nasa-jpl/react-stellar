import * as React from 'react';
import { SVGProps } from 'react';
const SvgPinCrossed = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4.75077 11.2627C6.20509 13.0916 8.03709 14.3129 8.03709 14.3129C8.03709 14.3129 13.0742 10.9549 13.0742 7.03711C13.0742 6.76552 13.0523 6.49619 13.0094 6.2315L4.75077 11.2627Z"
      fill="currentColor"
    />
    <path
      d="M10.9438 2.92326C10.0992 2.32654 9.085 2 8.03709 2C6.70117 2 5.41996 2.53069 4.47532 3.47534C3.53067 4.41998 2.99998 5.70118 2.99998 7.03711C2.99998 7.27069 3.01789 7.50229 3.05156 7.7313L10.9438 2.92326Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.24051 10.8707C1.0998 10.4503 1.26853 9.98852 1.64711 9.75789L13.3644 2.61959C13.8852 2.30229 14.5659 2.55098 14.7594 3.12931C14.9002 3.54967 14.7314 4.01148 14.3529 4.24211L2.63557 11.3804C2.11474 11.6977 1.4341 11.449 1.24051 10.8707Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPinCrossed;
