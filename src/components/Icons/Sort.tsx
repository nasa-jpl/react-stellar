import * as React from 'react';

function SvgSort(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M5 10.5v-9m0 0l-3 3m3-3l3 3M11 5.5v9m0 0l3-3m-3 3l-3-3"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgSort;
