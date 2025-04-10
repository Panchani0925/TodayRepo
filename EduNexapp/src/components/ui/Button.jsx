import * as React from "react";

export const Button = React.forwardRef(function Button(
  { className, variant = "primary", size = "default", children, ...props },
  ref
) {
  // Base button classes
  const baseClasses =
    "inline-flex items-center justify-center text-sm font-medium transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  // Variant classes
  const variantClasses = {
    primary:
      "bg-blue-500 hover:bg-blue-400 text-white border-b-4 border-blue-700 hover:border-blue-500",
    secondary:
      "bg-gray-200 hover:bg-gray-300 text-gray-800 border-b-4 border-gray-400 hover:border-gray-300",
    danger:
      "bg-red-500 hover:bg-red-400 text-white border-b-4 border-red-700 hover:border-red-500",
    success:
      "bg-green-500 hover:bg-green-400 text-white border-b-4 border-green-700 hover:border-green-500",
    outline:
      "bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 hover:border-gray-400",
  };

  // Size classes
  const sizeClasses = {
    default: "py-2 px-4",
    sm: "py-1 px-3 text-xs",
    lg: "py-3 px-6 text-base",
  };

  return (
    <button
      className={`${baseClasses} ${
        variantClasses[variant] || variantClasses.primary
      } ${sizeClasses[size] || sizeClasses.default} ${className || ""}`}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});
