import * as React from "react";

function SvgUtilityWrench(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#utility_wrench_svg__clip0_3577:8864)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
      >
        <path d="M12.256 1.87c.439-.548.174-1.358-.527-1.318a4 4 0 104.22 4.22c.039-.702-.77-.967-1.32-.528l-1.74 1.392a1 1 0 01-1.331-.074l-.62-.62a1 1 0 01-.074-1.331l1.392-1.74z" />
        <path d="M11.248 5.252a2 2 0 010 2.829l-3.51 3.509c-.402.402-.578.967-.714 1.52A3 3 0 113.39 9.476c.552-.137 1.117-.313 1.519-.715l3.51-3.51a2 2 0 012.828 0zm-8.551 8.551a2 2 0 102.828-2.828 2 2 0 00-2.828 2.828z" />
      </g>
    </svg>
  );
}

export default SvgUtilityWrench;
