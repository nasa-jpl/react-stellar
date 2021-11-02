import * as React from 'react';

function SvgCollision(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#collision_svg__clip0_24:238)" fillRule="evenodd" clipRule="evenodd" fill="currentColor">
        <path d="M.293.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414z" />
        <path d="M.293.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414z" />
        <path d="M1 6a1 1 0 011-1h3V2a1 1 0 112 0v4a1 1 0 01-1 1H2a1 1 0 01-1-1zM15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414z" />
        <path d="M15 10a1 1 0 01-1 1h-3v3a1 1 0 11-2 0v-4a1 1 0 011-1h4a1 1 0 011 1zM13.354 2.646a.5.5 0 010 .708l-1 1a.5.5 0 01-.708-.708l1-1a.5.5 0 01.708 0zM14.5 6a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2a.5.5 0 01.5.5zM10 1.5a.5.5 0 01.5.5v2a.5.5 0 01-1 0V2a.5.5 0 01.5-.5zM2.646 13.354a.5.5 0 010-.708l1-1a.5.5 0 01.708.708l-1 1a.5.5 0 01-.708 0zM1.5 10a.5.5 0 01.5-.5h2a.5.5 0 010 1H2a.5.5 0 01-.5-.5zM6 14.5a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v2a.5.5 0 01-.5.5z" />
      </g>
    </svg>
  );
}

export default SvgCollision;
