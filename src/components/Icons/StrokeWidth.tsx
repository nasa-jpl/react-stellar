import * as React from "react";

function SvgStrokeWidth(props: React.SVGProps<SVGSVGElement>) {
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
        fill="currentColor"
        d="M2 2h12v.742H2zM2 5.708h12v1.483H2zM2 10.158h12v2.967H2z"
      />
    </svg>
  );
}

export default SvgStrokeWidth;
