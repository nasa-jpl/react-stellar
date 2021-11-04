import * as React from 'react';

function SvgCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.676 4.263a1 1 0 01.061 1.413l-5.5 6a1 1 0 01-1.474 0l-2.5-2.728a1 1 0 011.474-1.351L6.5 9.52l4.763-5.196a1 1 0 011.413-.061z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCheck;
