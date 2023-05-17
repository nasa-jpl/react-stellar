import * as React from 'react';
import { SVGProps } from 'react';
const SvgEditing = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M9.41967 2.30729C9.84823 1.89757 10.523 1.89757 10.9515 2.30729C11.3745 2.73067 11.3739 3.41697 10.951 3.84035L10.3763 4.41498C10.2705 4.52079 10.0991 4.52079 9.99331 4.41498L8.84494 3.26518C8.73921 3.15934 8.73921 2.98776 8.84494 2.88192L9.41967 2.30729Z"
      fill="currentColor"
    />
    <path
      d="M7.75294 4.0711C7.85366 3.9763 8.0107 3.9763 8.11142 4.0711L9.1874 5.14789C9.28637 5.24697 9.28637 5.40758 9.1874 5.50665L5.81396 8.85645C5.36924 9.29805 4.84035 9.64584 4.25868 9.87919L3.34764 10.2447C3.25337 10.2799 3.14729 10.2582 3.07434 10.1888C3.00263 10.1171 2.98049 10.0096 3.01806 9.91532L3.38303 9.00349C3.616 8.42144 3.96354 7.89213 4.40501 7.44697L7.75294 4.0711Z"
      fill="currentColor"
    />
    <circle cx={8} cy={13} r={1} transform="rotate(90 8 13)" fill="currentColor" />
    <circle cx={5} cy={13} r={1} transform="rotate(90 5 13)" fill="currentColor" />
    <circle cx={11} cy={13} r={1} transform="rotate(90 11 13)" fill="currentColor" />
  </svg>
);
export default SvgEditing;
