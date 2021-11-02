import * as React from 'react';

function SvgRover(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#rover_svg__clip0_3577:8866)" fill="currentColor">
        <path d="M1 9a2 2 0 012-2h10a2 2 0 012 2v.334a1 1 0 01-.79.978l-2.714.582c-.33.07-.649.182-.95.333l-.757.379a4 4 0 01-3.578 0l-.757-.379a3.998 3.998 0 00-.95-.333l-2.714-.582A1 1 0 011 9.334V9z" />
        <rect x={6} y={4} width={4} height={5} rx={1} />
        <path d="M5 13.5a.5.5 0 011 0v1a.5.5 0 01-1 0v-1zM10 13.5a.5.5 0 011 0v1a.5.5 0 01-1 0v-1zM0 13a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H1a1 1 0 01-1-1v-2zM12 13a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 1a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1V2a1 1 0 00-1-1H5zm5 3a1 1 0 100-2 1 1 0 000 2z"
        />
      </g>
    </svg>
  );
}

export default SvgRover;
