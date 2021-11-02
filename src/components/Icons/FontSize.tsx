import * as React from 'react';

function SvgFontSize(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M2.977 12l.648-1.99h3.15L7.421 12h1.977L6.391 3.273H4.013L1 12h1.977zm1.117-3.43l1.074-3.303h.068L6.31 8.57H4.094zM10.96 12l.431-1.327h2.1L13.923 12h1.318l-2.006-5.818H11.65L9.64 12h1.319zm.744-2.287l.716-2.202h.045l.716 2.202h-1.477z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFontSize;
