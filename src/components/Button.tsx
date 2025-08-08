import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type ButtonType = "button" | "submit" | "reset";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: ButtonType;
}

export const Button = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={twMerge(
          "button flex items-center justify-center",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
