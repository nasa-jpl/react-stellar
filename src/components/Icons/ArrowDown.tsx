import * as React from 'react';

function SvgArrowDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8.454 3.272V13m0 0L12 9.454M8.454 13L4.91 9.454"
        stroke="currentColor"
        strokeWidth={1.333}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SvgArrowDown;
