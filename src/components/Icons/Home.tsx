import * as React from "react";

function SvgHome(props: React.SVGProps<SVGSVGElement>) {
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
        d="M8 2.444l-5 3.89v7.222h3.333V8.833h3.334v4.723H13V6.333L8 2.444z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.833}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgHome;
