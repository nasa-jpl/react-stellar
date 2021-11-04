import * as React from 'react';

function SvgChevronLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.703 12.711a1 1 0 01-1.414-.008l-4-4.05a1 1 0 01.008-1.414l4-3.95a1 1 0 011.406 1.422L7.414 7.96l3.297 3.338a1 1 0 01-.008 1.414z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgChevronLeft;
