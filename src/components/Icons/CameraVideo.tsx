import * as React from 'react';

function SvgCameraVideo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.586 4.586C1 5.172 1 6.114 1 8c0 1.886 0 2.828.586 3.414C2.172 12 3.114 12 5 12h2c1.886 0 2.828 0 3.414-.586C11 10.828 11 9.886 11 8c0-1.886 0-2.828-.586-3.414C9.828 4 8.886 4 7 4H5c-1.886 0-2.828 0-3.414.586zM3.5 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM11.714 7.925c0-.591 0-.887.08-1.162.041-.138.097-.272.166-.399.137-.25.346-.46.764-.878l1.353-1.352a.457.457 0 01.78.323v6.936a.457.457 0 01-.78.323l-1.353-1.352c-.418-.418-.627-.627-.764-.878a1.996 1.996 0 01-.165-.4c-.08-.275-.08-.57-.08-1.161z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCameraVideo;
