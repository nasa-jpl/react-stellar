import * as React from "react";

function SvgSolLatest(props: React.SVGProps<SVGSVGElement>) {
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
        opacity={0.7}
        d="M7.313 3.624a.6.6 0 00.599-.599V.731a.6.6 0 00-1.199 0v2.294a.6.6 0 00.6.6zM3.714 4.695a.61.61 0 00.848 0 .6.6 0 000-.847L2.943 2.225a.6.6 0 00-.85.848l1.621 1.622zM3.492 7.444a.6.6 0 00-.6-.6H.6a.6.6 0 100 1.2h2.294a.6.6 0 00.599-.6zM14.4 6.845h-2.293a.6.6 0 000 1.198h2.294a.6.6 0 100-1.198zM3.712 9.888l-1.618 1.623a.6.6 0 000 .847.61.61 0 00.847 0l1.618-1.622a.6.6 0 00-.847-.847zM10.19 4.866a.6.6 0 00.424-.172l1.622-1.622a.6.6 0 00-.848-.848L9.766 3.847a.596.596 0 00.424 1.019z"
        fill="currentColor"
      />
      <path
        d="M7.252 9.84a2.697 2.697 0 100-5.394 2.697 2.697 0 000 5.395zM10.412 10.046a.722.722 0 01.726.13l2.667 2.4A.571.571 0 0114 13a.57.57 0 01-.195.424l-2.667 2.4a.722.722 0 01-.726.13A.603.603 0 0110 15.4v-4.8c0-.243.162-.462.412-.554z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 13a1 1 0 011-1h2a1 1 0 110 2H8a1 1 0 01-1-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSolLatest;
