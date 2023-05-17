import * as React from "react";

function SvgPlan(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x={4} y={7} width={4} height={2} rx={1} fill="currentColor" />
      <rect x={6} y={10} width={6} height={2} rx={1} fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.75 4.625v9.75h10.5v-9.75H2.75zM2 3c-.552 0-1 .416-1 .929V15.07c0 .513.448.929 1 .929h12c.552 0 1-.416 1-.929V3.93C15 3.416 14.552 3 14 3H2z"
        fill="currentColor"
      />
      <path
        opacity={0.7}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.268 1a2 2 0 013.464 0H12a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1h2.268z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPlan;
