import * as React from "react";

function SvgProximityTarget(props: React.SVGProps<SVGSVGElement>) {
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
        opacity={0.8}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2H4v5c0 .552 1.79 1 4 1s4-.448 4-1V2z"
        fill="currentColor"
      />
      <ellipse cx={8} cy={2} rx={4} ry={1} fill="currentColor" />
      <path
        opacity={0.6}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.61 8.938C7.043 8.978 7.51 9 8 9c.489 0 .957-.022 1.39-.062l-.896 5.653c-.09.562-.899.562-.988 0L6.61 8.938z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgProximityTarget;
