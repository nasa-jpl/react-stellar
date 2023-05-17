import * as React from 'react';
import { SVGProps } from 'react';
const SvgSox = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={8} cy={8} r={4.5} stroke="currentColor" />
    <path
      d="M12 8C12 7.47471 11.8965 6.95457 11.6955 6.46927C11.4945 5.98396 11.1999 5.54301 10.8284 5.17157C10.457 4.80014 10.016 4.5055 9.53073 4.30448C9.04543 4.10346 8.52529 4 8 4L8 8H12Z"
      fill="currentColor"
    />
    <path
      d="M4 8C4 8.52529 4.10346 9.04543 4.30448 9.53073C4.5055 10.016 4.80014 10.457 5.17157 10.8284C5.54301 11.1999 5.98396 11.4945 6.46927 11.6955C6.95457 11.8965 7.47471 12 8 12L8 8L4 8Z"
      fill="currentColor"
    />
    <path d="M8 1V3" stroke="currentColor" strokeLinecap="round" />
    <path d="M8 13L8 15" stroke="currentColor" strokeLinecap="round" />
    <path d="M15 8L13 8" stroke="currentColor" strokeLinecap="round" />
    <path d="M3 8H1" stroke="currentColor" strokeLinecap="round" />
  </svg>
);
export default SvgSox;
