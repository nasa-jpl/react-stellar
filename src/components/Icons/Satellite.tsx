import * as React from "react";

function SvgSatellite(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={17}
      height={17}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        opacity={0.7}
        x={3.071}
        y={-0.293}
        width={6}
        height={4}
        rx={1}
        transform="rotate(45 3.071 -.293)"
        fill="currentColor"
      />
      <rect
        opacity={0.7}
        x={12.971}
        y={9.607}
        width={6}
        height={4}
        rx={1}
        transform="rotate(45 12.97 9.607)"
        fill="currentColor"
      />
      <rect
        x={8.728}
        y={3.95}
        width={6}
        height={6}
        rx={1}
        transform="rotate(45 8.728 3.95)"
        fill="currentColor"
      />
      <path
        opacity={0.7}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.66 11.21a.5.5 0 01.545.45c.08.833.504 1.756 1.27 2.522.766.766 1.689 1.19 2.522 1.27a.5.5 0 01-.095.996c-1.088-.104-2.221-.646-3.134-1.559-.913-.913-1.455-2.046-1.559-3.134a.5.5 0 01.45-.546z"
        fill="currentColor"
      />
      <path
        opacity={0.5}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.881 10.503a.5.5 0 01.445.55c-.07.655.124 1.275.563 1.715.44.44 1.06.633 1.715.563a.5.5 0 01.106.995c-.916.097-1.848-.171-2.528-.851-.68-.68-.948-1.612-.85-2.528a.5.5 0 01.55-.444z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSatellite;
