import * as React from "react";

function SvgLetterSpacing(props: React.SVGProps<SVGSVGElement>) {
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
        d="M9.265 3.526v6.121a.765.765 0 11-1.53 0v-6.12H5.857a.765.765 0 110-1.53h5.286a.765.765 0 010 1.53H9.265z"
        fill="currentColor"
      />
      <path
        d="M5.09 11.37a.789.789 0 01-.173.256l-.236.228h7.63l-.236-.228a.792.792 0 011.12-1.12l1.576 1.577a.788.788 0 01.166.26.74.74 0 010 .6.788.788 0 01-.166.26l-1.576 1.576a.792.792 0 01-1.12-1.12l.237-.228H4.68l.236.228a.792.792 0 01-1.119 1.12l-1.577-1.577a.79.79 0 01-.165-.26.789.789 0 010-.6.79.79 0 01.165-.26l1.577-1.576a.788.788 0 011.12 0 .789.789 0 01.172.863z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLetterSpacing;
