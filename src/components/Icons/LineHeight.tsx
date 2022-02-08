import * as React from "react";

function SvgLineHeight(props: React.SVGProps<SVGSVGElement>) {
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
        d="M4.003 6.397a.7.7 0 001.147-.228.7.7 0 00-.153-.766l-1.4-1.4a.7.7 0 00-.23-.147.7.7 0 00-.533 0 .7.7 0 00-.23.147l-1.4 1.4a.703.703 0 10.993.994l.203-.21v3.626l-.203-.21a.703.703 0 10-.994.994l1.4 1.4a.7.7 0 00.231.147.659.659 0 00.532 0 .7.7 0 00.231-.147l1.4-1.4a.702.702 0 10-.994-.994l-.203.21V6.187l.203.21zM7.3 5.2h7a.7.7 0 100-1.4h-7a.7.7 0 100 1.4zm7 2.1h-7a.7.7 0 100 1.4h7a.7.7 0 100-1.4zm0 3.5h-7a.7.7 0 000 1.4h7a.7.7 0 100-1.4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLineHeight;
