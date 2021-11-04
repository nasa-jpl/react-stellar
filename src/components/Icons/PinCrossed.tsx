import * as React from 'react';

function SvgPinCrossed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M4.75 11.263c1.455 1.829 3.287 3.05 3.287 3.05s5.037-3.358 5.037-7.276c0-.271-.022-.54-.065-.806l-8.258 5.032zM10.944 2.923A5.037 5.037 0 003 7.037c0 .234.018.465.052.694l7.892-4.808z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.24 10.87a.95.95 0 01.407-1.112L13.364 2.62a.95.95 0 11.989 1.622L2.636 11.38a.95.95 0 01-1.395-.51z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPinCrossed;
