import * as React from 'react';

function SvgChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.293 13.707a1 1 0 010-1.414L9.586 8 5.293 3.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgChevronRight;
