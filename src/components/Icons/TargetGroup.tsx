import * as React from 'react';

function SvgTargetGroup(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.814 12.1l.899 3.595c.063.252.422.252.485 0l.899-3.594c-.35.149-.737.232-1.142.232-.404 0-.79-.083-1.14-.232zm-.162-.649l-.23-.919a.25.25 0 01.243-.31h2.581a.25.25 0 01.243.31l-.23.92a2.405 2.405 0 01-1.304.38c-.48 0-.927-.14-1.303-.38z"
        fill="currentColor"
      />
      <circle cx={7.955} cy={9.416} r={2.416} fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.275 6.1l.899 3.595c.063.252.422.252.485 0l.898-3.594a2.907 2.907 0 01-2.282 0zm-.162-.649l-.23-.919a.25.25 0 01.243-.31h2.58a.25.25 0 01.243.31l-.23.92a2.405 2.405 0 01-1.303.38c-.48 0-.927-.14-1.303-.38z"
        fill="currentColor"
      />
      <circle cx={2.416} cy={3.416} r={2.416} fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.275 6.1l.899 3.595c.063.252.422.252.485 0l.898-3.594a2.907 2.907 0 01-2.282 0zm-.162-.649l-.23-.919a.25.25 0 01.243-.31h2.58a.25.25 0 01.244.31l-.23.92a2.405 2.405 0 01-1.304.38c-.48 0-.927-.14-1.303-.38z"
        fill="currentColor"
      />
      <circle cx={13.416} cy={3.416} r={2.416} fill="currentColor" />
    </svg>
  );
}

export default SvgTargetGroup;
