import * as React from "react";

function SvgSunset(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        opacity={0.7}
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
      >
        <path d="M2.381 6.381a.875.875 0 011.238 0l1 1A.875.875 0 113.38 8.62l-1-1a.875.875 0 010-1.238zM.125 12c0-.483.392-.875.875-.875h1a.875.875 0 010 1.75H1A.875.875 0 01.125 12zM13.125 12c0-.483.392-.875.875-.875h1a.875.875 0 010 1.75h-1a.875.875 0 01-.875-.875zM13.619 6.381a.875.875 0 010 1.238l-1 1A.875.875 0 1111.38 7.38l1-1a.875.875 0 011.238 0zM.125 15c0-.483.392-.875.875-.875h14a.875.875 0 010 1.75H1A.875.875 0 01.125 15z" />
      </g>
      <path
        d="M10.954 3.412a.722.722 0 01-.13.726l-2.4 2.667A.571.571 0 018 7a.571.571 0 01-.424-.195l-2.4-2.667a.722.722 0 01-.13-.726A.603.603 0 015.6 3h4.8c.243 0 .461.162.554.412z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0a1 1 0 011 1v2a1 1 0 01-2 0V1a1 1 0 011-1zM4.5 12a3.5 3.5 0 117 0 .5.5 0 01-.5.5H5a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSunset;
