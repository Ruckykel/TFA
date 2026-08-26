import React from "react";
import Link from "next/link";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ href, children, variant = "primary", className = "", ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-full font-semibold transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:translate-y-[1px]";
  const sizes = "px-5 py-3 text-sm";
  const variants: Record<string, string> = {
    primary: "bg-accent text-text hover:brightness-110 focus-visible:ring-accent",
    secondary: "border border-border text-text hover:bg-elevated focus-visible:ring-accent",
    ghost: "text-text hover:bg-elevated",
  };
  const classes = `${base} ${sizes} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}


