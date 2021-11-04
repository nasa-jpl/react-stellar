import * as React from 'react';

function SvgSpinner(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M14.066 8c.516 0 .94.42.872.932a7 7 0 11-7.252-7.925c.515-.023.896.437.85.951-.045.514-.501.885-1.015.933a5.131 5.131 0 105.525 6.038c.094-.507.504-.929 1.02-.929z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSpinner;
