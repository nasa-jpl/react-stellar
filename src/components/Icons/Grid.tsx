import * as React from "react";

function SvgGrid(props: React.SVGProps<SVGSVGElement>) {
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
        d="M6.333 2H2.667A.667.667 0 002 2.667v3.666c0 .369.298.667.667.667h3.666A.667.667 0 007 6.333V2.667A.667.667 0 006.333 2zM13.333 2H9.667A.667.667 0 009 2.667v3.666c0 .369.298.667.667.667h3.666A.667.667 0 0014 6.333V2.667A.667.667 0 0013.333 2zM13.333 9H9.667A.667.667 0 009 9.667v3.666c0 .368.298.667.667.667h3.666a.667.667 0 00.667-.667V9.667A.667.667 0 0013.333 9zM6.333 9H2.667A.667.667 0 002 9.667v3.666c0 .368.298.667.667.667h3.666A.667.667 0 007 13.333V9.667A.667.667 0 006.333 9z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgGrid;
