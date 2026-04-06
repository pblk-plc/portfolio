import { useEffect, useRef, useCallback } from "react";
import { CSSTransition } from "react-transition-group";
import "./ImageLightbox.css";

type ImageLightboxProps = {
  src: string;
  alt?: string;
  isZoomed: boolean;
  onClose: VoidFunction;
};

export default function ImageLightbox(props: ImageLightboxProps) {
  const { src, alt, isZoomed, onClose } = props;
  const ref = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  const stableClose = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    if (!isZoomed) return;

    previousFocus.current = document.activeElement as HTMLElement | null;
    ref.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        e.preventDefault();
        ref.current?.focus();
        return;
      }
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        e.preventDefault();
        stableClose();
      }
    };

    const handleScroll = () => stableClose();

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
      previousFocus.current?.focus();
    };
  }, [isZoomed, stableClose]);

  return (
    <CSSTransition in={isZoomed} classNames="fade" nodeRef={ref} timeout={300} unmountOnExit>
      <div
        ref={ref}
        className="lightbox"
        onClick={stableClose}
        role="dialog"
        aria-modal="true"
        aria-label="Image viewer"
        tabIndex={-1}
      >
        <img src={src} alt={alt} className="lightbox-image" />
        <button
          type="button"
          className="lightbox-close"
          onClick={(e) => {
            e.stopPropagation();
            stableClose();
          }}
          aria-label="Close image viewer"
        >
          &times;
        </button>
      </div>
    </CSSTransition>
  );
}
