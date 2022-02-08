import * as React from "react";

function SvgRotateCounterClockwise(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#rotate_counter_clockwise_svg__clip0_4823:16)">
        <path
          d="M1.603 6.5l2.74-2.74A6 6 0 115.258 13c-1.083-.72-1.675-1.5-2.175-2.5"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.118 7.105a.75.75 0 01-.693.463H1.182a.75.75 0 01-.75-.75V2.575a.75.75 0 011.28-.53l4.243 4.243a.75.75 0 01.163.817z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default SvgRotateCounterClockwise;
