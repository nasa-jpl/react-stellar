import * as React from "react";

function SvgTable(props: React.SVGProps<SVGSVGElement>) {
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
        d="M7.253 8.875V14h1.75V8.875h5.125v-1.75H9.003V2h-1.75v5.125H2v1.75h5.253z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.878 2.75v10.5h10.5V2.75h-10.5zM2.128 1a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1h-12z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTable;
