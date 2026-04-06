import type { ReactNode } from "react";
import "./Badge.css";

type BadgeVariant = "filled" | "outline";

type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

export default function Badge({ children, variant = "filled", className = "" }: BadgeProps) {
  return (
    <span className={`badge badge-${variant}${className ? ` ${className}` : ""}`}>{children}</span>
  );
}
