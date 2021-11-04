import * as React from 'react';

function SvgPolyline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1 14.5L5.5 8l6-1.5 3-5.5" stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
}

export default SvgPolyline;
