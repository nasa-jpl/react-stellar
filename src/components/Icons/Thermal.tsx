import * as React from "react";

function SvgThermal(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask id="thermal_svg__a" fill="#fff">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 0a3 3 0 00-3 3v4a5 5 0 106 0V3a3 3 0 00-3-3z"
        />
      </mask>
      <path
        d="M5 7l.6.8.4-.3V7H5zm6 0h-1v.5l.4.3.6-.8zM6 3a2 2 0 012-2v-2a4 4 0 00-4 4h2zm0 4V3H4v4h2zm-2 4c0-1.308.627-2.47 1.6-3.2L4.4 6.2A5.992 5.992 0 002 11h2zm4 4a4 4 0 01-4-4H2a6 6 0 006 6v-2zm4-4a4 4 0 01-4 4v2a6 6 0 006-6h-2zm-1.6-3.2A3.992 3.992 0 0112 11h2a5.992 5.992 0 00-2.4-4.8l-1.2 1.6zM10 3v4h2V3h-2zM8 1a2 2 0 012 2h2a4 4 0 00-4-4v2z"
        fill="currentColor"
        mask="url(#thermal_svg__a)"
      />
      <path
        opacity={0.8}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 4a.5.5 0 00-.5.5v3.67a3.001 3.001 0 102 0V4.5a.5.5 0 00-.5-.5h-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgThermal;
