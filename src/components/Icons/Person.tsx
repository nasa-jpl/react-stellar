import * as React from 'react';

function SvgPerson(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.976 10.31a3.333 3.333 0 012.357-.977h5.334A3.333 3.333 0 0114 12.667V14a.667.667 0 01-.667.667H2.667A.667.667 0 012 14v-1.333c0-.884.351-1.732.976-2.357zM4.667 4.667a3.333 3.333 0 116.666 0 3.333 3.333 0 01-6.666 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPerson;
