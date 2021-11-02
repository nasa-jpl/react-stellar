import * as React from 'react';

function SvgTextAlt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6.631 14.79h-1.01a.492.492 0 100 .985h4.701a.492.492 0 100-.985H9.311a.575.575 0 01-.575-.574V2.476c0-.317.258-.574.575-.574h2.84c.318 0 .575.257.575.574v1.336a.67.67 0 001.341 0V1.7a.825.825 0 00-.824-.825H2.7a.825.825 0 00-.825.825v2.112a.67.67 0 101.341 0V2.476c0-.317.258-.574.575-.574h2.84c.318 0 .575.257.575.574v11.74a.575.575 0 01-.575.574z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.25}
      />
    </svg>
  );
}

export default SvgTextAlt;
