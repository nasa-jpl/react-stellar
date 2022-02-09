import React from "react";

import { Error } from "components/Error";
import { FormField } from "components/FormField";
import { Label } from "components/Label";
import { Input } from "index";

export interface TextFieldProps extends React.HTMLProps<HTMLInputElement> {
  inputClassName?: string;
  label?: string;
  error?: string;
  leftAdornment?: React.ReactNode;
  rightAdornment?: React.ReactNode;
  labelPosition?: "top" | "left";
}

export const TextField = ({
  ref,
  inputClassName,
  label,
  labelPosition = "top",
  required,
  error,
  leftAdornment,
  rightAdornment,
  ...inputProps
}: TextFieldProps) => {
  return (
    <FormField
      flow={labelPosition === "left" ? "horizontal" : "vertical"}
      className="st-react-text-field"
    >
      <Label required={required}>{label}</Label>

      <FormField flow="vertical">
        <Input
          ref={ref}
          className={inputClassName}
          leftAdornment={leftAdornment}
          rightAdornment={rightAdornment}
          error={!!error}
          {...inputProps}
        />
        <Error>{error}</Error>
      </FormField>
    </FormField>
  );
};
