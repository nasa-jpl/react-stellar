import * as React from "react";

function SvgUpload(props: React.SVGProps<SVGSVGElement>) {
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
        d="M3 12.667a.333.333 0 00.333.333h9.334a.333.333 0 00.333-.333V10a1 1 0 112 0v2.667A2.333 2.333 0 0112.667 15H3.333A2.333 2.333 0 011 12.667V10a1 1 0 112 0v2.667z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.47 4.47A.75.75 0 005 5.75h2V10a1 1 0 102 0V5.75h2a.75.75 0 00.53-1.28l-3-3a.75.75 0 00-1.06 0l-3 3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgUpload;
