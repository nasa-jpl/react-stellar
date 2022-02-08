import * as React from "react";

function SvgSunrise(props: React.SVGProps<SVGSVGElement>) {
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
        d="M10.954 3.588a.722.722 0 00-.13-.726L8.424.195A.571.571 0 008 0c-.16 0-.312.07-.424.195l-2.4 2.667a.722.722 0 00-.13.726c.093.25.311.412.554.412h4.8a.603.603 0 00.554-.412z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 7a1 1 0 001-1V4a1 1 0 00-2 0v2a1 1 0 001 1zM4.5 12a3.5 3.5 0 117 0 .5.5 0 01-.5.5H5a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSunrise;
