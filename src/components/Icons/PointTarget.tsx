import * as React from 'react';

function SvgPointTarget(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        opacity={0.6}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.254 9.8c-.395.13-.816.2-1.254.2-.438 0-.86-.07-1.254-.2l.76 4.79c.09.563.899.563.988 0l.76-4.79z"
        fill="currentColor"
      />
      <path opacity={0.8} d="M12 5a4 4 0 11-8 0 4 4 0 018 0z" fill="currentColor" />
      <path d="M12 5c0 2.21-3 2.682-4 2.682S4 7.21 4 5a4 4 0 118 0z" fill="currentColor" />
    </svg>
  );
}

export default SvgPointTarget;
