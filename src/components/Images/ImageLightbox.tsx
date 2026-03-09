import { useEffect, useRef } from "react";
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
  const ref = useRef(null);

  useEffect(() => {
    if (!isZoomed) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
        case " ":
        case "Enter":
          onClose();

        default:
          break;
      }
    };

    const handleScroll = () => onClose();

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isZoomed]);

  return (
    <CSSTransition
      in={isZoomed}
      classNames="fade"
      nodeRef={ref}
      timeout={300}
      unmountOnExit
    >
      <div ref={ref} className={`lightbox`} onClick={onClose}>
        <img src={src} alt={alt} className="lightbox-image" />
      </div>
    </CSSTransition>
  );
}
