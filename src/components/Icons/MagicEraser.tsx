import * as React from 'react';
import { SVGProps } from 'react';
const SvgMagicEraser = (props: SVGProps<SVGSVGElement>) => (
  <svg width={15} height={14} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M14.5 8.49994C14.5 8.63254 14.4473 8.75972 14.3535 8.85349C14.2598 8.94726 14.1326 8.99994 14 8.99994H13V9.99994C13 10.1325 12.9473 10.2597 12.8535 10.3535C12.7598 10.4473 12.6326 10.4999 12.5 10.4999C12.3674 10.4999 12.2402 10.4473 12.1464 10.3535C12.0526 10.2597 12 10.1325 12 9.99994V8.99994H11C10.8674 8.99994 10.7402 8.94726 10.6464 8.85349C10.5526 8.75972 10.5 8.63254 10.5 8.49994C10.5 8.36733 10.5526 8.24015 10.6464 8.14638C10.7402 8.05261 10.8674 7.99994 11 7.99994H12V6.99994C12 6.86733 12.0526 6.74015 12.1464 6.64638C12.2402 6.55261 12.3674 6.49994 12.5 6.49994C12.6326 6.49994 12.7598 6.55261 12.8535 6.64638C12.9473 6.74015 13 6.86733 13 6.99994V7.99994H14C14.1326 7.99994 14.2598 8.05261 14.3535 8.14638C14.4473 8.24015 14.5 8.36733 14.5 8.49994ZM2.99997 3.24994H3.74997V3.99994C3.74997 4.13254 3.80264 4.25972 3.89641 4.35349C3.99018 4.44726 4.11736 4.49994 4.24997 4.49994C4.38257 4.49994 4.50975 4.44726 4.60352 4.35349C4.69729 4.25972 4.74997 4.13254 4.74997 3.99994V3.24994H5.49997C5.63257 3.24994 5.75975 3.19726 5.85352 3.10349C5.94729 3.00972 5.99997 2.88254 5.99997 2.74994C5.99997 2.61733 5.94729 2.49015 5.85352 2.39638C5.75975 2.30261 5.63257 2.24994 5.49997 2.24994H4.74997V1.49994C4.74997 1.36733 4.69729 1.24015 4.60352 1.14638C4.50975 1.05261 4.38257 0.999936 4.24997 0.999936C4.11736 0.999936 3.99018 1.05261 3.89641 1.14638C3.80264 1.24015 3.74997 1.36733 3.74997 1.49994V2.24994H2.99997C2.86736 2.24994 2.74018 2.30261 2.64641 2.39638C2.55264 2.49015 2.49997 2.61733 2.49997 2.74994C2.49997 2.88254 2.55264 3.00972 2.64641 3.10349C2.74018 3.19726 2.86736 3.24994 2.99997 3.24994ZM10.5 10.9999H9.99997V10.4999C9.99997 10.3673 9.94729 10.2401 9.85352 10.1464C9.75975 10.0526 9.63257 9.99994 9.49997 9.99994C9.36736 9.99994 9.24018 10.0526 9.14641 10.1464C9.05264 10.2401 8.99997 10.3673 8.99997 10.4999V10.9999H8.49997C8.36736 10.9999 8.24018 11.0526 8.14641 11.1464C8.05264 11.2401 7.99997 11.3673 7.99997 11.4999C7.99997 11.6325 8.05264 11.7597 8.14641 11.8535C8.24018 11.9473 8.36736 11.9999 8.49997 11.9999H8.99997V12.4999C8.99997 12.6325 9.05264 12.7597 9.14641 12.8535C9.24018 12.9473 9.36736 12.9999 9.49997 12.9999C9.63257 12.9999 9.75975 12.9473 9.85352 12.8535C9.94729 12.7597 9.99997 12.6325 9.99997 12.4999V11.9999H10.5C10.6326 11.9999 10.7598 11.9473 10.8535 11.8535C10.9473 11.7597 11 11.6325 11 11.4999C11 11.3673 10.9473 11.2401 10.8535 11.1464C10.7598 11.0526 10.6326 10.9999 10.5 10.9999ZM10.3562 6.35619L3.70622 12.9999C3.61381 13.0933 3.50381 13.1674 3.38259 13.218C3.26136 13.2685 3.13132 13.2946 2.99997 13.2946C2.86861 13.2946 2.73857 13.2685 2.61734 13.218C2.49612 13.1674 2.38612 13.0933 2.29372 12.9999L0.999966 11.7062C0.906615 11.6138 0.832511 11.5038 0.781936 11.3826C0.731362 11.2613 0.705322 11.1313 0.705322 10.9999C0.705322 10.8686 0.731362 10.7385 0.781936 10.6173C0.832511 10.4961 0.906615 10.3861 0.999966 10.2937L10.2937 0.999936C10.482 0.814434 10.7357 0.710449 11 0.710449C11.2643 0.710449 11.518 0.814434 11.7062 0.999936L13 2.29369C13.0933 2.38609 13.1674 2.49609 13.218 2.61731C13.2686 2.73854 13.2946 2.86858 13.2946 2.99994C13.2946 3.13129 13.2686 3.26133 13.218 3.38256C13.1674 3.50378 13.0933 3.61378 13 3.70619L10.3562 6.35619ZM8.70622 3.99994L9.99997 5.29369L12.2937 2.99994L11 1.70619L8.70622 3.99994Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgMagicEraser;