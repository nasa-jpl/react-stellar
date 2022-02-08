import * as React from "react";

function SvgWarning(props: React.SVGProps<SVGSVGElement>) {
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
        d="M6.817 2.668l-5.88 9.819a1.389 1.389 0 001.186 2.083h11.763a1.39 1.39 0 001.188-2.083L9.191 2.668a1.389 1.389 0 00-2.375 0zM8 4.774a1 1 0 011 1v2.894a1 1 0 11-2 0V5.773a1 1 0 011-1zm0 5.977a1.25 1.25 0 100 2.5h.007a1.25 1.25 0 100-2.5H8z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgWarning;
