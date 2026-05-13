import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export function Button({ 
  className = "", 
  variant = "primary", 
  size = "md", 
  children,
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-primary text-white shadow-lg hover:opacity-90",
    secondary: "bg-soft text-foreground border border-line hover:bg-line/20",
    outline: "bg-transparent border border-primary text-primary hover:bg-primary/5"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs rounded-lg",
    md: "px-6 py-3 text-sm rounded-xl",
    lg: "px-8 py-4 text-lg rounded-xl"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button 
      className={combinedClassName}
      {...props}
    >
      {children}
    </button>
  );
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "flat" | "soft";
}

export function Card({ children, className = "", variant = "flat" }: CardProps) {
  const styles = {
    flat: "bg-white border border-line shadow-sm",
    soft: "bg-soft border border-line"
  };

  return (
    <div className={`${styles[variant]} rounded-xl p-6 ${className}`}>
      {children}
    </div>
  );
}
