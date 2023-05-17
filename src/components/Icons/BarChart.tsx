import * as React from "react";

function SvgBarChart(props: React.SVGProps<SVGSVGElement>) {
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
        d="M9 9a1 1 0 011-1h4a1 1 0 011 1v5H9V9zM1 4a1 1 0 011-1h4a1 1 0 011 1v10H1V4z"
        fill="currentColor"
      />
      <path stroke="currentColor" d="M1 13.5h14" />
    </svg>
  );
}

export default SvgBarChart;
