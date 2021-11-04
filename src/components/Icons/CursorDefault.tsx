import * as React from 'react';

function SvgCursorDefault(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.84 9.516l4.646-1.651L2 1l3.64 13.776 2.726-4.108 3.264 4.177 1.474-1.152-3.263-4.177z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCursorDefault;
