import * as React from "react";

function SvgRuler(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.536 1.222a1 1 0 00-1.415 0l-.707.707 1.414 1.414a1 1 0 01-1.414 1.414L9 3.343 6.879 5.464 8.293 6.88a1 1 0 11-1.414 1.414L5.464 6.879 3.344 9l1.413 1.414a1 1 0 11-1.414 1.414L1.93 10.414l-.707.707a1 1 0 000 1.415l3.535 3.535a1 1 0 001.415 0l9.9-9.9a1 1 0 000-1.414l-3.536-3.535z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgRuler;
