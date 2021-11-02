import * as React from 'react';

function SvgCpu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        clipRule="evenodd"
        d="M3 4a1 1 0 011-1h8a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 7a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V7z"
        fill="currentColor"
      />
      <path
        d="M5 1a1 1 0 012 0v2H5V1zM9 1a1 1 0 012 0v2H9V1zM5 15a1 1 0 102 0v-2H5v2zM9 15a1 1 0 102 0v-2H9v2zM15 5a1 1 0 110 2h-2V5h2zM15 9a1 1 0 110 2h-2V9h2zM1 5a1 1 0 000 2h2V5H1zM1 9a1 1 0 000 2h2V9H1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCpu;
