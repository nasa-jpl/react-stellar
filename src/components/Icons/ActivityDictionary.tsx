import * as React from "react";

function SvgActivityDictionary(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.157 5.25v11.701l.006.126c.062.58.543 1.016 1.15 1.016 1.88 0 2.892 0 3.615.142.65.214 1.229.5 2.457 1.213.362.214.868.214 1.23 0 1.156-.785 1.734-1.07 2.457-1.213.633-.125 1.487-.14 2.95-.142h.665c.65 0 1.156-.5 1.156-1.142V5.25h.796c.216 0 .361.143.361.357v13.199c0 .214-.145.357-.361.357h-2.215c-1.735 0-2.676.012-3.424.214-.867.214-1.518.642-2.747 1.57-.072.07-.29.07-.434 0-1.3-.928-1.952-1.356-2.747-1.57-.795-.214-1.88-.214-3.759-.214H3.361l-.088-.009C3.106 19.12 3 18.99 3 18.806v-13.2l.009-.086c.034-.165.167-.27.352-.27h.796zM5.594 3c1.791 0 2.824 0 3.789.218.757.218 1.446.654 2.273 1.308v9.446c0 .218.137.364.344.364.207 0 .344-.146.344-.364V4.526c.896-.654 1.516-1.09 2.273-1.308.836-.189 1.724-.214 3.111-.217L18.406 3l.084.009c.159.034.26.167.26.354v13.443l-.008.089a.325.325 0 01-.336.275c-1.791 0-2.824.072-3.582.217-.827.219-1.446.51-2.617 1.308a.42.42 0 01-.414 0c-1.17-.799-1.86-1.162-2.617-1.308-.657-.188-1.52-.214-2.905-.217h-.677c-.206 0-.344-.146-.344-.364V3.363c0-.218.138-.363.344-.363z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgActivityDictionary;
