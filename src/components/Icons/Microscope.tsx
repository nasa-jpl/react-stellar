import * as React from "react";

function SvgMicroscope(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x={2} y={13} width={12} height={3} rx={1} fill="currentColor" />
      <rect
        x={5.329}
        width={4}
        height={9}
        rx={0.5}
        transform="rotate(15 5.33 0)"
        fill="currentColor"
      />
      <path
        d="M10.141 3.56A6.5 6.5 0 017.586 16l-.04-3a3.5 3.5 0 001.376-6.698l1.22-2.741z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMicroscope;
