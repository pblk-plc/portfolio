import type { ReactNode } from "react";
import "./PhotoGrid.css";

type PhotoGridProps = {
  children: ReactNode;
  gap?: string;
  minColumnWidth?: string;
  className?: string;
};

export default function PhotoGrid({
  children,
  gap = "8px",
  minColumnWidth = "300px",
  className = "",
}: PhotoGridProps) {
  return (
    <div
      className={`photo-grid${className ? ` ${className}` : ""}`}
      style={{
        gap,
        gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}, 1fr))`,
      }}
    >
      {children}
    </div>
  );
}
