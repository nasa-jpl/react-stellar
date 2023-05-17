import * as React from "react";

function SvgCrosshairsLoose(props: React.SVGProps<SVGSVGElement>) {
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
        d="M8 14.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13zM8 16A8 8 0 108 0a8 8 0 000 16z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 11.25a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75zM8 .25a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0V1A.75.75 0 018 .25zM11.25 8a.75.75 0 01.75-.75h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75zM.25 8A.75.75 0 011 7.25h3a.75.75 0 010 1.5H1A.75.75 0 01.25 8z"
        fill="currentColor"
      />
      <circle cx={8} cy={8} r={1} fill="currentColor" />
    </svg>
  );
}

export default SvgCrosshairsLoose;
