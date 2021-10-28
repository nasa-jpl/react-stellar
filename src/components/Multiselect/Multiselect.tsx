import classNames from "classnames";

type Option = {
  value: string;
  label: string | JSX.Element;
};

export type MultiselectProps = {
  options: Array<Option>;
  onChange: (value: string) => any;
  selectedValue: string;
  size?: "medium" | "large";
  className?: string;
};

export const Multiselect = (props: MultiselectProps) => {
  const {
    options,
    selectedValue,
    onChange,
    size = "medium",
    className = "",
  } = props;

  const multiSelectClass = classNames({
    "st-react-multiselect": true,
    [`st-react-multiselect--${size}`]: true,
    [className]: !!className,
  });
  const onOptionClick = (value: string) => {
    if (value !== selectedValue) onChange(value);
  };
  const renderOption = (option: Option) => {
    const optionClass = classNames({
      "st-react-multiselect--option": true,
      "st-react-multiselect--option--selected": option.value === selectedValue,
    });
    return (
      <button
        type="button"
        onClick={() => onOptionClick(option.value)}
        key={option.value}
        className={optionClass}
      >
        <div className="st-react-multiselect--optionText st-typography-medium">
          {option.label}
        </div>
      </button>
    );
  };
  return (
    <div className={multiSelectClass}>
      <div className="st-react-multiselect--background"></div>
      {options.map((option) => renderOption(option))}
    </div>
  );
};
