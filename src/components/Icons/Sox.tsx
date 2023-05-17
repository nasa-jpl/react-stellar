import * as React from "react";

function SvgSox(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={8} cy={8} r={4.5} stroke="currentColor" />
      <path
        d="M12 8a4 4 0 00-4-4v4h4zM4 8a4 4 0 004 4V8H4z"
        fill="currentColor"
      />
      <path
        d="M8 1v2M8 13v2M15 8h-2M3 8H1"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SvgSox;
