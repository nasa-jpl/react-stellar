import * as React from "react";

function SvgLock(props: React.SVGProps<SVGSVGElement>) {
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
        d="M8 3c-1.037 0-2 .927-2 2.226V7a1 1 0 01-2 0V5.226C4 2.962 5.724 1 8 1s4 1.962 4 4.226V7a1 1 0 11-2 0V5.226C10 3.926 9.037 3 8 3z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.586 6.586C2 7.172 2 8.114 2 10v1c0 1.886 0 2.828.586 3.414C3.172 15 4.114 15 6 15h4c1.886 0 2.828 0 3.414-.586C14 13.828 14 12.886 14 11v-1c0-1.886 0-2.828-.586-3.414C12.828 6 11.886 6 10 6H6c-1.886 0-2.828 0-3.414.586zm8.726 3.226a1 1 0 00-1.169-1.624l-3.422 2.464-.69-.803a1 1 0 00-1.517 1.302l1.288 1.5a1 1 0 001.343.16l4.167-3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLock;
