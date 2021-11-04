import * as React from 'react';

function SvgTimeline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={4} y={4} width={4} height={2} rx={1} fill="currentColor" />
      <rect x={6} y={7} width={4} height={2} rx={1} fill="currentColor" />
      <rect x={8} y={10} width={4} height={2} rx={1} fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.75 2.75v10.5h10.5V2.75H2.75zM2 1a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1H2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTimeline;
