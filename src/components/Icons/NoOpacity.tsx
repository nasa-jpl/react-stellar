import * as React from 'react';

function SvgNoOpacity(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.667 1.208a.711.711 0 011.006 0l3.766 3.773a6.044 6.044 0 011.517 6.015l-1.19-1.288a4.622 4.622 0 00-1.332-3.72v-.001L8.17 2.717l-.966.965-.965-1.045 1.428-1.429zM3.435 5.496l.98 1.061a4.622 4.622 0 006.143 6.656l.98 1.061-.013.008a6.044 6.044 0 01-8.09-8.786z"
        fill="currentColor"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.422}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.96 2.216L13.995 14.17"
      />
    </svg>
  );
}

export default SvgNoOpacity;
