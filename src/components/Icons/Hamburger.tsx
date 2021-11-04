import * as React from 'react';

function SvgHamburger(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 2a1 1 0 011-1h12a1 1 0 110 2H2a1 1 0 01-1-1zM1 8a1 1 0 011-1h12a1 1 0 110 2H2a1 1 0 01-1-1zM1 14a1 1 0 011-1h12a1 1 0 110 2H2a1 1 0 01-1-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHamburger;
