import * as React from 'react';

function SvgM20SuperCam(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M2 13h6v3H2v-3z" fill="currentColor" />
      <circle opacity={0.5} cx={12.214} cy={8.214} r={1.5} fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 1H1v10h13a1 1 0 001-1V3a2 2 0 00-2-2zm-3 9a4 4 0 100-8 4 4 0 000 8z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.333 4.333a2 2 0 00-2 2 .667.667 0 11-1.333 0A3.333 3.333 0 0110.333 3a.667.667 0 110 1.333z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgM20SuperCam;
