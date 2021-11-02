import * as React from 'react';

function SvgPlus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2a1 1 0 011 1v10a1 1 0 11-2 0V3a1 1 0 011-1z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 8a1 1 0 011-1h10a1 1 0 110 2H3a1 1 0 01-1-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPlus;
