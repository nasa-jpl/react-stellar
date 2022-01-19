import ReactSelect, {
  ClearIndicatorProps,
  CommonProps,
  components,
  MultiValueRemoveProps,
  SingleValue,
  SingleValueProps,
} from "react-select";
import { SelectComponents } from "react-select/dist/declarations/src/components";
import classNames from "classnames";
import { IconClose } from "components/Icons";

export type OptionType = { [string: string]: any };
export type OptionsType = OptionType[];
export type GroupType = {
  [string: string]: any; // group label
  options: OptionsType;
};

const ClearIndicator = (
  props: ClearIndicatorProps<OptionType, boolean, GroupType>
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
} & CommonProps<OptionType, boolean, GroupType>;

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
    props: SingleValueProps
  ) => {
    const { children, ...otherProps } = props;
    return (
      <components.SingleValue {...otherProps}>
        {labelPosition === "inner" && (
          <span className="st-react-dropdown--inner-label">{label}:&nbsp;</span>
        )}
        {children}
      </components.SingleValue>
    );
  };

  const MultiValueRemove = (props: MultiValueRemoveProps<OptionType>) => {
    return (
      <components.MultiValueRemove {...props}>
        <IconClose />
      </components.MultiValueRemove>
    );
  };

  const selectComponents = Object.assign(
    {},
    { SingleValue: SingleValueComponent, ClearIndicator, MultiValueRemove },
    propComponents
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
