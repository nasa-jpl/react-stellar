import * as React from 'react';
import { SVGProps } from 'react';
const SvgDatabase = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M8 0C3.79688 0 0.5 1.89231 0.5 4.30769L0.5 11.6923C0.5 14.1077 3.79687 16 8 16C12.2031 16 15.5 14.1077 15.5 11.6923L15.5 4.30769C15.5 1.89231 12.2031 0 8 0ZM14.25 8C14.25 8.73846 13.6328 9.49231 12.5625 10.0692C11.3516 10.7231 9.73437 11.0769 8 11.0769C6.26562 11.0769 4.64844 10.7231 3.4375 10.0692C2.36719 9.49231 1.75 8.73846 1.75 8V6.72308C3.08594 7.86923 5.35937 8.61539 8 8.61539C10.6406 8.61539 12.9141 7.86923 14.25 6.72308L14.25 8ZM12.5625 13.7615C11.3516 14.4154 9.73437 14.7692 8 14.7692C6.26562 14.7692 4.64844 14.4154 3.4375 13.7615C2.36719 13.1846 1.75 12.4308 1.75 11.6923V10.4154C3.08594 11.5615 5.35937 12.3077 8 12.3077C10.6406 12.3077 12.9141 11.5615 14.25 10.4154V11.6923C14.25 12.4308 13.6328 13.1846 12.5625 13.7615Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgDatabase;