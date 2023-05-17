import * as React from "react";

function SvgCalendar(props: React.SVGProps<SVGSVGElement>) {
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
        d="M.5 2A1.5 1.5 0 012 .5h12A1.5 1.5 0 0115.5 2v12a1.5 1.5 0 01-1.5 1.5H2A1.5 1.5 0 01.5 14V2z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 2a1 1 0 011-1h12a1 1 0 011 1v1H1V2z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x={3} y={10} width={2} height={2} rx={0.5} fill="currentColor" />
      <rect x={3} y={6} width={2} height={2} rx={0.5} fill="currentColor" />
      <rect x={7} y={10} width={2} height={2} rx={0.5} fill="currentColor" />
      <rect x={7} y={6} width={2} height={2} rx={0.5} fill="currentColor" />
      <rect x={11} y={6} width={2} height={2} rx={0.5} fill="currentColor" />
    </svg>
  );
}

export default SvgCalendar;
