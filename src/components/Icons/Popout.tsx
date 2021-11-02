import * as React from 'react';

function SvgPopout(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M3 13l9-9m0 0H5.571M12 4v6.429" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
}

export default SvgPopout;
