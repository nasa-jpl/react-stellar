import * as React from 'react';

function SvgMove(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3.8 6.2L2 8l1.8 1.8M6.2 3.8L8 2l1.8 1.8M9.8 12.2L8 14l-1.8-1.8M12.2 6.2L14 8l-1.8 1.8M2 8h12M8 2v12"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgMove;
