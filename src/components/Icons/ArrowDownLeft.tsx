import * as React from "react";

function SvgArrowDownLeft(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12.707 3.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414-1.414l7-7a1 1 0 011.414 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 5a1 1 0 011 1v4h4a1 1 0 110 2H5a1 1 0 01-1-1V6a1 1 0 011-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgArrowDownLeft;
