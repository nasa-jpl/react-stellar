import * as React from 'react';

function SvgDownload(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 12.667a.333.333 0 00.333.333h9.334a.333.333 0 00.333-.333V10a1 1 0 112 0v2.667A2.333 2.333 0 0112.667 15H3.333A2.333 2.333 0 011 12.667V10a1 1 0 112 0v2.667z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1a1 1 0 011 1v7a1 1 0 11-2 0V2a1 1 0 011-1z"
        fill="currentColor"
      />
      <path
        d="M11.693 6.713a.75.75 0 01-.163.817l-3 3a.75.75 0 01-1.06 0l-3-3A.75.75 0 015 6.25h6a.75.75 0 01.693.463z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDownload;
