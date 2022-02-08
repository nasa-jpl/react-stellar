import * as React from "react";

function SvgPolygon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#polygon_svg__polygonIconClip0)">
        <path
          d="M7.423 2a.667.667 0 011.154 0l6.207 10.75a.667.667 0 01-.578 1H1.793a.667.667 0 01-.577-1L7.423 2z"
          stroke="currentColor"
          strokeWidth={1.5}
        />
      </g>
    </svg>
  );
}

export default SvgPolygon;
