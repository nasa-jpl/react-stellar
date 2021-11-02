import * as React from 'react';

function SvgContrast(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={8} cy={8} r={6.25} stroke="currentColor" strokeWidth={1.5} />
      <path d="M8 15A7 7 0 108 1v14z" fill="currentColor" />
    </svg>
  );
}

export default SvgContrast;
