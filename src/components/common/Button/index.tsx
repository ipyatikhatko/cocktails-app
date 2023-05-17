import clsx from "clsx";
import React, { ReactNode } from "react";
type ButtonVariants = "primary" | "secondary" | "info";
type ButtonProps = {
  children?: ReactNode;
  label?: string;
  variant?: ButtonVariants;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  variant = "primary",
  label = "Button",
  startIcon,
  endIcon,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      type="button"
      className={clsx(
        //handle variants
        variant == "primary" && "bg-blue-500 text-blue-500",
        variant == "secondary" && "bg-slate-500 text-slate-500",
        variant == "info" && "bg-orange-500 text-orange-500",
        "flex items-center rounded-full bg-opacity-40 px-4 py-2 text-sm font-medium hover:bg-opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75",
        props.className
      )}
    >
      {startIcon && <div className="max-w-[24px] mr-4">{startIcon}</div>}
      {children && children}
      {label && <span className="flex-1">{label}</span>}
      {endIcon && <div className="max-w-[24px] ml-4">{endIcon}</div>}
    </button>
  );
};

export default Button;
