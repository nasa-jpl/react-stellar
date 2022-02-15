import ReactSelect, {
  ClearIndicatorProps,
  CommonProps,
  components,
  GroupBase,
  MultiValueRemoveProps,
  Props,
  SingleValue,
  SingleValueProps,
} from "react-select";
import { SelectComponents } from "react-select/dist/declarations/src/components";
import classNames from "classnames";
import { IconClose } from "components/Icons";

export interface OptionType {
  [string: string]: any;
}
export type OptionsType = OptionType[];
export interface GroupType {
  [string: string]: any; // group label
  options: OptionsType;
}

const ClearIndicator = (
  props: ClearIndicatorProps<OptionType, boolean, GroupType>,
) => {
  const {
    children = <IconClose />,
    innerProps: { ref, ...restInnerProps },
  } = props;
  return (
    <div
      {...restInnerProps}
      ref={ref}
      className="st-react-dropdown--clear-indicator"
    >
      {children}
    </div>
  );
};

export type DropdownProps = {
  options: OptionsType;
  className?: string;
  isSearchable?: boolean;
  isClearable?: boolean;
  disabled?: boolean;
  label?: string;
  labelPosition: "top" | "left" | "inner";
  components: SelectComponents<OptionType, boolean, GroupType>;
} & CommonProps<OptionType, boolean, GroupType> &
  Props;

export const Dropdown = (props: DropdownProps) => {
  const {
    options,
    disabled = false,
    isSearchable = false, // Set this to be off by default, react-select has it on by default
    label = "",
    labelPosition,
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
    singleValueProps: SingleValueProps,
  ) => {
    const { children, ...otherProps } = singleValueProps;
    return (
      <components.SingleValue {...otherProps}>
        {labelPosition === "inner" && (
          <span className="st-react-dropdown--inner-label">{label}:&nbsp;</span>
        )}
        {children}
      </components.SingleValue>
    );
  };

  const MultiValueRemove = (
    multiValueProps: MultiValueRemoveProps<OptionType>,
  ) => {
    return (
      <components.MultiValueRemove {...multiValueProps}>
        <IconClose />
      </components.MultiValueRemove>
    );
  };

  const selectComponents:
    | Partial<SelectComponents<unknown, boolean, GroupBase<unknown>>>
    | undefined = Object.assign(
    {},
    { SingleValue: SingleValueComponent, ClearIndicator, MultiValueRemove },
    propComponents,
  );

  return (
    <div className={containerClass}>
      {label && labelPosition !== "inner" && (
        <div className="st-react-dropdown--label st-typography-body">
          {label}
        </div>
      )}
      <ReactSelect
        options={options}
        components={selectComponents}
        isDisabled={disabled}
        isSearchable={isSearchable}
        classNamePrefix="st-react-dropdown--rs"
        className="st-react-dropdown--rs"
        {...rest}
      />
    </div>
  );
};
