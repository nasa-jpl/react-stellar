import * as React from "react";

function SvgM20Navcam(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask id="M20_Navcam_svg__a" fill="currentColor">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 1a4 4 0 00-4 4v6a4 4 0 004 4h6a4 4 0 004-4V5a4 4 0 00-4-4H5zm3 11a4 4 0 100-8 4 4 0 000 8z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 1a4 4 0 00-4 4v6a4 4 0 004 4h6a4 4 0 004-4V5a4 4 0 00-4-4H5zm3 11a4 4 0 100-8 4 4 0 000 8z"
        fill="currentColor"
      />
      <path
        d="M1 5H0h1zm1 0a3 3 0 013-3V0a5 5 0 00-5 5h2zm0 6V5H0v6h2zm3 3a3 3 0 01-3-3H0a5 5 0 005 5v-2zm6 0H5v2h6v-2zm3-3a3 3 0 01-3 3v2a5 5 0 005-5h-2zm0-6v6h2V5h-2zm-3-3a3 3 0 013 3h2a5 5 0 00-5-5v2zM5 2h6V0H5v2zm6 6a3 3 0 01-3 3v2a5 5 0 005-5h-2zM8 5a3 3 0 013 3h2a5 5 0 00-5-5v2zM5 8a3 3 0 013-3V3a5 5 0 00-5 5h2zm3 3a3 3 0 01-3-3H3a5 5 0 005 5v-2z"
        fill="currentColor"
        mask="url(#M20_Navcam_svg__a)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.433 6.433a2 2 0 00-2 2 .667.667 0 01-1.333 0A3.333 3.333 0 018.433 5.1a.667.667 0 010 1.333z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgM20Navcam;
