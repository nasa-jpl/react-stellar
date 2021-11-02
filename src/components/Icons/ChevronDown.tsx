import * as React from 'react';

function SvgChevronDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.711 5.297a1 1 0 01-.008 1.414l-4.05 4a1 1 0 01-1.414-.008l-3.95-4A1 1 0 014.71 5.297L7.96 8.586l3.338-3.297a1 1 0 011.414.008z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgChevronDown;
