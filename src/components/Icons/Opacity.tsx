import * as React from "react";

function SvgOpacity(props: React.SVGProps<SVGSVGElement>) {
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
        d="M8.673 1.209a.711.711 0 00-1.006 0L3.894 4.981a6.044 6.044 0 108.545 0L8.673 1.208zM4.9 5.987A4.623 4.623 0 003.719 8h8.896a4.622 4.622 0 00-1.18-2.013L8.17 2.717 4.9 5.987z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgOpacity;
