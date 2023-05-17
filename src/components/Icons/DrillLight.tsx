import * as React from "react";

function SvgDrillLight(props: React.SVGProps<SVGSVGElement>) {
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
        d="M5 10l2 4.5c0 .276.448.5 1 .5s1-.224 1-.5l2-4.5H5z"
        fill="#293137"
      />
      <path fill="#545F64" d="M5 3h6v6.8H5z" />
      <ellipse cx={8} cy={9.8} rx={3} ry={1.7} fill="#545F64" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 5h2v9.5c0 .276-.448.5-1 .5s-1-.224-1-.5V5zM1 5h2v9.5c0 .276-.448.5-1 .5s-1-.224-1-.5V5z"
        fill="#222829"
      />
      <ellipse cx={8} cy={5} rx={7} ry={2} fill="#969696" />
      <path fill="#969696" d="M1 3h14v2H1z" />
      <ellipse cx={8} cy={3} rx={7} ry={2} fill="#BCBCBC" />
    </svg>
  );
}

export default SvgDrillLight;
