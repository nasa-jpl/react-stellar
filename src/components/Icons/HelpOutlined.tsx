import * as React from "react";

function SvgHelpOutlined(props: React.SVGProps<SVGSVGElement>) {
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
        d="M8 14.667A6.667 6.667 0 108 1.333a6.667 6.667 0 000 13.334z"
        stroke="currentColor"
        strokeWidth={1.333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.06 6a2 2 0 013.887.667c0 1.333-2 2-2 2M8 11.333h.008"
        stroke="currentColor"
        strokeWidth={1.333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgHelpOutlined;
