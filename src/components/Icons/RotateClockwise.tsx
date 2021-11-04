import * as React from 'react';

function SvgRotateClockwise(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#rotate_clockwise_svg__clip0_5585:6804)">
        <path
          d="M14.397 6.5l-2.74-2.74a6 6 0 10-.915 9.24c1.083-.72 1.674-1.5 2.174-2.5"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.882 7.105a.75.75 0 00.693.463h4.243a.75.75 0 00.75-.75V2.575a.75.75 0 00-1.28-.53l-4.243 4.243a.75.75 0 00-.163.817z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default SvgRotateClockwise;
