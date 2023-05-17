import clsx from "clsx";
import React, { ReactNode } from "react";

type TextFieldProps = {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  containerClassName?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.HTMLAttributes<HTMLInputElement>;

const TextField = ({
  startIcon,
  endIcon,
  containerClassName,
  value,
  onChange,
  ...props
}: TextFieldProps) => {
  return (
    <div className={clsx("flex", containerClassName)}>
      {startIcon && (
        <div className="grid place-items-center px-2">{startIcon}</div>
      )}
      <input
        {...props}
        className={clsx("appearance-none outline-none", props.className)}
        value={value}
        type="text"
      />
      {endIcon && <div className="grid place-items-center px-2">{endIcon}</div>}
    </div>
  );
};

export default TextField;
