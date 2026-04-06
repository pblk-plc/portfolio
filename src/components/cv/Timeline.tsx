import type { ReactNode } from "react";
import "./Timeline.css";

type TimelineProps = {
  children: ReactNode;
};

export default function Timeline({ children }: TimelineProps) {
  return <div className="timeline">{children}</div>;
}
