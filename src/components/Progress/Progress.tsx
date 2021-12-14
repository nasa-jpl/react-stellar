import classNames from "classnames";
import * as RadixProgress from "@radix-ui/react-progress";

export type ProgressProps = {
  progress: number;
  className?: string;
};

export const Progress = (props: ProgressProps) => {
  const { progress = 0, className = "" } = props;

  const progressClass = classNames({
    "st-react-progress": true,
    [className]: !!className,
  });
  return (
    <RadixProgress.Root className={progressClass}>
      <RadixProgress.Indicator className="st-react-progress--indicator" style={{ width: `${progress}%` }} />
    </RadixProgress.Root>
  );
};
