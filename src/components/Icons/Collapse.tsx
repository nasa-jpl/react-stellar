import * as React from 'react';

function SvgCollapse(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M9 3l5 5-5 5M2 3l5 5-5 5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
}

export default SvgCollapse;
