import * as React from "react";

function SvgLayers(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#layers_svg__clip0_1489:6323)">
        <path
          d="M5.24 9.88l-3.346 1.673c-.494.247-.494.647 0 .894l5.212 2.606c.494.247 1.294.247 1.788 0l5.212-2.606c.494-.247.494-.647 0-.894l-3.26-1.63"
          stroke="currentColor"
          strokeWidth={1.5}
        />
        <mask id="layers_svg__a" fill="#fff">
          <rect
            width={8.944}
            height={8.944}
            rx={1}
            transform="matrix(.89443 .44721 -.89443 .44721 8 4)"
          />
        </mask>
        <rect
          width={8.944}
          height={8.944}
          rx={1}
          transform="matrix(.89443 .44721 -.89443 .44721 8 4)"
          stroke="currentColor"
          strokeWidth={3}
          mask="url(#layers_svg__a)"
        />
        <rect
          y={0.447}
          width={7.944}
          height={7.944}
          rx={0.5}
          transform="scale(1.26491 .63246) rotate(45 2.849 8.212)"
          fill="currentColor"
          stroke="currentColor"
        />
      </g>
    </svg>
  );
}

export default SvgLayers;
