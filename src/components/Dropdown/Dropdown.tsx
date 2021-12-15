import ReactSelect, {
  CommonProps,
  components,
  ContainerProps,
  Props,
  SelectComponentsConfig,
  SingleValue,
  SingleValueProps,
} from "react-select";
import { SelectComponents } from "react-select/dist/declarations/src/components";
import classNames from "classnames";
import React, { Children } from "react";

export type OptionType = { [string: string]: any };
export type OptionsType = OptionType[];
export type GroupType = {
  [string: string]: any; // group label
  options: OptionsType;
};

export type DropdownProps = {
  options: OptionsType;
  className?: string;
  // multi: PropTypes.bool,
  isSearchable?: boolean;
  disabled?: boolean;
  // clearable: PropTypes.bool,
  label?: string;
  labelPosition: "top" | "left" | "inner";
  components: SelectComponents<OptionType, boolean, GroupType>;
  // labelWidth: PropTypes.number,
} & CommonProps<OptionType, boolean, GroupType>;

export const Dropdown = (props: DropdownProps) => {
  const {
    options,
    disabled = false,
    // multi,
    isSearchable = false,
    // clearable,
    label = "",
    labelPosition,
    // labelWidth,
    className = "",
    components: propComponents,
    ...rest
  } = props;

  const containerClass = classNames({
    "st-react-dropdown": true,
    "st-react-dropdown--label-top": labelPosition === "top",
    "st-react-dropdown--label-left": labelPosition === "left",
    "st-react-dropdown--label-inner": labelPosition === "inner",
    "st-react-dropdown--no-label": !label,
    [className]: !!className,
  });
  const SingleValueComponent: SingleValue<OptionType> = (
    props: SingleValueProps
  ) => {
    const { children, ...otherProps } = props;
    return (
      <components.SingleValue {...otherProps}>
        {labelPosition === "inner" && (
          <span className="st-react-dropdown--inner-label">{label}:</span>
        )}
        {children}
      </components.SingleValue>
    );
  };

  const selectComponents = Object.assign(
    {},
    { SingleValue: SingleValueComponent },
    propComponents
  );

  return (
    <div className={containerClass}>
      {label && labelPosition !== "inner" && (
        <div
          className="st-react-dropdown--label st-typography-body"
          // style={{ width: `${labelWidth}px` }}
        >
          {label}
        </div>
      )}
      <ReactSelect
        options={options}
        components={selectComponents}
        isDisabled={disabled}
        isSearchable={isSearchable}
        // menuIsOpen
        classNamePrefix="st-react-dropdown--rs"
        className="st-react-dropdown--rs"
        {...rest}
      />
    </div>
  );
};
