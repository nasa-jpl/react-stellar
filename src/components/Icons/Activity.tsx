import * as React from "react";

function SvgActivity(props: React.SVGProps<SVGSVGElement>) {
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
        d="M3.707 2.301l.26.26-.258.258a.5.5 0 10.707.707l.258-.258 1.355 1.357-.258.258a.5.5 0 00.708.707l.257-.258 1.356 1.356-.258.259a.5.5 0 00.707.706l.258-.257 1.355 1.356-.258.258a.5.5 0 10.708.707l.257-.258 1.356 1.357-.258.258a.5.5 0 00.707.707l.258-.258.776.777c.63.63.184 1.707-.707 1.707H3a1 1 0 01-1-1V3.008c0-.891 1.077-1.337 1.707-.707zm.356 4.659v4.483a.5.5 0 00.5.5h4.48a.5.5 0 00.354-.853l-4.48-4.484a.5.5 0 00-.854.354z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgActivity;
