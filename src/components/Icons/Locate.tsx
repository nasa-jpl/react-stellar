import * as React from 'react';

function SvgLocate(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 3.75a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zM2.25 8a5.75 5.75 0 1111.5 0 5.75 5.75 0 01-11.5 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.25 8a.75.75 0 01.75-.75h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75zM.25 8A.75.75 0 011 7.25h4a.75.75 0 010 1.5H1A.75.75 0 01.25 8zM8 5.75A.75.75 0 017.25 5V1a.75.75 0 011.5 0v4a.75.75 0 01-.75.75zM8 15.75a.75.75 0 01-.75-.75v-4a.75.75 0 011.5 0v4a.75.75 0 01-.75.75z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLocate;
