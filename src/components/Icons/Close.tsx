import * as React from 'react';

function SvgClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11.757 4.26a.826.826 0 00-1.17 0L8.125 6.723a.165.165 0 01-.234 0L5.43 4.26a.827.827 0 10-1.17 1.17l2.463 2.463a.166.166 0 010 .234L4.26 10.592a.828.828 0 000 1.17.84.84 0 001.17 0L7.89 9.3a.165.165 0 01.234 0l2.463 2.462a.841.841 0 001.17 0 .828.828 0 000-1.17L9.296 8.127a.166.166 0 010-.234l2.46-2.464a.827.827 0 000-1.17z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgClose;
