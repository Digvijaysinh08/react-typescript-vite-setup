import { useState } from "react";
import {
  FieldError,
  UseFormRegister,
  FieldValues,
  Path,
} from "react-hook-form";

type CustomInputProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>;
  label?: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<TFormValues>;
  error?: FieldError;
  required?: boolean;
};

export const CustomInput = <TFormValues extends FieldValues>({
  name,
  label,
  type = "text",
  placeholder,
  register,
  error,
  required = false,
}: CustomInputProps<TFormValues>) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-gray-700 text-left"
        >
          {label} :-
        </label>
      )}

      <div className="relative">
        <input
          id={name}
          type={inputType}
          placeholder={placeholder}
          {...register(name, {
            required: required ? "This field is required" : false,
          })}
          className={`w-full rounded border px-3 py-2 focus:outline-none ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />

        {isPassword && (
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-sm text-gray-500"
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        )}
      </div>

      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};
