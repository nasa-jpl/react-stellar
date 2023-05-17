import * as React from "react";

function SvgTargetSingle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.088 9.634l1.67 5.568a.25.25 0 00.479 0l1.679-5.595A4.984 4.984 0 017.968 10c-.665 0-1.3-.13-1.88-.366zm-.406-1.35l-.588-1.962A.25.25 0 015.334 6h5.328a.25.25 0 01.239.322l-.572 1.908A3.982 3.982 0 017.968 9c-.85 0-1.638-.265-2.286-.717z"
        fill="currentColor"
      />
      <circle cx={8} cy={5} r={4} fill="currentColor" />
    </svg>
  );
}

export default SvgTargetSingle;
