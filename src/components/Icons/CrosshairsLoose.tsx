import * as React from 'react';
import { SVGProps } from 'react';
const SvgCrosshairsLoose = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 11.25C8.41421 11.25 8.75 11.5858 8.75 12V15C8.75 15.4142 8.41421 15.75 8 15.75C7.58579 15.75 7.25 15.4142 7.25 15V12C7.25 11.5858 7.58579 11.25 8 11.25Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 0.25C8.41421 0.25 8.75 0.585786 8.75 1V4C8.75 4.41421 8.41421 4.75 8 4.75C7.58579 4.75 7.25 4.41421 7.25 4V1C7.25 0.585786 7.58579 0.25 8 0.25Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.25 8C11.25 7.58579 11.5858 7.25 12 7.25L15 7.25C15.4142 7.25 15.75 7.58579 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75L12 8.75C11.5858 8.75 11.25 8.41421 11.25 8Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.25 8C0.25 7.58579 0.585786 7.25 1 7.25L4 7.25C4.41421 7.25 4.75 7.58579 4.75 8C4.75 8.41421 4.41421 8.75 4 8.75L1 8.75C0.585786 8.75 0.25 8.41421 0.25 8Z"
      fill="currentColor"
    />
    <circle cx={8} cy={8} r={1} fill="currentColor" />
  </svg>
);
export default SvgCrosshairsLoose;
