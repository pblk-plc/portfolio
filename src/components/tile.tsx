import { ReactNode } from "react";
import "./tile.css";

export interface TileProps {
  x: number;
  y: number;
  width?: number;
  height?: number;
  className?: string;
  children?: ReactNode;
}

export default function Tile({
  x,
  y,
  width = 1,
  height = 1,
  className = "",
  children,
  ...props
}: TileProps) {
  let cssClass: string = `tile ${className}`;

  if (x == 1) {
    cssClass += " tile-first-x";
  }

  // if (y == 1) {
  //   cssClass += " tile-first-y";
  // }

  return (
    <div
      className={`${cssClass}`}
      style={{
        gridColumn: `${x} / span ${width}`,
        gridRow: `${y} / span ${height}`,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
