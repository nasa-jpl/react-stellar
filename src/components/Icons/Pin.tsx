import * as React from 'react';

function SvgPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.037 14.313s5.037-3.358 5.037-7.276A5.037 5.037 0 003 7.037c0 3.918 5.037 7.276 5.037 7.276zm1.68-7.276a1.679 1.679 0 11-3.359 0 1.679 1.679 0 013.358 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPin;
