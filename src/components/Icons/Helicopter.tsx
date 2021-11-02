import * as React from 'react';

function SvgHelicopter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M5 8a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1H6a1 1 0 01-1-1V8zM2 3h12.25a.75.75 0 000-1.5H8.106a1 1 0 01-.21-.022L2.21.259A1 1 0 001 1.237V2a1 1 0 001 1zM14 4H1.75a.75.75 0 000 1.5h6.144a1 1 0 01.21.022l5.687 1.219A1 1 0 0015 5.763V5a1 1 0 00-1-1z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.8 8.6a.5.5 0 01.1.7l-4.5 6a.5.5 0 01-.8-.6l4.5-6a.5.5 0 01.7-.1zm4.4 0a.5.5 0 01.7.1l4.5 6a.5.5 0 01-.8.6l-4.5-6a.5.5 0 01.1-.7z"
        fill="currentColor"
      />
      <path
        opacity={0.5}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.203 8.543a.5.5 0 00-.66.254l-2 4.5a.5.5 0 00.914.406l2-4.5a.5.5 0 00-.254-.66zM8.797 8.543a.5.5 0 01.66.254l2 4.5a.5.5 0 11-.914.406l-2-4.5a.5.5 0 01.254-.66z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M8.5 2.5V8h-1V2.5h1z" fill="currentColor" />
    </svg>
  );
}

export default SvgHelicopter;
