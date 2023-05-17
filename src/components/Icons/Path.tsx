import * as React from "react";

function SvgPath(props: React.SVGProps<SVGSVGElement>) {
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
        opacity={0.6}
        d="M12 4l-8 8"
        stroke="currentColor"
        strokeWidth={1.25}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 12.5a2 2 0 114 0 2 2 0 01-4 0zM10.5 3.5a2 2 0 114 0 2 2 0 01-4 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPath;
