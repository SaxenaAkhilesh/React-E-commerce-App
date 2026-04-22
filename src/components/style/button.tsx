import React from 'react'

interface butttonProps {
    title: string;
    onClick?: () => void;
    variant?: "primary" | "success" | "danger" | "outline";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    className?: string;
}

const Button = (props: butttonProps) => {
    const { title, onClick, variant = "success", size = "sm", disabled = false, className } = props;

    const variantStyles = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white",
        success: "bg-green-600 hover:bg-green-700 text-white",
        danger: "bg-red-600 hover:bg-red-700 text-white",
        outline: "border border-gray-400 text-white hover:bg-gray-700"
    };



    const sizeStyles = {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg"
    };


    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
        rounded-lg transition-all duration-300
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
        >
            {title}
        </button>
    )
}

export default Button