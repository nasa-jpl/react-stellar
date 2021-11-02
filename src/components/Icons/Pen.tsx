import * as React from 'react';

function SvgPen(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7.574 4.88l-3.47 3.47a8 8 0 00-2.08 3.622l-.426 1.615c-.13.494.321.945.815.815l1.615-.425a8 8 0 003.621-2.08l3.47-3.47a.667.667 0 000-.943L8.517 4.88a.667.667 0 00-.942 0zM11.04 1.414l-.396.396a.667.667 0 000 .943l2.604 2.603c.26.26.682.26.942 0l.396-.396a2 2 0 000-2.828l-.718-.718a2 2 0 00-2.828 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPen;
