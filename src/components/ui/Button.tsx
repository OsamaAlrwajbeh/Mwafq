import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  // Base styles
  const baseStyles =
    "font-semibold rounded transition-all duration-200 inline-flex items-center justify-center";

  // Variant styles
  const variantStyles = {
    primary:
      "bg-custom-darkBlue text-white hover:bg-opacity-90 active:bg-opacity-80",
    secondary:
      "bg-primary-blue text-white hover:bg-opacity-90 active:bg-opacity-80",
    outline:
      "border-2 border-gray-300 text-gray-700 bg-transparent hover:bg-gray-50 active:bg-gray-100",
  };

  // Size styles
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
        className + " cursor-pointer"
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
