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
  const baseStyles =
    "font-semibold rounded transition-all duration-300 inline-flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary:
      "bg-custom-darkBlue text-white hover:bg-opacity-90 hover:shadow-lg hover:scale-105 active:bg-opacity-80 active:scale-100 shadow-md",
    secondary:
      "bg-primary-blue text-white hover:bg-opacity-90 hover:shadow-lg hover:scale-105 active:bg-opacity-80 active:scale-100 shadow-md",
    outline:
      "border text-custom-darkBlue bg-transparent hover:bg-custom-darkBlue hover:text-white hover:shadow-lg hover:scale-105 active:bg-opacity-90 active:scale-100",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
