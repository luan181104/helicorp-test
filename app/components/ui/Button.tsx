import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-full px-6 py-3 text-sm font-medium transition-all duration-300",
        variant === "primary"
          ? "bg-black text-white hover:-translate-y-1 hover:shadow-xl"
          : "border border-gray-300 bg-white hover:bg-gray-100",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}