import classNames from "classnames";
import { ThemeContext } from "contexts/theme/theme";
import { useContext } from "react";

type Option = {
  value: string;
  label: string | JSX.Element;
};

export type MultiselectProps = {
  options: Array<Option>;
  onChange: (value: string) => any;
  selectedValue: string;
  className?: string;
};

export const Multiselect = (props: MultiselectProps) => {
  const { options, selectedValue, onChange, className = "" } = props;

  const theme = useContext(ThemeContext);
  const multiSelectClass = classNames({
    "stellar-multiselect": true,
    [`stellar-multiselect--${theme}`]: true,
    [className]: !!className,
  });
  const onOptionClick = (value: string) => {
    if (value !== selectedValue) onChange(value);
  };
  const renderOption = (option: Option) => {
    const optionClass = classNames({
      "stellar-multiselect--option": true,
      "stellar-multiselect--option--selected": option.value === selectedValue,
    });
    return (
      <button
        type="button"
        onClick={() => onOptionClick(option.value)}
        key={option.value}
        className={optionClass}
      >
        <div className="stellar-multiselect--optionText">{option.label}</div>
      </button>
    );
  };
  return (
    <div className={multiSelectClass}>
      <div className="stellar-multiselect--options">
        {options.map((option) => renderOption(option))}
      </div>
    </div>
  );
};
