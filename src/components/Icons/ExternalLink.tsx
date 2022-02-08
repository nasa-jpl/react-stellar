import * as React from "react";

function SvgExternalLink(props: React.SVGProps<SVGSVGElement>) {
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
        d="M3.333 5A.333.333 0 003 5.333v7.334a.333.333 0 00.333.333h7.334a.333.333 0 00.333-.333v-3a1 1 0 112 0v3A2.333 2.333 0 0110.667 15H3.333A2.333 2.333 0 011 12.667V5.333A2.333 2.333 0 013.333 3h3a1 1 0 110 2h-3zM9 2a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 11-2 0V3h-3a1 1 0 01-1-1z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.707 1.293a1 1 0 010 1.414L7.374 10.04A1 1 0 115.96 8.626l7.333-7.333a1 1 0 011.414 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgExternalLink;
