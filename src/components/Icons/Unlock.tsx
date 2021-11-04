import * as React from 'react';

function SvgUnlock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.9 3C5.949 3 5 3.894 5 5.226V7a1 1 0 01-2 0V5.226C3 2.995 4.649 1 6.9 1c1.15 0 2.162.536 2.86 1.35a1 1 0 01-1.52 1.3C7.882 3.233 7.404 3 6.9 3z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 10c0-1.886 0-2.828.586-3.414C2.172 6 3.114 6 5 6h3c1.886 0 2.828 0 3.414.586C12 7.172 12 8.114 12 10v1c0 1.886 0 2.828-.586 3.414C10.828 15 9.886 15 8 15H5c-1.886 0-2.828 0-3.414-.586C1 13.828 1 12.886 1 11v-1zM16.475 3.235a.5.5 0 01-.34.62l-1.323.366a.5.5 0 01-.61-.357.5.5 0 01.34-.62l1.323-.367a.5.5 0 01.61.358zM15.816 6.72a.483.483 0 01-.674.18l-1.677-1a.517.517 0 01-.186-.692.484.484 0 01.674-.18l1.677 1c.237.141.32.451.185.692zM14.212.564c.238.141.32.451.186.692l-.969 1.732a.483.483 0 01-.673.18.517.517 0 01-.186-.692L13.54.744a.483.483 0 01.673-.18z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgUnlock;
