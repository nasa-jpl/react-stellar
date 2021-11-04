import * as React from 'react';

function SvgInfo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1.333A6.67 6.67 0 001.333 8 6.67 6.67 0 008 14.667 6.67 6.67 0 0014.666 8 6.67 6.67 0 008 1.333zm0 10a.669.669 0 01-.667-.666V8c0-.367.3-.667.667-.667.367 0 .667.3.667.667v2.667c0 .366-.3.666-.667.666zm-.667-6a.667.667 0 101.333 0 .667.667 0 00-1.333 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgInfo;
