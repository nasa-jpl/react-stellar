import * as React from "react";

function SvgAzElTarget(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse
        opacity={0.8}
        cx={8}
        cy={6}
        rx={4}
        ry={1.6}
        fill="currentColor"
      />
      <path
        d="M8 2a4 4 0 00-4 4l.138.055a10.4 10.4 0 007.725 0L12 6a4 4 0 00-4-4z"
        fill="currentColor"
      />
      <path
        opacity={0.6}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.538 8.49l.968 6.1c.09.563.899.563.988 0l.968-6.1A9.47 9.47 0 018 8.6a9.47 9.47 0 01-1.462-.11z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAzElTarget;
