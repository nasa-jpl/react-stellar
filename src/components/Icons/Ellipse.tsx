import * as React from "react";

function SvgEllipse(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={8} cy={8} r={7} stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
}

export default SvgEllipse;
