import * as React from 'react';

function SvgArrowLine(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M15.75 1A.75.75 0 0015 .25H8.25a.75.75 0 000 1.5h6v6a.75.75 0 001.5 0V1zM2.03 15.03l13.5-13.5L14.47.47.97 13.97l1.06 1.06z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgArrowLine;
