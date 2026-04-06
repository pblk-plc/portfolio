import { useState, useEffect } from "react";
import "./ScrollToTop.css";

type ScrollToTopProps = {
  threshold?: number;
};

function getScrollBehavior(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

export default function ScrollToTop({ threshold = 400 }: ScrollToTopProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: getScrollBehavior() });

  if (!visible) return null;

  return (
    <button className="scroll-to-top" onClick={scrollUp} aria-label="Scroll to top">
      &uarr;
    </button>
  );
}
