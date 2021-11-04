import * as React from 'react';

function SvgCrosshairsFine(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5 9v7h-1V9h1zM8.5 0v7h-1V0h1zM9 7.5h7v1H9v-1zM0 7.5h7v1H0v-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCrosshairsFine;
