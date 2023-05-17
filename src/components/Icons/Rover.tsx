import * as React from 'react';
import { SVGProps } from 'react';
const SvgRover = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0_3577:8866)">
      <path
        d="M1 9C1 7.89543 1.89543 7 3 7H13C14.1046 7 15 7.89543 15 9V9.33444C15 9.80598 14.6706 10.2134 14.2095 10.3122L11.4965 10.8936C11.1668 10.9642 10.8474 11.0763 10.5458 11.2271L9.78885 11.6056C8.66274 12.1686 7.33726 12.1686 6.21115 11.6056L5.4542 11.2271C5.15261 11.0763 4.83316 10.9642 4.50346 10.8936L1.79047 10.3122C1.3294 10.2134 1 9.80598 1 9.33444V9Z"
        fill="currentColor"
      />
      <rect x={6} y={4} width={4} height={5} rx={1} fill="currentColor" />
      <path
        d="M5 13.5C5 13.2239 5.22386 13 5.5 13C5.77614 13 6 13.2239 6 13.5V14.5C6 14.7761 5.77614 15 5.5 15C5.22386 15 5 14.7761 5 14.5V13.5Z"
        fill="currentColor"
      />
      <path
        d="M10 13.5C10 13.2239 10.2239 13 10.5 13C10.7761 13 11 13.2239 11 13.5V14.5C11 14.7761 10.7761 15 10.5 15C10.2239 15 10 14.7761 10 14.5V13.5Z"
        fill="currentColor"
      />
      <path
        d="M0 13C0 12.4477 0.447715 12 1 12H3C3.55228 12 4 12.4477 4 13V15C4 15.5523 3.55228 16 3 16H1C0.447715 16 0 15.5523 0 15V13Z"
        fill="currentColor"
      />
      <path
        d="M12 13C12 12.4477 12.4477 12 13 12H15C15.5523 12 16 12.4477 16 13V15C16 15.5523 15.5523 16 15 16H13C12.4477 16 12 15.5523 12 15V13Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 1C4.44772 1 4 1.44772 4 2V4C4 4.55228 4.44772 5 5 5H11C11.5523 5 12 4.55228 12 4V2C12 1.44772 11.5523 1 11 1L5 1ZM10 4C10.5523 4 11 3.55228 11 3C11 2.44772 10.5523 2 10 2C9.44772 2 9 2.44772 9 3C9 3.55228 9.44772 4 10 4Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clip-path id="clip0_3577:8866">
        <rect width={16} height={16} fill="white" />
      </clip-path>
    </defs>
  </svg>
);
export default SvgRover;
