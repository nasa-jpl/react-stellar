import * as React from 'react';
import { SVGProps } from 'react';
const SvgRoverDrive = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0RoverDrive)">
      <circle cx={2} cy={14} r={2} fill="currentColor" />
      <circle cx={8} cy={14} r={2} fill="currentColor" />
      <circle cx={14} cy={14} r={2} fill="currentColor" />
      <path
        d="M1 10.526C1 9.68323 1.68322 9 2.52603 9H13.474C14.3168 9 15 9.68323 15 10.526C15 10.8858 14.7487 11.1967 14.3969 11.2721L11.9766 11.7907C11.3354 11.9281 10.6702 11.9058 10.0396 11.7256L9.09888 11.4568C8.38066 11.2516 7.61933 11.2516 6.90111 11.4568L5.96037 11.7256C5.3298 11.9058 4.66461 11.9281 4.02337 11.7907L1.60314 11.2721C1.25134 11.1967 1 10.8858 1 10.526Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.41422 3.94974C3.41422 3.39746 3.86193 2.94974 4.41422 2.94974L11.4853 2.94975C12.0376 2.94975 12.4853 3.39746 12.4853 3.94975C12.4853 4.50203 12.0376 4.94974 11.4853 4.94974L4.41422 4.94974C3.86193 4.94974 3.41422 4.50203 3.41422 3.94974Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.94977 7.48528C7.55924 7.09475 7.55924 6.46159 7.94977 6.07106L10.0711 3.94974L7.94977 1.82842C7.55924 1.4379 7.55924 0.804733 7.94977 0.414209C8.34029 0.0236841 8.97346 0.0236845 9.36398 0.414209L12.1924 3.24264C12.5829 3.63316 12.5829 4.26633 12.1924 4.65685L9.36398 7.48528C8.97346 7.8758 8.34029 7.8758 7.94977 7.48528Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clip-path id="clip0RoverDrive">
        <rect width={16} height={16} fill="currentColor" />
      </clip-path>
    </defs>
  </svg>
);
export default SvgRoverDrive;
