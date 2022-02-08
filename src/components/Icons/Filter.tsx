import * as React from "react";

function SvgFilter(props: React.SVGProps<SVGSVGElement>) {
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
        d="M1 4a1 1 0 011-1h12a1 1 0 110 2H2a1 1 0 01-1-1zM3.25 8A.75.75 0 014 7.25h8a.75.75 0 010 1.5H4A.75.75 0 013.25 8zM5.5 12a.5.5 0 01.5-.5h4a.5.5 0 010 1H6a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFilter;
