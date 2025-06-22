import React from "react";

// Define variant styles
const variantStyles = {
  primary: "bg-orange-500 text-white hover:bg-orange-600",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
  danger: "bg-red-600 text-white hover:bg-red-700",
  ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
};

// Define size styles
const sizeStyles = {
  sm: "px-3 py-1 text-base",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-2 text-lg",
  xl: "px-8 py-3 text-xl",
};

// Define rounded options
const roundedStyles = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  rounded = "md",
  fullWidth = false,
  disabled = false,
  loading = false,
  leftIcon = null,
  rightIcon = null,
  className = "",
  onClick = () => {},
  ...rest
}) => {
  const variantClass = variantStyles[variant] || "";
  const sizeClass = sizeStyles[size] || "";
  const roundedClass = roundedStyles[rounded] || "";

  const baseClasses = `
    inline-flex items-center justify-center transition-colors duration-200
    focus:outline-none
    ${variantClass}
    ${sizeClass}
    ${roundedClass}
    ${fullWidth ? "w-full" : ""}
    ${disabled || loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
    ${className}
  `;

  return (
    <button className={baseClasses} disabled={disabled || loading} onClick={onClick} {...rest}>
      {loading ? (
        <span className="animate-spin border-2 border-t-transparent border-white rounded-full w-4 h-4 mr-2"></span>
      ) : (
        leftIcon && <span className="mr-2">{leftIcon}</span>
      )}
      {children}
      {rightIcon && !loading && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;
