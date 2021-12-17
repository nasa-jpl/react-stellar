import classNames from "classnames";
import * as RadixProgress from "@radix-ui/react-progress";

export type ProgressProps = {
  progress?: number;
  className?: string;
};

export const Progress = (props: ProgressProps) => {
  const { progress, className = "" } = props;

  // Consider the progress bar to be in an indeterminate state if no progress is provided
  const indeterminate = typeof progress !== "number";

  const progressClass = classNames({
    "st-react-progress": true,
    [className]: !!className,
  });
  return (
    <RadixProgress.Root className={progressClass} value={progress}>
      <RadixProgress.Indicator
        className="st-react-progress--indicator"
        style={{ width: `${progress}%` }}
      />
      {indeterminate && (
        <>
          <div className="st-react-progress--indeterminate--line subline inc" />
          <div className="st-react-progress--indeterminate--line subline dec" />
        </>
      )}
    </RadixProgress.Root>
  );
};
