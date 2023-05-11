import * as React from 'react';
import { SVGProps } from 'react';
const SvgVerticalCollapseWithCenterLine = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3.07156 5.17157L5.89999 8L3.07156 10.8284L3.07156 8L3.07156 5.17157Z" fill="currentColor" />
    <path
      d="M0.792288 8L5.89999 8M5.89999 8L3.07156 5.17157L3.07156 10.8284L5.89999 8Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12.9289 5.17157L10.1005 8L12.9289 10.8284L12.9289 8L12.9289 5.17157Z" fill="currentColor" />
    <path
      d="M15.3181 8L10.1005 8M10.1005 8L12.9289 5.17157L12.9289 10.8284L10.1005 8Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M8 15.7782V0.15282" stroke="currentColor" strokeWidth={2} />
  </svg>
);
export default SvgVerticalCollapseWithCenterLine;
