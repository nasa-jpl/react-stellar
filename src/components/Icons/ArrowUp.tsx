import * as React from 'react';

function SvgArrowUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7.546 12.728V3m0 0L4 6.546M7.546 3l3.545 3.546"
        stroke="currentColor"
        strokeWidth={1.333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgArrowUp;
