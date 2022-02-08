import * as React from "react";

function SvgSearch(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12.83 11.053l1.8 1.802c.492.492.492 1.29 0 1.782a1.275 1.275 0 01-1.78 0l-1.801-1.8a6.456 6.456 0 01-8.582-1.272 6.466 6.466 0 01.424-8.671 6.456 6.456 0 018.665-.427 6.466 6.466 0 011.274 8.586zm-.8-3.586a4.567 4.567 0 00-4.566-4.569 4.572 4.572 0 00-4.566 4.57 4.567 4.567 0 004.566 4.568 4.567 4.567 0 004.566-4.569z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSearch;
