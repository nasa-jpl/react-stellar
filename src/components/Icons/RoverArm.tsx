import * as React from "react";

function SvgRoverArm(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x={3} y={13} width={10} height={2} rx={1} fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.124 6.19a1 1 0 011.341-.448l1.55.775 1.891-.946-.294-1.768-1.542-.77a1 1 0 11.894-1.79l1.998 1a1 1 0 01.54.73L8 5.97A1 1 0 017.46 7.03l-2.998 1.5a1 1 0 01-.894.001L1.57 7.531a1 1 0 01-.447-1.341z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.89 7.364L8.738 8.66l.373-.467c.686-.914 1.466-1.407 2.319-1.604L7.133 4.634 5.89 7.364zm7.57.772a1.499 1.499 0 00-.29-.58 4.505 4.505 0 00-1.113-.055c-.77.068-1.482.405-2.15 1.297l-.005.007-.634.794-1.143 1.487a1.5 1.5 0 00-.241.464l-.142.45h3.464l1.988-2.587a1.5 1.5 0 00.265-1.277zM10.572 13H9l1.43.45.142-.45z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgRoverArm;
