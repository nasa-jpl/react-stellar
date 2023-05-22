import * as React from 'react';
import { SVGProps } from 'react';
const SvgUnlinked = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.192 2.129a4.015 4.015 0 0 1 5.632.049 4.022 4.022 0 0 1 .049 5.634l-.012.013-1.81 1.812a1 1 0 1 1-1.416-1.414l1.804-1.805c.76-.793.746-2.05-.03-2.827a2.015 2.015 0 0 0-2.822-.029L8.555 4.59a1 1 0 1 1-1.411-1.417l1.038-1.033.01-.01ZM5.364 6.362a1 1 0 0 1 0 1.415L3.562 9.582c-.76.793-.747 2.05.03 2.827.776.777 2.03.79 2.821.03l1.025-1.026a1 1 0 0 1 1.415 1.413L7.82 13.86l-.012.012a4.015 4.015 0 0 1-5.632-.049 4.022 4.022 0 0 1-.049-5.634l.012-.013 1.81-1.812a1 1 0 0 1 1.415 0ZM1.646 1.646a.5.5 0 0 1 .708 0l1 1a.5.5 0 1 1-.708.708l-1-1a.5.5 0 0 1 0-.708ZM5 .5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V1A.5.5 0 0 1 5 .5ZM.5 5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H1A.5.5 0 0 1 .5 5ZM14.354 14.354a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.707l1 1a.5.5 0 0 1 0 .707ZM11 15.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5ZM15.5 11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUnlinked;
