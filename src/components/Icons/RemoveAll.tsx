import * as React from "react";

function SvgRemoveAll(props: React.SVGProps<SVGSVGElement>) {
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
        d="M3.333 10h-.666a1.333 1.333 0 01-1.334-1.333v-6a1.333 1.333 0 011.334-1.334h6A1.333 1.333 0 0110 2.667v.666m-1.417 5.25l3.5 3.5m-3.5 0l3.5-3.5M7.333 6h6c.737 0 1.334.597 1.334 1.333v6c0 .737-.597 1.334-1.334 1.334h-6A1.333 1.333 0 016 13.333v-6C6 6.597 6.597 6 7.333 6z"
        stroke="currentColor"
        strokeWidth={1.333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgRemoveAll;
