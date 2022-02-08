import * as React from "react";

function SvgChevronUp(props: React.SVGProps<SVGSVGElement>) {
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
        d="M3.289 10.703a1 1 0 01.008-1.414l4.05-4a1 1 0 011.414.008l3.95 4a1 1 0 01-1.422 1.406L8.04 7.414l-3.338 3.297a1 1 0 01-1.414-.008z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgChevronUp;
