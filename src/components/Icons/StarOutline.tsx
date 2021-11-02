import * as React from 'react';

function SvgStarOutline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.01 1.955a1.256 1.256 0 012.293 0l1.47 3.103 3.288.5c1.049.16 1.466 1.503.707 2.273l-2.378 2.413.561 3.409c.18 1.088-.917 1.918-1.855 1.404l-2.94-1.61-2.94 1.61c-.937.514-2.034-.316-1.855-1.404l.561-3.409-2.378-2.413c-.759-.77-.341-2.113.707-2.272l3.289-.501 1.47-3.103zm1.146 1.192l-1.3 2.744a1.284 1.284 0 01-.962.728l-2.909.443L5.09 9.197c.302.306.44.747.368 1.18l-.496 3.014 2.6-1.424a1.233 1.233 0 011.19 0l2.6 1.424-.496-3.015a1.367 1.367 0 01.368-1.18l2.104-2.134-2.909-.443a1.284 1.284 0 01-.962-.728l-1.3-2.744z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgStarOutline;
