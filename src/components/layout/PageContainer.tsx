import type { ReactNode } from "react";
import "./PageContainer.css";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function PageContainer({ children, className = "" }: PageContainerProps) {
  return (
    <main id="main" className={`page-container${className ? ` ${className}` : ""}`}>
      {children}
    </main>
  );
}
