import { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary" | "outline";
  text: string;
  startIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
  className?: string;
}

const variantClasses = {
  primary: "bg-blue-100 text-white",
  secondary: "bg-[#6155E2] text-white",
  outline: "border border-gray-500",
};

const defaultStyles =
  "px-4 py-2 rounded-md font-light flex items-center justify-center";

export function Button({
  variant,
  text,
  startIcon,
  onClick,
  fullWidth,
  loading,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={
        variantClasses[variant] +
        " " +
        `${className}` +
        " " +
        defaultStyles +
        `${fullWidth ? " w-full flex justify-center items-center" : ""} ${
          loading ? "opacity-45	" : ""
        }`
      }
      disabled={loading}
    >
      {startIcon && <div className="pr-2">{startIcon}</div>}

      {text}
    </button>
  );
}
